
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

type ContactInfoItem = {
  icon: React.ReactNode;
  title: string;
  details: string;
};

const ContactInfoCard = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail size={22} />,
      title: 'Email Us',
      details: 'hello@robindigital.com'
    },
    {
      icon: <Phone size={22} />,
      title: 'Call Us',
      details: '+44 (0) 123 456 7890'
    },
    {
      icon: <MapPin size={22} />,
      title: 'Visit Us',
      details: 'The Lace Market, Nottingham City Centre, UK'
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-white to-robin-cream shadow-lg rounded-xl border-t-4 border-robin-orange overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-8 h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-robin-dark mb-4">Contact Information</h3>
          <p className="text-lg text-robin-dark/70 leading-relaxed">
            Reach out to our team using any of the following contact methods or fill out the form to send us a direct message.
          </p>
        </div>
        
        <div className="space-y-6 mt-2">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
              <div className="w-12 h-12 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-robin-dark">{item.title}</h3>
                <p className="text-robin-dark/70 group-hover:text-robin-orange transition-colors">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ContactInfoCard;
