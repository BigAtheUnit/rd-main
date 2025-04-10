
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { isIOSDevice, isSafariBrowser } from './utils/browserDetection';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  const isIOS = isIOSDevice();
  const isSafari = isSafariBrowser();
  
  // Handler to prevent scroll position reset on iOS/Safari
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isIOS || isSafari) {
      // Store the current scroll position when a field is focused
      (window as any).__lastScrollPosition = window.scrollY;
    }
  };
  
  // Handler for blur events to restore scroll position
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isIOS || isSafari) {
      // Restore the scroll position after a short delay
      setTimeout(() => {
        if (typeof (window as any).__lastScrollPosition !== 'undefined') {
          window.scrollTo(0, (window as any).__lastScrollPosition);
        }
      }, 50);
    }
  };

  return (
    <div className="group space-y-2">
      <Label 
        htmlFor={id} 
        className="block text-sm font-medium text-robin-dark group-hover:text-robin-orange transition-colors"
      >
        {label}
      </Label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          className="w-full min-h-[140px] rounded-md border-robin-dark/20 focus:border-robin-orange focus:ring-robin-orange/20 transition-all duration-300 bg-white shadow-sm hover:shadow resize-none text-robin-dark"
          data-ios-fix="true"
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-md border-robin-dark/20 focus:border-robin-orange focus:ring-robin-orange/20 transition-all duration-300 bg-white shadow-sm hover:shadow text-robin-dark"
          data-ios-fix="true"
        />
      )}
    </div>
  );
};

export default FormField;
