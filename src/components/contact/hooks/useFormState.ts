
import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  Organisation: string; // Matches EmailJS template capitalization
  message: string;
  newsletter: boolean;
  contact_me_by_fax?: string; // Honeypot field
}

export function useFormState() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    Organisation: '', // Matches EmailJS template capitalization
    message: '',
    newsletter: false,
    contact_me_by_fax: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      Organisation: '',
      message: '',
      newsletter: false,
      contact_me_by_fax: ''
    });
  };

  return {
    formData,
    handleChange,
    handleCheckboxChange,
    resetForm
  };
}
