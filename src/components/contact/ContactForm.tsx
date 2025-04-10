
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import FormField from './FormField';
import FormActions from './FormActions';
import NewsletterCheckbox from './NewsletterCheckbox';
import { useContactForm } from './hooks/useContactForm';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactForm = () => {
  const {
    formData,
    formRef,
    isSubmitting,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  } = useContactForm();
  
  const isMobile = useIsMobile();

  // Apply hiding for Lovable editor on component mount
  useEffect(() => {
    // Hide the Lovable editor for all browsers
    if (window.location.href.indexOf('forceHideBadge=true') === -1) {
      const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
      const newUrl = window.location.href + separator + 'forceHideBadge=true';
      window.history.replaceState({}, document.title, newUrl);
    }
    
    // Set local storage flag to hide Lovable editor
    localStorage.setItem('hideLovableEditor', 'true');
    
    // Add meta tag to prevent zooming on mobile
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    console.log("Form mounted - Badge hiding applied to all browsers");
  }, []);

  return (
    <Card className="h-full bg-white shadow-xl rounded-2xl border-t-4 border-robin-orange overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 md:p-8 relative h-full">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white to-white pointer-events-none"></div>
        
        <h3 className="text-2xl font-bold text-robin-dark mb-2 relative">Get in Touch</h3>
        <p className="text-robin-dark mb-6">We'd love to hear from you. Fill out the form below.</p>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative" id="contact-form">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                id="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
              />
              
              <FormField
                id="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <FormField
              id="Organisation" // Matches EmailJS template capitalization
              label="Organisation"
              value={formData.Organisation}
              onChange={handleChange}
              placeholder="Your organisation name"
            />
            
            <FormField
              id="message"
              label="Message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry"
              required
            />
            
            <NewsletterCheckbox
              checked={formData.newsletter}
              onCheckedChange={handleCheckboxChange}
            />
          </div>
          
          <FormActions isSubmitting={isSubmitting} />
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
