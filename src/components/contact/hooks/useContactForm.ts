
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
      // Form validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }
      
      if (!formRef.current) {
        throw new Error("Form reference is not available");
      }
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_6xvofva", // Service ID
        "template_5u9aebc", // Template ID
        formRef.current
      );
      
      console.log("EmailJS result:", result.text);
      
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
