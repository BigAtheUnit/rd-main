
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServices, Service } from '@/services/wordpress-api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, Globe, Heart, Lightbulb, LineChart, LayoutDashboard, Settings, Briefcase, Shield, Book } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ServicesSection = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });

  // Default services to use if API call fails or returns less than 10 services
  const defaultServices = [
    {
      id: 1,
      title: 'WordPress Development',
      excerpt: 'Expert WordPress website development with custom themes, plugins and integrations tailored to your specific business needs.',
      icon: 'globe',
      description: 'Our WordPress development services deliver bespoke, high-performance websites that are secure, scalable and easy to manage. We build custom themes and plugins that perfectly match your brand and business requirements, with a focus on optimised user experiences and conversion-focused designs.'
    },
    {
      id: 2,
      title: 'Custom Web Development',
      excerpt: 'Fully bespoke websites built with modern frameworks like React, Vue, and Next.js that deliver unique user experiences and functionality.',
      icon: 'code',
      description: 'When off-the-shelf solutions won\'t do, our custom web development services provide tailored digital experiences built on the latest frameworks and technologies. We craft high-performance, responsive websites that are optimised for speed, security and scalability, ensuring your digital presence stands out from the competition.'
    },
    {
      id: 3,
      title: 'Bespoke Digital Tools',
      excerpt: 'Custom tools tailored to your unique requirements, automating processes and improving efficiency.',
      icon: 'wrench',
      description: 'We create bespoke digital tools that automate complex processes, streamline operations and solve specific business challenges. From custom dashboards and reporting tools to process automation systems, we design and build solutions that save time, reduce costs and drive efficiency throughout your organisation.'
    },
    {
      id: 4,
      title: 'UX and UI Design',
      excerpt: 'User-centred design that creates intuitive, engaging experiences that keep users coming back.',
      icon: 'layout',
      description: 'Our design approach puts users at the heart of everything we create. We conduct thorough research to understand your users\' needs, behaviours and preferences, before designing intuitive interfaces that delight users and drive engagement. Our designs are beautiful, functional and optimised for conversion.'
    },
    {
      id: 5,
      title: 'AI Consulting & Implementation',
      excerpt: 'Leverage the power of AI to solve complex problems and enhance your digital capabilities.',
      icon: 'bot',
      description: 'Harness the transformative potential of artificial intelligence for your organisation. Our AI consulting services help you identify opportunities for AI implementation, from chatbots and natural language processing to machine learning models that deliver actionable insights from your data, creating smarter, more efficient systems.'
    },
    {
      id: 6,
      title: 'Donor-Centric Charity Websites',
      excerpt: 'Specialised websites for charities that connect with donors and maximise fundraising potential.',
      icon: 'heart',
      description: 'We understand the unique needs of charities and non-profit organisations. Our dedicated charity website services create compelling digital experiences that connect with donors, tell your story effectively and maximise donations. We integrate seamless donation systems, impact reporting and supporter engagement tools.'
    },
    {
      id: 7,
      title: 'Digital Strategy',
      excerpt: 'Strategic planning and roadmapping to align your digital initiatives with organisational goals.',
      icon: 'lightbulb',
      description: 'Develop a clear roadmap for your digital future. Our strategic consultancy services help you identify opportunities, prioritise initiatives and create a comprehensive plan for digital transformation. We work closely with your team to ensure your digital strategy aligns perfectly with your business objectives and delivers measurable results.'
    },
    {
      id: 8,
      title: 'Data Analytics & Insights',
      excerpt: 'Unlock the value in your data with advanced analytics and actionable insights.',
      icon: 'line-chart',
      description: 'Transform raw data into actionable intelligence. Our data analytics services help you collect, analyse and visualise your data to uncover insights that drive better decision-making. From custom dashboards and reporting systems to predictive analytics models, we help you harness the full potential of your data assets.'
    },
    {
      id: 9,
      title: 'Cyber Security',
      excerpt: 'Protect your digital assets and data with comprehensive security solutions and best practices.',
      icon: 'shield',
      description: 'In today\'s threat landscape, robust security is essential. We provide comprehensive cyber security services including vulnerability assessments, security audits, secure coding practices and ongoing monitoring. Our approach ensures your digital assets, customer data and reputation are protected against evolving threats.'
    },
    {
      id: 10,
      title: 'Digital Learning Platforms',
      excerpt: 'Create engaging, interactive learning experiences with customised educational platforms and tools.',
      icon: 'book',
      description: 'Our specialised digital learning solutions help educational institutions, training providers and corporate learning departments deliver engaging, interactive learning experiences. We develop custom learning management systems, interactive course content and assessment tools that improve learning outcomes and engagement.'
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
      case 'book':
        return <Book className="h-12 w-12 text-robin-orange mb-4" />;
      default:
        return <Settings className="h-12 w-12 text-robin-orange mb-4" />;
    }
  };

  // Determine which services to display:
  const displayServices = React.useMemo(() => {
    if (services && services.length > 0) {
      if (services.length >= 10) {
        // If we have 10 or more services from API, take the first 10
        return services.slice(0, 10);
      } else {
        // If we have less than 10 services from API, combine with defaults
        const remainingCount = 10 - services.length;
        return [...services, ...defaultServices.slice(0, remainingCount)];
      }
    }
    // If no services from API, use all default services
    return defaultServices;
  }, [services]);

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-robin-cream/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-robin-dark mb-4 leading-tight">
            Our Digital <span className="text-robin-orange">Solutions</span>
          </h2>
          <p className="text-xl text-robin-dark/70 max-w-3xl mx-auto">
            We provide a wide range of digital solutions to help organisations achieve their goals.
          </p>
          <div className="w-24 h-1 bg-robin-orange mx-auto mt-8 rounded-full"></div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-t-2 border-robin-orange"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 mb-8">
            <p>Failed to load services. Showing default services instead.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-3 gap-8 mt-12">
          {displayServices.map((service: Service, index: number) => (
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
                <Dialog open={openDialog === service.id} onOpenChange={(open) => setOpenDialog(open ? service.id : null)}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="group border-robin-orange/30 hover:border-robin-orange hover:bg-robin-orange hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px] bg-white border-none shadow-lg">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-robin-dark flex items-center gap-3">
                        <span className="text-robin-orange">{getIcon(service.icon)}</span>
                        {service.title}
                      </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="text-robin-dark/80 mt-4 text-base leading-relaxed">
                      {service.description || `Our ${service.title} services are designed to help your organisation thrive in the digital landscape. We combine technical expertise with strategic thinking to deliver solutions that create real impact.`}
                    </DialogDescription>
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-robin-orange hover:bg-robin-orange/90 text-white"
                        onClick={() => setOpenDialog(null)}
                      >
                        Get in Touch
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
