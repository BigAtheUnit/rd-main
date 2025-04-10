
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

type ContactInfoItem = {
  icon: React.ReactNode;
  title: string;
  details: React.ReactNode;
};

const ContactInfoCard = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail size={22} />,
      title: 'Email Us',
      details: <a href="mailto:hello@robindigital.com" className="hover:text-robin-orange transition-colors">hello@robindigital.com</a>
    },
    {
      icon: <Phone size={22} />,
      title: 'Call Us',
      details: <a href="tel:+441234567890" className="hover:text-robin-orange transition-colors">+44 (0) 123 456 7890</a>
    },
    {
      icon: <Clock size={22} />,
      title: 'Working Hours',
      details: (
        <div>
          <span className="block">Monday - Friday: 9:00 AM - 5:00 PM</span>
          <span>Weekend: Closed</span>
        </div>
      )
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Card className="bg-white shadow-xl rounded-2xl border-t-4 border-robin-orange overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 md:p-8 h-full flex flex-col relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-robin-cream/30 pointer-events-none"></div>
        
        <div className="mb-6 relative">
          <h3 className="text-2xl font-bold text-robin-dark mb-2">Contact Information</h3>
          <p className="text-robin-dark/70">
            Connect with our team using any of these contact methods.
          </p>
        </div>
        
        <motion.div 
          className="space-y-6 mt-2 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-robin-dark">{item.title}</h3>
                <div className="text-robin-dark/70 group-hover:text-robin-dark transition-colors">
                  {item.details}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social Media Links */}
        <div className="mt-auto pt-8 relative">
          <h4 className="text-lg font-medium text-robin-dark mb-4">Connect With Us</h4>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactInfoCard;
