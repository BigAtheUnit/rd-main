
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

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

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjusted for better positioning
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth'  // Ensure smooth scrolling
      });
    }
    
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center" aria-label="Robin Digital Home">
          <img 
            src="/lovable-uploads/f3c26032-bae8-4fff-bd85-e3c865fc45a3.png" 
            alt="Robin Digital Logo" 
            className="h-14 w-auto md:h-24 md:w-auto" 
            width="240"
            height="75"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#solutions" 
            onClick={(e) => scrollToSection('solutions', e)}
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Solutions
          </a>
          <a 
            href="#sectors" 
            onClick={(e) => scrollToSection('sectors', e)}
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Sectors
          </a>
          <Link 
            to="/products" 
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Products
          </Link>
          <Link 
            to="/blog" 
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Blog
          </Link>
          <a 
            href="#testimonials" 
            onClick={(e) => scrollToSection('testimonials', e)}
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Testimonials
          </a>
          <Link 
            to="/contact" 
            className="bg-robin-orange text-white px-5 py-2 rounded-md hover:bg-robin-dark transition-colors"
          >
            Contact Us
          </Link>
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
        <nav className="flex flex-col space-y-6 items-center bg-white">
          {/* Close Button for Mobile Menu */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 p-2 text-robin-dark hover:text-robin-orange"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <a 
            href="#solutions"
            onClick={(e) => {
              toggleMenu();
              scrollToSection('solutions', e);
            }}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Solutions
          </a>
          <a 
            href="#sectors"
            onClick={(e) => {
              toggleMenu();
              scrollToSection('sectors', e);
            }}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Sectors
          </a>
          <Link 
            to="/products"
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Products
          </Link>
          <Link 
            to="/blog"
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Blog
          </Link>
          <a 
            href="#testimonials"
            onClick={(e) => {
              toggleMenu();
              scrollToSection('testimonials', e);
            }}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Testimonials
          </a>
          <Link 
            to="/contact"
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg w-full text-center bg-robin-orange text-white px-6 py-3 rounded-md hover:bg-robin-dark transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
