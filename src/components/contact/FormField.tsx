
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
    <div className="group">
      <Label 
        htmlFor={id} 
        className="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors"
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
          className="w-full min-h-[120px] border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
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
          className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
        />
      )}
    </div>
  );
};

export default FormField;
