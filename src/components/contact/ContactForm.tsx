
import React from 'react';
import { Card } from '@/components/ui/card';
import FormField from './FormField';
import FormActions from './FormActions';
import NewsletterCheckbox from './NewsletterCheckbox';
import { useContactForm } from './hooks/useContactForm';

const ContactForm = () => {
  const {
    formData,
    formRef,
    isSubmitting,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  } = useContactForm();

  return (
    <Card className="bg-gradient-to-br from-white to-robin-cream/70 shadow-lg rounded-xl border-t-4 border-robin-orange overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="p-8 relative">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-robin-orange/5 to-transparent pointer-events-none"></div>
        
        {/* Shine animation effect */}
        <div className="absolute -left-10 top-0 h-full w-20 bg-white/20 transform rotate-15 animate-shine pointer-events-none"></div>
        
        <h3 className="text-2xl font-bold text-robin-dark mb-6 relative">Send us a message</h3>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative" id="contact-form">
          <div className="space-y-4">
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
            
            <FormField
              id="Organisation" // Changed to match EmailJS template capitalization 
              label="Organisation"
              value={formData.Organisation} // Updated to match capitalization
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
