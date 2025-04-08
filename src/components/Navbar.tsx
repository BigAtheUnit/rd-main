
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

  // Get the base path for navigation links
  const getNavLink = (section: string) => {
    return isProductsPage ? `/${section}` : `#${section}`;
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/f3c26032-bae8-4fff-bd85-e3c865fc45a3.png" 
            alt="Robin Digital Logo" 
            className="h-20 md:h-20" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to={isProductsPage ? "/#services" : "#services"} 
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Services
          </Link>
          <Link 
            to={isProductsPage ? "/#sectors" : "#sectors"} 
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Sectors
          </Link>
          <Link 
            to="/products" 
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Products
          </Link>
          <Link 
            to={isProductsPage ? "/#testimonials" : "#testimonials"} 
            className="text-robin-dark hover:text-robin-orange font-medium transition-colors"
          >
            Testimonials
          </Link>
          <Link 
            to={isProductsPage ? "/#contact" : "#contact"} 
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
        <nav className="flex flex-col space-y-6 items-center">
          <Link 
            to={isProductsPage ? "/#services" : "#services"}
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Services
          </Link>
          <Link 
            to={isProductsPage ? "/#sectors" : "#sectors"}
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Sectors
          </Link>
          <Link 
            to="/products"
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Products
          </Link>
          <Link 
            to={isProductsPage ? "/#testimonials" : "#testimonials"}
            onClick={toggleMenu}
            className="text-robin-dark hover:text-robin-orange font-medium text-lg"
          >
            Testimonials
          </Link>
          <Link 
            to={isProductsPage ? "/#contact" : "#contact"}
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
