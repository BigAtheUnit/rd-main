
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "Robin Digital | Powerful Digital Solutions for Modern Organisations";
  }, []);

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex justify-center">
            <Button asChild className="bg-robin-orange hover:bg-robin-orange/90 text-white">
              <Link to="/blog" className="flex items-center gap-2">
                <BookOpen size={18} />
                Read Our Latest Insights & Case Studies
              </Link>
            </Button>
          </div>
        </div>
        <div className="py-6"></div> {/* Spacing between sections */}
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
