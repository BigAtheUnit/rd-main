
import { useState, useRef, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("KZfkn5WO-xbVxXR1L"); // Public key for EmailJS

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
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
    organization: '',
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
      
      if (!formRef.current) {
        throw new Error("Form reference is not available");
      }
      
      // Create sanitized data to send
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: formData.email, // Email doesn't need sanitization for EmailJS
        organization: sanitizeInput(formData.organization),
        message: sanitizeInput(formData.message),
        newsletter: formData.newsletter
      };
      
      // Apply rate limiting
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      const now = Date.now();
      if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
        throw new Error("Please wait a moment before submitting again");
      }
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_eqp32du", // Updated Service ID
        "template_5u9aebc", // Template ID
        formRef.current
      );
      
      console.log("EmailJS result:", result.text);
      
      // Record successful submission time for rate limiting
      localStorage.setItem('lastFormSubmission', Date.now().toString());
      
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out! We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      console.error("Error sending message:", error);
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
