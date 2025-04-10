
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100; // Adjust offset to position sections correctly
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-robin-cream">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-robin-orange blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-robin-orange blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-robin-dark leading-tight">
              Digital Solutions That <span className="text-robin-orange relative inline-block transform hover:scale-105 transition-transform duration-300">
                Transform
                <span className="absolute inset-0 bg-white/20 animate-shine -skew-x-12"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-robin-dark/80 leading-relaxed">
              Empowering charities, public sector, education, and businesses with innovative digital solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={cn(
                  "bg-robin-orange text-white px-8 py-3 rounded-md font-medium",
                  "hover:bg-robin-dark transition-colors text-center hover-scale",
                  "inline-flex items-center justify-center"
                )}
              >
                Start Your Project
              </a>
              <a 
                href="#solutions" 
                onClick={(e) => scrollToSection(e, 'solutions')}
                className={cn(
                  "border-2 border-robin-dark/10 bg-white/50 backdrop-blur-sm",
                  "text-robin-dark px-8 py-3 rounded-md font-medium",
                  "hover:bg-robin-dark hover:text-white transition-colors text-center",
                  "inline-flex items-center justify-center hover-scale"
                )}
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#solutions" onClick={(e) => scrollToSection(e, 'solutions')} className="text-robin-dark/60 hover:text-robin-orange transition-colors">
          <ArrowDownCircle size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
