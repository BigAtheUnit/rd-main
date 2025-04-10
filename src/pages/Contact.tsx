
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
    
    // Hide the Lovable editor badge for all browsers, not just iOS
    if (window.location.href.indexOf('forceHideBadge=true') === -1) {
      const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
      const newUrl = window.location.href + separator + 'forceHideBadge=true';
      
      // Use history API to avoid page reload
      window.history.replaceState({}, document.title, newUrl);
    }
    
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
        {/* Hero Section */}
        <div className="relative">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-white to-white pointer-events-none" />
          <div className="absolute -right-40 top-20 w-80 h-80 bg-robin-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-40 top-40 w-80 h-80 bg-robin-orange/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-robin-dark mb-4">
                Let's <span className="text-robin-orange">Connect</span>
              </h1>
              <p className="text-xl text-robin-dark leading-relaxed mb-6">
                Have a question or ready to start your next digital project? We're here to help transform your ideas into reality.
              </p>
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
