
import React from 'react';
import { 
  Globe, 
  Wrench, 
  Layout, 
  Code, 
  Heart, 
  Database, 
  LineChart, 
  Lightbulb, 
  Bot 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300",
        "border border-robin-dark/5 hover:border-robin-orange/20",
        "hover:translate-y-[-5px] group"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-robin-orange/10 rounded-lg flex items-center justify-center mb-4 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-robin-dark">{title}</h3>
      <p className="text-robin-dark/70">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Beautiful, responsive websites built with modern technologies that drive conversions and delight users.",
      icon: <Globe size={24} />,
    },
    {
      title: "Bespoke Digital Tools",
      description: "Custom tools tailored to your unique requirements, automating processes and improving efficiency.",
      icon: <Wrench size={24} />,
    },
    {
      title: "UX and UI Design",
      description: "User-centered design that creates intuitive, engaging experiences that keep users coming back.",
      icon: <Layout size={24} />,
    },
    {
      title: "AI Consulting & Implementation",
      description: "Leverage the power of AI to solve complex problems and enhance your digital capabilities.",
      icon: <Bot size={24} />,
    },
    {
      title: "Donor-Centric Charity Websites",
      description: "Specialized websites for charities that connect with donors and maximize fundraising potential.",
      icon: <Heart size={24} />,
    },
    {
      title: "CMS Solutions",
      description: "Powerful, flexible content management systems that give you control over your digital presence.",
      icon: <Database size={24} />,
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning and roadmapping to align your digital initiatives with organizational goals.",
      icon: <Lightbulb size={24} />,
    },
    {
      title: "Data Analytics & Insights",
      description: "Unlock the value in your data with advanced analytics and actionable insights.",
      icon: <LineChart size={24} />,
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions that solve your unique business challenges and drive innovation.",
      icon: <Code size={24} />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-robin-cream to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Our Services</h2>
          <p className="text-lg text-robin-dark/70">
            We deliver end-to-end digital solutions that solve real problems and create measurable impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
