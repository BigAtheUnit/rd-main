
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Robin Digital";
    window.scrollTo(0, 0);
  }, []);

  // Get current date in format: April 10, 2025
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <article className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-robin-orange/10 max-w-4xl mx-auto">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Terms of Service</h1>
              <p className="text-robin-dark/70">Effective Date: {currentDate}</p>
            </header>

            <div className="mt-8 prose prose-lg mx-auto text-robin-dark/80">
              <p>
                These Terms of Service ("Terms") govern your access to and use of Robin Digital's website, products, and services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">1. Our Services</h2>
              <p>Robin Digital provides digital solutions including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Website development</li>
                <li>UX/UI and accessibility design</li>
                <li>Digital strategy</li>
                <li>Automation and AI integration</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">2. User Accounts</h2>
              <p>You agree to provide accurate information when creating an account. You are responsible for keeping your password secure and for any activity under your account.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">3. Intellectual Property</h2>
              <p>All content, branding, and technology is owned by Robin Digital or our licensors. You may not reproduce or use it without permission.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">4. User-Generated Content</h2>
              <p>If you submit content, you grant us a licence to use it for delivering and promoting our services. You remain responsible for what you post.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">5. Termination</h2>
              <p>We reserve the right to suspend or terminate access at any time for breach of these Terms.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
              <p>We are not liable for indirect or consequential losses resulting from:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use of or inability to use the service</li>
                <li>Unauthorised access to your data</li>
                <li>Third-party content or actions</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">7. Governing Law</h2>
              <p>These Terms are governed by the laws of the United Kingdom.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">8. Changes to Terms</h2>
              <p>We may update these Terms at any time. Continued use of our services constitutes your acceptance of any changes.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">9. Contact Us</h2>
              <p>Robin Digital<br/>
              123 Digital Hub, Lace Market<br/>
              Nottingham City Centre, UK<br/>
              Email: hello@robindigital.com</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
