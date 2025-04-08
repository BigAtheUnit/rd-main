
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
        <ServicesSection />
        <SectorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
