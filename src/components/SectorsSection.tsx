
import React from 'react';
import { Heart, Building, GraduationCap, Briefcase } from 'lucide-react';

type SectorProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
};

const SectorCard = ({ title, description, icon, benefits }: SectorProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-robin-dark/5">
      <div className="bg-robin-orange/10 p-6">
        <div className="w-12 h-12 bg-robin-orange rounded-full flex items-center justify-center mb-4 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-robin-dark">{title}</h3>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-robin-dark/70 mb-4">{description}</p>
        <h4 className="font-medium text-robin-dark mb-2">How we help:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-robin-orange mr-2 mt-1">•</span>
              <span className="text-robin-dark/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SectorsSection = () => {
  const sectors = [
    {
      title: "Charities",
      icon: <Heart size={24} />,
      description: "We understand the unique challenges charities face in the digital space, from donor engagement to impact reporting.",
      benefits: [
        "Donor-focused websites that drive engagement and conversions",
        "Digital fundraising tools that maximize donations",
        "Impact visualization dashboards to showcase your work",
        "Cost-effective solutions that respect budget constraints"
      ]
    },
    {
      title: "Public Sector",
      icon: <Building size={24} />,
      description: "We help public sector organizations deliver accessible digital services that meet the needs of all citizens.",
      benefits: [
        "Accessible, compliant digital platforms",
        "Streamlined digital service delivery systems",
        "Public engagement tools and portals",
        "Data-driven insights for policy development"
      ]
    },
    {
      title: "Education",
      icon: <GraduationCap size={24} />,
      description: "We support educational institutions with digital tools that enhance learning experiences and streamline administration.",
      benefits: [
        "Learning management systems and educational platforms",
        "Student engagement and communication tools",
        "Administrative workflow automation",
        "Data analytics for educational outcomes"
      ]
    },
    {
      title: "Businesses",
      icon: <Briefcase size={24} />,
      description: "We partner with businesses to develop digital solutions that drive growth, efficiency, and competitive advantage.",
      benefits: [
        "Customer-focused websites and e-commerce platforms",
        "Business process automation tools",
        "Data analytics and business intelligence systems",
        "Custom software for unique business challenges"
      ]
    }
  ];

  return (
    <section id="sectors" className="section-padding bg-gradient-to-b from-white to-robin-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Sectors We Serve</h2>
          <p className="text-lg text-robin-dark/70">
            We specialize in serving organizations with a purpose, delivering tailored digital solutions to meet your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector) => (
            <SectorCard 
              key={sector.title}
              title={sector.title}
              description={sector.description}
              icon={sector.icon}
              benefits={sector.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
