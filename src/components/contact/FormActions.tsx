
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
      className="w-full bg-robin-orange hover:bg-robin-dark text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 py-6 h-auto text-md rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <div className="flex items-center gap-2">
            <span className="animate-pulse">Sending...</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <Send size={18} className="transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
};

export default FormActions;
