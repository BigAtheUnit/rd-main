
import React from 'react';
import { ArrowRight, Shield, FileEdit, Store, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type ProductProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  isNew?: boolean;
  isFeatured?: boolean;
  imageSrc: string;
};

const ProductCard = ({ title, description, icon, price, isNew, isFeatured, imageSrc }: ProductProps) => {
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
          <div>
            <span className="block text-sm text-robin-dark/60">Starting from</span>
            <span className="text-xl font-bold text-robin-dark">{price}</span>
          </div>
          <Button 
            className="bg-robin-orange hover:bg-robin-dark transition-colors"
            onClick={() => window.location.href = "/products"}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const ToolsSection = () => {
  const handleScrollToContact = () => {
    // Navigate to contact section
    window.location.href = "/#contact";
  };

  const products = [
    {
      title: "RobinShield",
      description: "Premium WordPress security plugin bundle that protects your site from malware, hackers, and vulnerabilities.",
      icon: <Shield size={24} />,
      price: "£19.99/mo",
      isFeatured: true,
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "PDF Pro",
      description: "Powerful PDF converter and editor for seamless document management and collaboration.",
      icon: <FileEdit size={24} />,
      price: "£9.99/mo",
      isNew: true,
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "WordPress Templates",
      description: "Premium WordPress themes designed for performance, SEO, and beautiful user experience.",
      icon: <Store size={24} />,
      price: "£59.99",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Booking System Pro",
      description: "Complete appointment and booking solution for service-based businesses.",
      icon: <Clock size={24} />,
      price: "£14.99/mo",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="tools" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Digital Products & Templates</h2>
          <p className="text-lg text-robin-dark/70">
            Ready-to-use digital tools and WordPress themes to enhance your online presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              price={product.price}
              isNew={product.isNew}
              isFeatured={product.isFeatured}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button 
              className="bg-robin-orange hover:bg-robin-dark transition-colors text-lg px-8 py-6 h-auto"
            >
              View All Products
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
