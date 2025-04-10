
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    document.title = "Robin Digital | Contact Us";
    window.scrollTo(0, 0);
    
    // Check if iOS and attempt to hide the Lovable editor
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (isIOS) {
      // If on iOS, apply the URL parameter to hide the Lovable editor
      if (window.location.href.indexOf('forceHideBadge=true') === -1) {
        const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
        const newUrl = window.location.href + separator + 'forceHideBadge=true';
        
        // Use history API to avoid page reload
        window.history.replaceState({}, document.title, newUrl);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-robin-orange/5 to-robin-cream/30 pointer-events-none" />
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
              <p className="text-xl text-robin-dark/70 leading-relaxed">
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
