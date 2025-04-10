
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfoCard from './contact/ContactInfoCard';
import ContactForm from './contact/ContactForm';
import { MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Background decorative elements */}
        <div className="absolute -right-20 top-1/3 w-60 h-60 bg-robin-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-1/3 w-60 h-60 bg-robin-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-7xl mx-auto">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <ContactForm />
          </motion.div>
          
          {/* Right Column - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <ContactInfoCard />
            
            {/* Map Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-robin-dark/5"
            >
              <div className="relative h-[250px] bg-gray-100 w-full overflow-hidden">
                <div className="absolute inset-0 opacity-90">
                  <div className="w-full h-full bg-robin-cream/50" style={{backgroundImage: `url("https://maps.googleapis.com/maps/api/staticmap?center=Lace+Market,Nottingham,UK&zoom=14&size=600x300&maptype=roadmap&markers=color:orange%7CThe+Lace+Market,Nottingham&key=YOUR_API_KEY")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-lg pulse-animation">
                    <MapPin className="w-6 h-6 text-robin-orange" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-robin-dark">Find Us</h3>
                <p className="text-sm text-robin-dark/70">The Lace Market, Nottingham City Centre, UK</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
