
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
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
      message: '',
      newsletter: false
    });
    
    setIsSubmitting(false);
  };

  return (
    <Card className="bg-gradient-to-br from-white to-robin-cream/70 shadow-lg rounded-xl border-t-4 border-robin-orange overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="p-8 relative">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-robin-orange/5 to-transparent pointer-events-none"></div>
        
        {/* Shine animation effect */}
        <div className="absolute -left-10 top-0 h-full w-20 bg-white/20 transform rotate-15 animate-shine pointer-events-none"></div>
        
        <h3 className="text-2xl font-bold text-robin-dark mb-6 relative">Send us a message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          <div className="space-y-4">
            <div className="group">
              <Label htmlFor="name" className="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
              />
            </div>
            
            <div className="group">
              <Label htmlFor="email" className="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
              />
            </div>
            
            <div className="group">
              <Label htmlFor="organization" className="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                Organization
              </Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization name"
                required
                className="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
              />
            </div>
            
            <div className="group">
              <Label htmlFor="message" className="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry"
                required
                className="w-full min-h-[120px] border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow"
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox 
                id="newsletter" 
                checked={formData.newsletter}
                onCheckedChange={handleCheckboxChange}
                className="data-[state=checked]:bg-robin-orange data-[state=checked]:border-robin-orange"
              />
              <Label 
                htmlFor="newsletter" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Keep me updated with industry news and insights
              </Label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-robin-orange hover:bg-robin-dark text-white font-medium transition-colors flex items-center justify-center gap-2 py-6 h-auto text-md rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={18} className={isSubmitting ? "" : "animate-pulse"} />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
