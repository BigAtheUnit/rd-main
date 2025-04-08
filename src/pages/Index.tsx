
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Robin Digital | Digital Solutions That Transform";
  }, []);

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="py-10"></div> {/* Increased spacing between sections */}
        <ServicesSection />
        <div className="py-10"></div> {/* Increased spacing between sections */}
        <SectorsSection />
        <div className="py-10"></div> {/* Increased spacing between sections */}
        <TestimonialsSection />
        <div className="py-10"></div> {/* Increased spacing between sections */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
