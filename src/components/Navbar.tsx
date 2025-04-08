
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/4ab2613f-3380-4c13-8856-aa4562794813.png" 
            alt="Robin Digital Logo" 
            className="h-10 md:h-12" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-robin-dark hover:text-robin-orange font-medium transition-colors">Services</a>
          <a href="#sectors" className="text-robin-dark hover:text-robin-orange font-medium transition-colors">Sectors</a>
          <a href="#tools" className="text-robin-dark hover:text-robin-orange font-medium transition-colors">Tools</a>
          <a href="#testimonials" className="text-robin-dark hover:text-robin-orange font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="bg-robin-orange text-white px-5 py-2 rounded-md hover:bg-robin-dark transition-colors">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-robin-dark">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#services" 
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Services
          </a>
          <a 
            href="#sectors" 
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Sectors
          </a>
          <a 
            href="#tools" 
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Tools
          </a>
          <a 
            href="#testimonials" 
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={toggleMenu}
            className="bg-robin-orange text-white px-6 py-3 rounded-md hover:bg-robin-dark transition-colors text-lg w-full text-center"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
