
import React from 'react';
import { Heart, Building, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type SectorProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SectorCard = ({ title, description, icon }: SectorProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-dark/5 hover:border-robin-orange/20">
      <CardHeader className="bg-robin-orange/10 p-6 flex flex-row items-center gap-4">
        <div className="w-12 h-12 bg-robin-orange rounded-full flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-robin-dark">{title}</h3>
      </CardHeader>
      
      <CardContent className="p-6">
        <p className="text-robin-dark/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const SectorsSection = () => {
  const sectors = [
    {
      title: "Businesses",
      icon: <Briefcase size={24} />,
      description: "We partner with businesses to develop digital solutions that drive growth, improve efficiency, and create competitive advantage.",
    },
    {
      title: "Public Sector",
      icon: <Building size={24} />,
      description: "We help public sector organisations deliver accessible, compliant digital services that meet the diverse needs of all citizens.",
    },
    {
      title: "Charities",
      icon: <Heart size={24} />,
      description: "We create donor-focused digital solutions that help charities maximise their impact, engage supporters, and streamline operations.",
    },
    {
      title: "Education",
      icon: <GraduationCap size={24} />,
      description: "We support educational institutions with digital tools that enhance learning experiences and simplify administrative processes.",
    }
  ];

  return (
    <section id="sectors" className="section-padding py-20 bg-gradient-to-b from-white to-robin-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Sectors We Serve</h2>
          <p className="text-lg text-robin-dark/70">
            We specialise in serving organisations with purpose, delivering tailored digital solutions to meet unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector) => (
            <SectorCard 
              key={sector.title}
              title={sector.title}
              description={sector.description}
              icon={sector.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
