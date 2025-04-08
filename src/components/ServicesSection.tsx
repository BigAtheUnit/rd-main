
import React from 'react';
import { 
  Globe, 
  Wrench, 
  Layout, 
  Code, 
  Heart, 
  Lightbulb, 
  LineChart, 
  Bot,
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
        "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
        "border-2 border-robin-orange/10 hover:border-robin-orange/30",
        "hover:translate-y-[-5px] group"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-robin-orange/20 rounded-lg flex items-center justify-center mb-4 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors">
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
      title: "WordPress Development",
      description: "Expert WordPress website development with custom themes, plugins and integrations tailored to your specific business needs.",
      icon: <Globe size={28} />,
    },
    {
      title: "Custom Web Development",
      description: "Fully bespoke websites built with modern frameworks like React, Vue, and Next.js that deliver unique user experiences and functionality.",
      icon: <Code size={28} />,
    },
    {
      title: "Bespoke Digital Tools",
      description: "Custom tools tailored to your unique requirements, automating processes and improving efficiency.",
      icon: <Wrench size={28} />,
    },
    {
      title: "UX and UI Design",
      description: "User-centred design that creates intuitive, engaging experiences that keep users coming back.",
      icon: <Layout size={28} />,
    },
    {
      title: "AI Consulting & Implementation",
      description: "Leverage the power of AI to solve complex problems and enhance your digital capabilities.",
      icon: <Bot size={28} />,
    },
    {
      title: "Donor-Centric Charity Websites",
      description: "Specialised websites for charities that connect with donors and maximise fundraising potential.",
      icon: <Heart size={28} />,
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning and roadmapping to align your digital initiatives with organisational goals.",
      icon: <Lightbulb size={28} />,
    },
    {
      title: "Data Analytics & Insights",
      description: "Unlock the value in your data with advanced analytics and actionable insights.",
      icon: <LineChart size={28} />,
    },
  ];

  return (
    <section id="solutions" className="section-padding py-20 bg-gradient-to-b from-robin-cream to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Our Solutions</h2>
          <p className="text-lg text-robin-dark/70">
            We deliver end-to-end digital solutions across multiple platforms that solve real problems and create measurable impact.
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
