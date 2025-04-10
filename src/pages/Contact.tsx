
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  useEffect(() => {
    document.title = "Robin Digital | Contact Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-robin-dark mb-8 text-center">
            Contact <span className="text-robin-orange">Us</span>
          </h1>
          <p className="text-xl text-robin-dark/70 max-w-3xl mx-auto text-center mb-16">
            Have a question or ready to start your next digital project? Reach out to us and let's create something amazing together.
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
