
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServices, Service } from '@/services/wordpress-api';
import { Dialog } from "@/components/ui/dialog";
import ServiceCard from '@/components/services/ServiceCard';
import ServiceDialog from '@/components/services/ServiceDialog';
import ServiceIcon from '@/components/services/ServiceIcon';
import { defaultServices } from '@/components/services/defaultServicesData';

const ServicesSection = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });

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

  // Get the icon component for a service
  const getIconComponent = (iconName: string) => {
    return <ServiceIcon iconName={iconName} />;
  };

  // Get the currently selected service
  const currentService = displayServices.find(service => service.id === openDialog);

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
            <Dialog 
              key={`service-${service.id}-${index}`}  // Fixed key uniqueness issue
              open={openDialog === service.id} 
              onOpenChange={(open) => setOpenDialog(open ? service.id : null)}
            >
              <ServiceCard 
                service={service} 
                index={index} 
                onOpenDialog={(id) => setOpenDialog(id)} 
              />
              {openDialog === service.id && currentService && (
                <ServiceDialog 
                  service={currentService} 
                  getIcon={getIconComponent}
                  onClose={() => setOpenDialog(null)} 
                />
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
