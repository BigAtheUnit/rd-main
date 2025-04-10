
import React, { useEffect, useState } from 'react';
import { Shield, FileEdit, Store, Clock, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from '@/components/ui/drawer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type ProductProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isNew?: boolean;
  isFeatured?: boolean;
  imageSrc: string;
  fullDescription: string;
  onShowDetails: () => void;
};

type ProductDetailsDrawerProps = {
  open: boolean;
  onClose: () => void;
  product: {
    title: string;
    fullDescription: string;
    icon: React.ReactNode;
  } | null;
};

const ProductDetailsDrawer = ({ open, onClose, product }: ProductDetailsDrawerProps) => {
  if (!product) return null;
  
  const handleContactClick = () => {
    onClose();
    // Navigate to homepage and scroll to contact section
    window.location.href = "/#contact";
  };
  
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="bg-white px-6 py-6">
        <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DrawerClose>
        <DrawerHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-robin-orange/10 rounded-lg flex items-center justify-center text-robin-orange">
              {product.icon}
            </div>
            <DrawerTitle className="text-xl font-bold text-robin-dark">{product.title}</DrawerTitle>
          </div>
          <DrawerDescription className="text-robin-dark/70">
            Coming Soon
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <p className="text-robin-dark/80 mb-6">{product.fullDescription}</p>
          <div className="mt-4 bg-robin-cream/50 p-4 rounded-lg border border-robin-orange/20">
            <h4 className="font-semibold text-robin-dark mb-2">Need this solution now?</h4>
            <p className="text-robin-dark/70 mb-4">While this product is still in development, we can create a custom solution tailored to your specific needs.</p>
            <Button 
              className="bg-robin-orange hover:bg-robin-dark transition-colors w-full"
              onClick={handleContactClick}
            >
              Contact Us For Custom Solution
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const ProductCard = ({ title, description, icon, isNew, isFeatured, imageSrc, fullDescription, onShowDetails }: ProductProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-robin-dark/5 hover:border-robin-orange/20 transition-all duration-300 flex flex-col h-full group">
      {isNew && (
        <div className="absolute top-4 right-4 bg-robin-orange text-white text-xs font-bold py-1 px-2 rounded-full z-10">
          NEW
        </div>
      )}
      {isFeatured && (
        <div className="absolute top-4 left-4 bg-robin-dark text-white text-xs font-bold py-1 px-2 rounded-full z-10">
          FEATURED
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-robin-orange/10 rounded-lg flex items-center justify-center shrink-0 text-robin-orange">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-robin-dark">{title}</h3>
        </div>
        
        <p className="text-robin-dark/70 mb-6">{description}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-robin-orange font-semibold">Coming Soon</span>
          <Button 
            className="bg-robin-orange hover:bg-robin-dark transition-colors"
            onClick={onShowDetails}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    fullDescription: string;
    icon: React.ReactNode;
  } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.title = "Robin Digital | Digital Products";
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    // Navigate to homepage and scroll to contact section
    window.location.href = "/#contact";
  };

  const products = [
    {
      title: "RobinShield",
      description: "Premium WordPress security plugin bundle that protects your site from malware, hackers, and vulnerabilities.",
      fullDescription: "RobinShield is a comprehensive WordPress security solution designed to protect your website from malware, hackers, and vulnerabilities. With real-time monitoring, automated backups, firewall protection, and malware scanning, RobinShield offers peace of mind for website owners. Built by our expert security team, this plugin bundle ensures your WordPress site remains secure and operational.",
      icon: <Shield size={24} />,
      isFeatured: true,
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "PDF Pro",
      description: "Powerful PDF converter and editor for seamless document management and collaboration.",
      fullDescription: "PDF Pro is a powerful tool designed to simplify document management and collaboration. It allows you to convert, edit, merge, split, compress, and annotate PDF files with ease. Perfect for businesses handling large volumes of documents, PDF Pro streamlines workflows and improves productivity with its intuitive interface and advanced features.",
      icon: <FileEdit size={24} />,
      isNew: true,
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "WordPress Templates",
      description: "Premium WordPress themes designed for performance, SEO, and beautiful user experience.",
      fullDescription: "Our premium WordPress templates are meticulously crafted for exceptional performance, SEO optimization, and beautiful user experiences. Each theme is responsive, highly customizable, and built with clean code to ensure fast loading times. Ideal for businesses, bloggers, and e-commerce sites looking to make a professional impression online.",
      icon: <Store size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Booking System Pro",
      description: "Complete appointment and booking solution for service-based businesses.",
      fullDescription: "Booking System Pro offers a comprehensive appointment scheduling solution for service-based businesses. With features like calendar management, automated reminders, payment processing, and customer management, it streamlines the booking process for both businesses and clients. Highly customizable to fit different industries including healthcare, fitness, beauty, consulting, and more.",
      icon: <Clock size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-commerce Template",
      description: "Fully responsive WordPress e-commerce theme with WooCommerce integration.",
      fullDescription: "Our E-commerce Template is a powerful, fully responsive WordPress theme designed specifically for online stores. Built with WooCommerce integration, it offers a smooth shopping experience across all devices. Features include customizable product pages, multiple payment gateways, inventory management, and analytics integration to help grow your online business.",
      icon: <Store size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Charity WordPress Theme",
      description: "Donor-focused WordPress theme built specifically for charitable organisations.",
      fullDescription: "Our Charity WordPress Theme is specifically designed to help nonprofit organizations maximize their online presence and fundraising efforts. With donation integration, campaign management, event scheduling, and volunteer coordination features, this theme provides everything needed to engage supporters and drive meaningful action. The donor-focused design ensures a seamless giving experience.",
      icon: <Store size={24} />,
      isNew: true,
      imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const handleShowDetails = (product: typeof products[0]) => {
    setSelectedProduct({
      title: product.title,
      fullDescription: product.fullDescription,
      icon: product.icon
    });
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-16 bg-robin-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-robin-dark">
                Digital Products & Templates
              </h1>
              <p className="text-lg text-robin-dark/70">
                High-quality digital tools, security plugins, and WordPress themes to enhance your online presence
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-robin-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard 
                  key={index}
                  title={product.title}
                  description={product.description}
                  fullDescription={product.fullDescription}
                  icon={product.icon}
                  isNew={product.isNew}
                  isFeatured={product.isFeatured}
                  imageSrc={product.imageSrc}
                  onShowDetails={() => handleShowDetails(product)}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-robin-dark">Looking for a Custom Solution?</h2>
                <p className="text-robin-dark/70 mb-6">
                  We also develop bespoke digital products tailored to your specific needs.
                </p>
                <Button 
                  className="bg-robin-orange hover:bg-robin-dark transition-colors text-lg px-8 py-6 h-auto"
                  onClick={handleContactClick}
                >
                  Contact Us
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ProductDetailsDrawer 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
