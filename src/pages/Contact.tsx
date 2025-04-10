
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { applyIOSFixes } from '@/components/contact/utils/browserDetection';

const Contact = () => {
  useEffect(() => {
    document.title = "Robin Digital | Contact Us";
    window.scrollTo(0, 0);
    
    // Apply badge hiding fixes without URL modification
    applyIOSFixes();
    
    // Set local storage flag to hide Lovable editor
    localStorage.setItem('hideLovableEditor', 'true');
    
    // Apply meta tag to prevent zooming on mobile
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Reduced height and improved engagement */}
        <div className="relative pt-16 pb-8 md:pt-24 md:pb-12">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-robin-orange/5 to-robin-orange/10 pointer-events-none" />
          <div className="absolute -right-40 top-20 w-80 h-80 bg-robin-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-40 top-40 w-80 h-80 bg-robin-orange/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-robin-dark mb-4">
                Let's <span className="text-robin-orange">Connect</span>
              </h1>
              <p className="text-xl text-robin-dark leading-relaxed">
                Ready to transform your digital presence? Our team is here to help bring your vision to life.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-robin-orange text-white font-medium rounded-full hover:bg-robin-orange/90 transition-colors"
                >
                  Get in touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
