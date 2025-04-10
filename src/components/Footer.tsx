
import React from 'react';
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, redirect to home with the section hash
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Otherwise, scroll to the section on the current page with improved smoothness
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjusted for better positioning
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth' // Ensure smooth scrolling
      });
    }
  };

  return (
    <footer className="bg-robin-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/4ab2613f-3380-4c13-8856-aa4562794813.png" 
              alt="Robin Digital Logo" 
              className="h-16 mb-4" // Increased logo size
            />
            <p className="text-robin-cream/80 mb-6">
              Empowering organizations with innovative digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-robin-cream/70 hover:text-robin-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-robin-cream/70 hover:text-robin-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-robin-cream/70 hover:text-robin-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-robin-cream/70 hover:text-robin-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#solutions" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Solutions</a></li>
              <li><a href="/#sectors" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Sectors</a></li>
              <li><a href="/#testimonials" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Success Stories</a></li>
              <li><Link to="/contact" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="/#solutions" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Web Development</a></li>
              <li><a href="/#solutions" className="text-robin-cream/70 hover:text-robin-orange transition-colors">UX/UI Design</a></li>
              <li><a href="/#solutions" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Digital Strategy</a></li>
              <li><a href="/#solutions" className="text-robin-cream/70 hover:text-robin-orange transition-colors">AI Integration</a></li>
              <li><a href="/#solutions" className="text-robin-cream/70 hover:text-robin-orange transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 text-robin-orange shrink-0 mt-0.5" size={18} />
                <span className="text-robin-cream/70">hello@robindigital.com</span>
              </li>
              <li>
                <span className="block text-robin-cream/70">123 Digital Hub, Lace Market</span>
                <span className="block text-robin-cream/70">Nottingham City Centre, UK</span>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="inline-block bg-robin-orange text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-robin-dark transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-robin-cream/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Robin Digital. All rights reserved. Created by <a href="https://www.robindigital.io" className="text-robin-orange hover:text-white transition-colors">https://www.robindigital.io</a>
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="text-robin-cream/60 hover:text-robin-orange text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-robin-cream/60 hover:text-robin-orange text-sm transition-colors">Terms of Service</Link>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 bg-robin-orange/20 hover:bg-robin-orange rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
