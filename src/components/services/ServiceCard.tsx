
import React from 'react';
import { Service } from '@/services/wordpress-api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, Globe, Heart, Lightbulb, LineChart, LayoutDashboard, Settings, Briefcase, Shield, Book } from 'lucide-react';
import {
  DialogTrigger,
} from "@/components/ui/dialog";

interface ServiceCardProps {
  service: Service;
  index: number;
  onOpenDialog: (id: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onOpenDialog }) => {
  // Function to get the right icon based on icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="h-12 w-12 text-robin-orange mb-4" />;
      case 'code':
        return <Code className="h-12 w-12 text-robin-orange mb-4" />;
      case 'wrench':
        return <Settings className="h-12 w-12 text-robin-orange mb-4" />;
      case 'layout':
        return <LayoutDashboard className="h-12 w-12 text-robin-orange mb-4" />;
      case 'bot':
        return <Bot className="h-12 w-12 text-robin-orange mb-4" />;
      case 'heart':
        return <Heart className="h-12 w-12 text-robin-orange mb-4" />;
      case 'lightbulb':
        return <Lightbulb className="h-12 w-12 text-robin-orange mb-4" />;
      case 'line-chart':
        return <LineChart className="h-12 w-12 text-robin-orange mb-4" />;
      case 'shield':
        return <Shield className="h-12 w-12 text-robin-orange mb-4" />;
      case 'briefcase':
        return <Briefcase className="h-12 w-12 text-robin-orange mb-4" />;
      case 'book':
        return <Book className="h-12 w-12 text-robin-orange mb-4" />;
      default:
        return <Settings className="h-12 w-12 text-robin-orange mb-4" />;
    }
  };

  return (
    <Card 
      key={service.id} 
      className="border-none bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-0">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-robin-orange/10 flex items-center justify-center group-hover:bg-robin-orange/20 transition-colors duration-300">
            {getIcon(service.icon)}
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-center text-robin-dark group-hover:text-robin-orange transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8 pt-4">
        <CardDescription className="text-robin-dark/80 text-center text-base" dangerouslySetInnerHTML={{ __html: service.excerpt }} />
      </CardContent>
      <CardFooter className="flex justify-center p-6 pt-4">
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="group border-robin-orange/30 hover:border-robin-orange hover:bg-robin-orange hover:text-white transition-all duration-300"
            onClick={() => onOpenDialog(service.id)}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Button>
        </DialogTrigger>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
