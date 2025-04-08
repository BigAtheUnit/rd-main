
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-robin-dark">Get in Touch</h2>
            <p className="text-lg text-robin-dark/70 leading-relaxed">
              Ready to discuss your next digital project? Fill out the form and our team will get back to you promptly to explore how we can help transform your digital presence.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-robin-dark">Email Us</h3>
                  <p className="text-robin-dark/70">hello@robindigital.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-robin-dark">Call Us</h3>
                  <p className="text-robin-dark/70">+44 (0) 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-robin-dark">Visit Us</h3>
                  <p className="text-robin-dark/70">123 Tech Hub, Innovation Street, London, UK</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-robin-dark/5">
            <h3 className="text-xl font-semibold text-robin-dark mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-robin-dark/80 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-robin-dark/80 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-robin-dark/80 mb-1">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization name"
                    required
                    className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-robin-dark/80 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry"
                    required
                    className="w-full min-h-[120px] border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-robin-orange hover:bg-robin-dark text-white font-medium transition-colors flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
