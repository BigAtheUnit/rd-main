
import React from 'react';
import { Service } from '@/services/wordpress-api';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceDialogProps {
  service: Service;
  getIcon: (iconName: string) => JSX.Element;
  onClose: () => void;
}

const ServiceDialog: React.FC<ServiceDialogProps> = ({ service, getIcon, onClose }) => {
  // Parse content to remove any HTML tags like <p>
  const cleanContent = service.content ? 
    service.content.replace(/<\/?[^>]+(>|$)/g, '') : 
    `Our ${service.title} services are designed to help your organisation thrive in the digital landscape. We combine technical expertise with strategic thinking to deliver solutions that create real impact.`;

  const handleGetInTouch = () => {
    onClose(); // Close the dialog first
    
    // Navigate to home page and then scroll to contact section
    if (window.location.pathname === '/') {
      // If already on home page, just scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with #contact hash
      window.location.href = '/#contact';
      
      // Add a fallback to ensure scrolling happens after page load
      // This helps when the browser doesn't automatically scroll to the anchor
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <DialogContent className="sm:max-w-[550px] bg-white border-none shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-robin-dark flex items-center gap-3">
          <span className="text-robin-orange">{getIcon(service.icon)}</span>
          {service.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-robin-dark/80 mt-4 text-base leading-relaxed">
        {cleanContent}
      </DialogDescription>
      <div className="mt-6">
        <Button 
          className="w-full bg-robin-orange hover:bg-robin-orange/90 text-white"
          onClick={handleGetInTouch}
        >
          Get in Touch
        </Button>
      </div>
    </DialogContent>
  );
};

export default ServiceDialog;
