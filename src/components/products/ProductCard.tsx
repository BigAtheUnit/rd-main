
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

type ProductCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  isNew?: boolean;
  isFeatured?: boolean;
  imageSrc: string;
  fullDescription: string;
  onShowDetails: () => void;
};

const ProductCard = ({ 
  title, 
  description, 
  icon: Icon, 
  isNew, 
  isFeatured, 
  imageSrc, 
  onShowDetails 
}: ProductCardProps) => {
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
            <Icon size={24} />
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

export default ProductCard;
