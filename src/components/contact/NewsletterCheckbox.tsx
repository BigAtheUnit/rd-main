
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface NewsletterCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const NewsletterCheckbox: React.FC<NewsletterCheckboxProps> = ({ checked, onCheckedChange }) => {
  return (
    <div className="flex items-center space-x-2 pt-2">
      <Checkbox 
        id="newsletter" 
        name="newsletter"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-robin-orange data-[state=checked]:border-robin-orange"
      />
      <Label 
        htmlFor="newsletter" 
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Keep me updated with industry news and insights
      </Label>
    </div>
  );
};

export default NewsletterCheckbox;
