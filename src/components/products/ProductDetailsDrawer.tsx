
import React from 'react';
import { ArrowRight, X, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from '@/components/ui/drawer';
import { useNavigate } from 'react-router-dom';

type ProductDetailsDrawerProps = {
  open: boolean;
  onClose: () => void;
  product: {
    title: string;
    fullDescription: string;
    icon: LucideIcon;
  } | null;
};

const ProductDetailsDrawer = ({ open, onClose, product }: ProductDetailsDrawerProps) => {
  if (!product) return null;
  
  const { title, fullDescription, icon: Icon } = product;
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    onClose();
    // Navigate to dedicated contact page
    navigate('/contact');
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
              <Icon size={24} />
            </div>
            <DrawerTitle className="text-xl font-bold text-robin-dark">{title}</DrawerTitle>
          </div>
          <DrawerDescription className="text-robin-dark/70">
            Coming Soon
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <p className="text-robin-dark/80 mb-6">{fullDescription}</p>
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

export default ProductDetailsDrawer;
