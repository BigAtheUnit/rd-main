
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
  return (
    <div className="group space-y-2">
      <Label 
        htmlFor={id} 
        className="block text-sm font-medium text-robin-dark/80 group-hover:text-robin-orange transition-colors"
      >
        {label}
      </Label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full min-h-[140px] rounded-md border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/20 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow resize-none"
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-md border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/20 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
        />
      )}
    </div>
  );
};

export default FormField;
