
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ContactCTAProps = {
  onContactClick: () => void;
};

const ContactCTA = ({ onContactClick }: ContactCTAProps) => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-robin-dark">Looking for a Custom Solution?</h2>
        <p className="text-robin-dark/70 mb-6">
          We also develop bespoke digital products tailored to your specific needs.
        </p>
        <Button 
          className="bg-robin-orange hover:bg-robin-dark transition-colors text-lg px-8 py-6 h-auto"
          onClick={onContactClick}
        >
          Contact Us
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ContactCTA;
