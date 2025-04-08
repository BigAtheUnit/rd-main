
import React from 'react';
import { Heart, Building, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';

type SectorProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

const SectorCard = ({ title, description, icon, features }: SectorProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-dark/5 hover:border-robin-orange/20">
      <CardHeader className="bg-robin-orange/10 p-6 flex flex-row items-center gap-4">
        <div className="w-12 h-12 bg-robin-orange rounded-full flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-robin-dark">{title}</h3>
      </CardHeader>
      
      <CardContent className="p-6">
        <p className="text-robin-dark/70 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-robin-dark/80">
              <CheckCircle size={16} className="text-robin-orange shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="p-6 bg-gradient-to-r from-robin-orange/5 to-transparent">
        <p className="text-sm text-robin-dark/60 italic">
          We specialize in creating tailored solutions for {title.toLowerCase()} of all sizes
        </p>
      </CardFooter>
    </Card>
  );
};

const SectorsSection = () => {
  const sectors = [
    {
      title: "Businesses",
      icon: <Briefcase size={24} />,
      description: "We partner with businesses of all sizes to develop digital solutions that drive growth, improve operational efficiency, and create lasting competitive advantage in today's digital marketplace.",
      features: [
        "Custom e-commerce solutions",
        "Business process automation tools",
        "Client & employee portals",
        "Digital marketing infrastructure"
      ]
    },
    {
      title: "Public Sector",
      icon: <Building size={24} />,
      description: "We help government and public sector organisations deliver accessible, compliant digital services that meet the diverse needs of citizens while optimizing resource utilization and improving service delivery.",
      features: [
        "Citizen-focused service platforms",
        "Accessibility-compliant web applications",
        "Digital transformation consultancy",
        "Data collection & analysis tools"
      ]
    },
    {
      title: "Charities",
      icon: <Heart size={24} />,
      description: "We create donor-focused digital solutions that help non-profit organizations maximize their social impact, engage supporters more effectively, and streamline operational processes to reduce administrative overhead.",
      features: [
        "Donation platforms & payment integration",
        "Volunteer management systems",
        "Impact reporting dashboards",
        "Community engagement tools"
      ]
    },
    {
      title: "Education",
      icon: <GraduationCap size={24} />,
      description: "We support educational institutions with innovative digital tools that enhance teaching and learning experiences, simplify administrative processes, and create engaging environments for students of all ages.",
      features: [
        "Learning management systems",
        "Student progress tracking",
        "Interactive educational resources",
        "Virtual classroom technologies"
      ]
    }
  ];

  return (
    <section id="sectors" className="section-padding py-20 bg-gradient-to-b from-white to-robin-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Sectors We Serve</h2>
          <p className="text-lg text-robin-dark/70">
            We specialize in serving organizations with purpose, delivering tailored digital solutions that address the unique challenges and opportunities in each sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector) => (
            <SectorCard 
              key={sector.title}
              title={sector.title}
              description={sector.description}
              icon={sector.icon}
              features={sector.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;

