
import { useState, useRef, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("2e9rybcQIWSRcCfQ9"); // Public key for EmailJS

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

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Sanitize input to prevent XSS
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

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
      // Form validation with improved error messages
      if (!formData.name.trim()) {
        throw new Error("Please enter your name");
      }
      
      if (!formData.email.trim()) {
        throw new Error("Please enter your email address");
      }
      
      if (!isValidEmail(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      
      if (!formData.message.trim()) {
        throw new Error("Please enter your message");
      }
      
      // Limit message length to prevent abuse
      if (formData.message.length > 2000) {
        throw new Error("Message is too long. Please limit to 2000 characters.");
      }
      
      // Create sanitized data to send
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: formData.email, // Email doesn't need sanitization for EmailJS
        Organisation: sanitizeInput(formData.Organisation), // Matches EmailJS template capitalization
        message: sanitizeInput(formData.message),
        newsletter: formData.newsletter
      };
      
      // Apply rate limiting
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      const now = Date.now();
      if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
        throw new Error("Please wait a moment before submitting again");
      }
      
      // Log submission attempt for tracking
      console.log("Attempting to send form with EmailJS...");
      console.log("Form data:", sanitizedData);
      
      // Detect if the user is on Safari/iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      console.log("Browser detection:", { isIOS, isSafari, userAgent: navigator.userAgent });
      
      // Always use the direct send method for all browsers to ensure consistency
      const templateParams = {
        name: sanitizedData.name,
        email: sanitizedData.email,
        Organisation: sanitizedData.Organisation,
        message: sanitizedData.message,
        newsletter: sanitizedData.newsletter ? "Yes" : "No"
      };
      
      console.log("Template params for EmailJS:", templateParams);
      
      try {
        // Direct send method (better compatibility with Safari/iOS)
        const result = await emailjs.send(
          "service_0ifrai8", // Service ID
          "template_833msmm", // Template ID
          templateParams,
          "2e9rybcQIWSRcCfQ9" // Public key
        );
        
        console.log("EmailJS direct send result:", result);
      } catch (emailError) {
        console.error("EmailJS direct send error:", emailError);
        throw new Error("There was a problem sending your message. Please try again later.");
      }
      
      // Record successful submission time for rate limiting
      localStorage.setItem('lastFormSubmission', Date.now().toString());
      
      // Track successful submission
      if (window.gtag) {
        window.gtag('event', 'form_submission_success', {
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }
      
      // Hide Lovable edit button on iOS by adding a specific URL parameter
      if (isIOS || isSafari) {
        // Set a flag to hide the Lovable edit button in localStorage
        localStorage.setItem('hideLovableEditor', 'true');
        
        // If on iOS, append a URL parameter to hide the Lovable button
        if (window.location.href.indexOf('forceHideBadge=true') === -1) {
          const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
          const newUrl = window.location.href + separator + 'forceHideBadge=true';
          
          // Use history API to avoid page reload
          window.history.replaceState({}, document.title, newUrl);
        }
      }
      
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
      
      // Detailed error logging for debugging iOS issues
      console.log("Form submission error details:", {
        errorMessage: error instanceof Error ? error.message : "Unknown error",
        formRef: formRef.current ? "Form ref exists" : "Form ref is null",
        browserInfo: navigator.userAgent
      });
      
      // Track form submission error
      if (window.gtag) {
        window.gtag('event', 'form_submission_error', {
          event_category: 'Contact',
          event_label: error instanceof Error ? error.message : 'Unknown error',
        });
      }
      
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
