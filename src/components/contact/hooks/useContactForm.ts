
import { useRef, FormEvent } from 'react';
import { useFormState, ContactFormData } from './useFormState';
import { useFormSubmission } from './useFormSubmission';

export type { ContactFormData } from './useFormState';

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { formData, handleChange, handleCheckboxChange, resetForm } = useFormState();
  const { isSubmitting, handleSubmit } = useFormSubmission(formData, resetForm);

  return {
    formData,
    formRef,
    isSubmitting,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  };
}
