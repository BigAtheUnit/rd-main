
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfoCard from './contact/ContactInfoCard';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Background decorative elements */}
        <div className="absolute -right-20 top-1/3 w-60 h-60 bg-robin-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-1/3 w-60 h-60 bg-robin-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Optional section title for consistency */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-robin-dark">
            Contact <span className="text-robin-orange">Information</span>
          </h2>
          <div className="w-20 h-1 bg-robin-orange mx-auto mt-3 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-7xl mx-auto">
          {/* Left Column - Contact Form (Now first) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1"
          >
            <ContactForm />
          </motion.div>
          
          {/* Right Column - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-2"
          >
            <ContactInfoCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
