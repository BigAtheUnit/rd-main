
import React from 'react';
import { Bot, Code, Globe, Heart, Lightbulb, LineChart, LayoutDashboard, Settings, Briefcase, Shield, Book } from 'lucide-react';

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ iconName, className = "h-12 w-12 text-robin-orange mb-4" }) => {
  switch (iconName) {
    case 'globe':
      return <Globe className={className} />;
    case 'code':
      return <Code className={className} />;
    case 'wrench':
      return <Settings className={className} />;
    case 'layout':
      return <LayoutDashboard className={className} />;
    case 'bot':
      return <Bot className={className} />;
    case 'heart':
      return <Heart className={className} />;
    case 'lightbulb':
      return <Lightbulb className={className} />;
    case 'line-chart':
      return <LineChart className={className} />;
    case 'shield':
      return <Shield className={className} />;
    case 'briefcase':
      return <Briefcase className={className} />;
    case 'book':
      return <Book className={className} />;
    default:
      return <Settings className={className} />;
  }
};

export default ServiceIcon;
