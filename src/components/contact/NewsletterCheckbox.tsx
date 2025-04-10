
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface NewsletterCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const NewsletterCheckbox: React.FC<NewsletterCheckboxProps> = ({ checked, onCheckedChange }) => {
  return (
    <div className="flex items-start space-x-2 pt-2">
      <Checkbox 
        id="newsletter" 
        name="newsletter"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-1 data-[state=checked]:bg-robin-orange data-[state=checked]:border-robin-orange transition-colors duration-300"
      />
      <Label 
        htmlFor="newsletter" 
        className="text-sm text-robin-dark leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Keep me updated with industry news, design tips, and special offers from Robin Digital
      </Label>
    </div>
  );
};

export default NewsletterCheckbox;
