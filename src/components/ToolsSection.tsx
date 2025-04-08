
import React from 'react';
import { ArrowRight, Shield, Zap, Code, Users, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const ToolsSection = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Cybersecurity Plugins",
      description: "Robust security tools that protect your digital assets and user data from evolving threats."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Tools that enhance speed and performance, delivering lightning-fast experiences for users."
    },
    {
      icon: <Code size={24} />,
      title: "Integration Solutions",
      description: "Seamless integration tools that connect your systems and create unified digital ecosystems."
    },
    {
      icon: <Users size={24} />,
      title: "User Management",
      description: "Sophisticated user management tools that simplify access control and enhance the user experience."
    },
    {
      icon: <BarChart size={24} />,
      title: "Analytics Dashboards",
      description: "Visual data tools that transform complex information into actionable insights."
    }
  ];

  return (
    <section id="tools" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-robin-dark">Tools & SaaS Solutions</h2>
            <p className="text-lg text-robin-dark/70 leading-relaxed">
              We develop practical, user-friendly digital tools and SaaS solutions that solve real-world challenges. Our approach combines innovation with usability, creating tools that become essential to your operations.
            </p>
            
            <div className="space-y-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-robin-orange/10 rounded-lg flex items-center justify-center shrink-0 text-robin-orange">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-robin-dark mb-1">{feature.title}</h3>
                    <p className="text-robin-dark/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className={cn(
                "inline-flex items-center text-robin-orange font-medium mt-4",
                "hover:text-robin-dark transition-colors group"
              )}
            >
              Discuss your SaaS project with us
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl border border-robin-dark/5">
              <div className="aspect-square bg-gradient-to-br from-robin-orange/10 to-robin-orange/5 rounded-lg flex items-center justify-center mb-6">
                <img 
                  src="/lovable-uploads/4ab2613f-3380-4c13-8856-aa4562794813.png" 
                  alt="Robin Digital Tools" 
                  className="w-1/2 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-robin-dark mb-2">Custom Digital Tools</h3>
              <p className="text-robin-dark/70">
                Tailored digital solutions that address your specific needs, from workflow automation to specialized platforms.
              </p>
              <div className="mt-6 pt-6 border-t border-robin-dark/10">
                <div className="flex justify-between">
                  <div>
                    <span className="block text-sm text-robin-dark/60">Starting from</span>
                    <span className="text-2xl font-bold text-robin-dark">Contact us</span>
                  </div>
                  <a 
                    href="#contact" 
                    className={cn(
                      "bg-robin-orange text-white px-4 py-2 rounded-md font-medium",
                      "hover:bg-robin-dark transition-colors hover-scale inline-flex items-center"
                    )}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 left-4 w-full h-full bg-robin-orange/20 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
