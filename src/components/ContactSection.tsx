
import React from 'react';
import ContactInfoCard from './contact/ContactInfoCard';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-robin-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-robin-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-robin-dark/70">
            Ready to discuss your next digital project? We're here to help transform your digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <ContactInfoCard />
          
          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
