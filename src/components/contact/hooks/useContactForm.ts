
import { useState, useRef, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import { isValidEmail, sanitizeInput, validateForm } from '../utils/validation';
import { isIOSDevice, isSafariBrowser, applyIOSFixes } from '../utils/browserDetection';
import { sendEmail, EmailParams } from '../utils/emailService';
import { isWithinRateLimit, recordSubmission } from '../utils/rateLimiting';
import { trackFormSuccess, trackFormError } from '../utils/analytics';

export interface ContactFormData {
  name: string;
  email: string;
  Organisation: string; // Matches EmailJS template capitalization
  message: string;
  newsletter: boolean;
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
    newsletter: false
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
      // Validate form
      validateForm(formData);
      
      // Check rate limiting
      if (!isWithinRateLimit()) {
        throw new Error("Please wait a moment before submitting again");
      }
      
      // Create sanitized data to send
      const sanitizedData: EmailParams = {
        name: sanitizeInput(formData.name),
        email: formData.email, // Email doesn't need sanitization for EmailJS
        Organisation: sanitizeInput(formData.Organisation), // Matches EmailJS template capitalization
        message: sanitizeInput(formData.message),
        newsletter: formData.newsletter
      };
      
      // Apply badge hiding for all browsers, not just iOS/Safari
      // This ensures the "Edit with Lovable" badge doesn't show for any user
      if (window.location.href.indexOf('forceHideBadge=true') === -1) {
        const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
        const newUrl = window.location.href + separator + 'forceHideBadge=true';
        window.history.replaceState({}, document.title, newUrl);
      }
      
      // Set local storage flag to hide Lovable editor for everyone
      localStorage.setItem('hideLovableEditor', 'true');
      
      // Send the email
      await sendEmail(sanitizedData);
      
      // Record successful submission time for rate limiting
      recordSubmission();
      
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
        newsletter: false
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
