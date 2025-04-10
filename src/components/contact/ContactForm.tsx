
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import FormField from './FormField';
import FormActions from './FormActions';
import NewsletterCheckbox from './NewsletterCheckbox';
import { useContactForm } from './hooks/useContactForm';
import { useIsMobile } from '@/hooks/use-mobile';
import { isIOSDevice, isSafariBrowser } from './utils/browserDetection';

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
  const isIOS = isIOSDevice();
  const isSafari = isSafariBrowser();

  // Apply special handling for iOS/Safari devices to ensure form works
  useEffect(() => {
    // Add iOS/Safari specific event listeners and form attributes
    if (isIOS || isSafari) {
      const form = formRef.current;
      if (form) {
        // Add specific attributes for iOS compatibility
        form.setAttribute('autocomplete', 'on');
        form.setAttribute('data-is-ios', 'true');
        
        // Fix for Safari focus issues
        const inputFields = form.querySelectorAll('input, textarea');
        inputFields.forEach(input => {
          input.addEventListener('blur', (e) => {
            // Prevent iOS keyboard issues
            window.scrollTo(0, 0);
          });
        });
      }
    }
    
    console.log("Form mounted - Applied compatibility fixes for all devices");
  }, [isIOS, isSafari]);

  return (
    <Card className="h-full bg-white shadow-xl rounded-2xl border-t-4 border-robin-orange overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 md:p-8 relative h-full flex flex-col">
        {/* Background gradient effect with improved visual appeal */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white to-robin-cream/20 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-robin-dark mb-2">Send Us a Message</h3>
          <p className="text-robin-dark mb-6">We're excited to hear about your project! Fill out the form below and we'll get back to you shortly.</p>
        </motion.div>
        
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="space-y-5 relative flex-grow flex flex-col" 
          id="contact-form"
          data-ios-compatible={isIOS || isSafari ? "true" : "false"}
        >
          <div className="space-y-4 flex-grow">
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
            
            {/* Honeypot field - hidden from real users but bots will fill it */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <input
                type="text"
                id="contact_me_by_fax"
                name="contact_me_by_fax"
                value={formData.contact_me_by_fax || ""}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            
            <NewsletterCheckbox
              checked={formData.newsletter}
              onCheckedChange={handleCheckboxChange}
            />
          </div>
          
          <div className="mt-auto">
            <FormActions isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
