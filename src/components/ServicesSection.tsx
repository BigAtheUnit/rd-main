
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServices, Service } from '@/services/wordpress-api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, Globe, Heart, Lightbulb, LineChart, LayoutDashboard, Settings, Briefcase, Shield } from 'lucide-react';

const ServicesSection = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });

  // Default services to use if API call fails or returns less than 9 services
  const defaultServices = [
    {
      id: 1,
      title: 'WordPress Development',
      excerpt: 'Expert WordPress website development with custom themes, plugins and integrations tailored to your specific business needs.',
      icon: 'globe'
    },
    {
      id: 2,
      title: 'Custom Web Development',
      excerpt: 'Fully bespoke websites built with modern frameworks like React, Vue, and Next.js that deliver unique user experiences and functionality.',
      icon: 'code'
    },
    {
      id: 3,
      title: 'Bespoke Digital Tools',
      excerpt: 'Custom tools tailored to your unique requirements, automating processes and improving efficiency.',
      icon: 'wrench'
    },
    {
      id: 4,
      title: 'UX and UI Design',
      excerpt: 'User-centred design that creates intuitive, engaging experiences that keep users coming back.',
      icon: 'layout'
    },
    {
      id: 5,
      title: 'AI Consulting & Implementation',
      excerpt: 'Leverage the power of AI to solve complex problems and enhance your digital capabilities.',
      icon: 'bot'
    },
    {
      id: 6,
      title: 'Donor-Centric Charity Websites',
      excerpt: 'Specialised websites for charities that connect with donors and maximise fundraising potential.',
      icon: 'heart'
    },
    {
      id: 7,
      title: 'Digital Strategy',
      excerpt: 'Strategic planning and roadmapping to align your digital initiatives with organisational goals.',
      icon: 'lightbulb'
    },
    {
      id: 8,
      title: 'Data Analytics & Insights',
      excerpt: 'Unlock the value in your data with advanced analytics and actionable insights.',
      icon: 'line-chart'
    },
    {
      id: 9,
      title: 'Cyber Security',
      excerpt: 'Protect your digital assets and data with comprehensive security solutions and best practices.',
      icon: 'shield'
    }
  ];

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
      default:
        return <Settings className="h-12 w-12 text-robin-orange mb-4" />;
    }
  };

  // Determine which services to display:
  // 1. If API returns services, use those
  // 2. If API returns fewer than 9 services, combine with defaults to reach 9
  // 3. If API fails, use all default services
  const displayServices = React.useMemo(() => {
    if (services && services.length > 0) {
      if (services.length >= 9) {
        // If we have 9 or more services from API, take the first 9
        return services.slice(0, 9);
      } else {
        // If we have less than 9 services from API, combine with defaults
        const remainingCount = 9 - services.length;
        return [...services, ...defaultServices.slice(0, remainingCount)];
      }
    }
    // If no services from API, use all default services
    return defaultServices;
  }, [services]);

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
            <p>Failed to load services. Showing default services instead.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service: Service) => (
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
      </div>
    </section>
  );
};

export default ServicesSection;
