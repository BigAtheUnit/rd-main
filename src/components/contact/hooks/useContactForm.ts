
import { useState, useRef, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import { isValidEmail, sanitizeInput, validateForm, checkForSpam } from '../utils/validation';
import { isIOSDevice, isSafariBrowser } from '../utils/browserDetection';
import { sendEmail, EmailParams } from '../utils/emailService';
import { isWithinRateLimit, recordSubmission } from '../utils/rateLimiting';
import { trackFormSuccess, trackFormError } from '../utils/analytics';

export interface ContactFormData {
  name: string;
  email: string;
  Organisation: string; // Matches EmailJS template capitalization
  message: string;
  newsletter: boolean;
  contact_me_by_fax?: string; // Honeypot field
}

export function useContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    Organisation: '', // Matches EmailJS template capitalization
    message: '',
    newsletter: false,
    contact_me_by_fax: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check for spam submissions
      if (checkForSpam(formData)) {
        // Silently reject but act like it was submitted successfully
        console.log("Spam submission detected and blocked");
        
        // Fake success message after a realistic delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        toast({
          title: "🎉 Message sent successfully! 🎉",
          description: "Your message is on its way to our team. We'll be in touch soon!",
          duration: 6000,
          className: "bg-gradient-to-r from-robin-orange to-robin-orange border-robin-orange text-white",
        });
        
        // Clear form after fake "successful" submission
        setFormData({
          name: '',
          email: '',
          Organisation: '',
          message: '',
          newsletter: false,
          contact_me_by_fax: ''
        });
        
        setIsSubmitting(false);
        return;
      }
      
      // Validate form
      validateForm(formData);
      
      // Special handling for VPN users - skip rate limiting
      // We're prioritizing accepting legitimate submissions over strict rate limiting
      
      // Create sanitized data to send
      const sanitizedData: EmailParams = {
        name: sanitizeInput(formData.name),
        email: formData.email, // Email doesn't need sanitization for EmailJS
        Organisation: sanitizeInput(formData.Organisation), // Matches EmailJS template capitalization
        message: sanitizeInput(formData.message),
        newsletter: formData.newsletter
      };
      
      // Special handling for iOS/Safari
      const isIOS = isIOSDevice();
      const isSafari = isSafariBrowser();
      
      if (isIOS || isSafari) {
        // Apply additional iOS/Safari specific fixes for form submission
        console.log("Applying iOS/Safari specific form submission fixes");
        
        // Force focus blur to avoid keyboard issues
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        
        // Add small delay for Safari/iOS to properly process
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      // VPN-friendly email sending with multiple retries
      let emailSent = false;
      let retryCount = 0;
      const maxRetries = 3;
      
      while (!emailSent && retryCount < maxRetries) {
        try {
          console.log(`Attempt ${retryCount + 1} to send email`);
          const result = await sendEmail(sanitizedData);
          console.log("Email sent successfully:", result);
          emailSent = true;
        } catch (emailError) {
          retryCount++;
          console.error(`Email send attempt ${retryCount} failed:`, emailError);
          
          if (retryCount < maxRetries) {
            // Exponential backoff between retries: 500ms, 1000ms, 2000ms
            const delayMs = 500 * Math.pow(2, retryCount - 1);
            console.log(`Retrying in ${delayMs}ms...`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
          } else {
            // If all retries fail, rethrow the error
            throw new Error("Failed to send email after multiple attempts. Please try again later.");
          }
        }
      }
      
      // Try to record successful submission time for rate limiting
      try {
        recordSubmission();
      } catch (recordErr) {
        console.warn("Could not record submission for rate limiting:", recordErr);
        // Continue anyway - better to let the submission through than block it
      }
      
      // Track successful submission
      trackFormSuccess();
      
      // Updated success message
      toast({
        title: "🎉 Message sent successfully! 🎉",
        description: "Your message is on its way to our team. We'll be in touch soon!",
        duration: 6000,
        className: "bg-gradient-to-r from-robin-orange to-robin-orange border-robin-orange text-white",
      });
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        Organisation: '',
        message: '',
        newsletter: false,
        contact_me_by_fax: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Track form submission error
      trackFormError(error instanceof Error ? error.message : 'Unknown error');
      
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    formRef,
    isSubmitting,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  };
}
