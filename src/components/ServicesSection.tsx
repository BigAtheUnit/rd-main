
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServices, Service } from '@/services/wordpress-api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, Globe, Heart, Lightbulb, LineChart, LayoutDashboard, Settings } from 'lucide-react';

const ServicesSection = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });

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
      default:
        return <Settings className="h-12 w-12 text-robin-orange mb-4" />;
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-robin-dark mb-4">Our Digital Solutions</h2>
          <p className="text-xl text-robin-dark/70 max-w-3xl mx-auto">
            We provide a wide range of digital solutions to help organizations achieve their goals.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-robin-orange"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500">
            <p>Failed to load services. Please try again later.</p>
          </div>
        )}

        {services && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <Card key={service.id} className="border-2 border-robin-dark/5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-14 h-14 bg-robin-orange/20 rounded-lg flex items-center justify-center text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-robin-dark/80 text-center" dangerouslySetInnerHTML={{ __html: service.excerpt }} />
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {services && services.length === 0 && (
          <div className="text-center text-robin-dark/70 py-8">
            <p>No services found. Please add services in the WordPress admin.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
