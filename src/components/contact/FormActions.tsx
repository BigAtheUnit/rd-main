
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Sparkles } from 'lucide-react';

interface FormActionsProps {
  isSubmitting: boolean;
}

const FormActions: React.FC<FormActionsProps> = ({ isSubmitting }) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-robin-orange hover:bg-robin-dark text-white font-medium transition-colors flex items-center justify-center gap-2 py-6 h-auto text-md rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>Sending...<Send size={18} className="animate-bounce" /></>
      ) : (
        <>Send Message <Sparkles size={18} className="animate-pulse" /></>
      )}
    </Button>
  );
};

export default FormActions;
