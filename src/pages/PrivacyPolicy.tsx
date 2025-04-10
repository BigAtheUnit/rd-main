
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Robin Digital";
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Privacy Policy</h1>
              <p className="text-robin-dark/70">Effective Date: {currentDate}</p>
            </header>

            <div className="mt-8 prose prose-lg mx-auto text-robin-dark/80">
              <p>
                Robin Digital ("we", "us", or "our") is committed to protecting your privacy and safeguarding your personal data. 
                This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website 
                (https://www.robindigital.io) or engage with our services.
              </p>
              
              <p>
                By accessing or using our site, you consent to the terms outlined in this policy. If you do not agree with any part 
                of this Privacy Policy, please refrain from using our website or services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Job title and organisation</li>
                <li>Mailing address</li>
                <li>Contact preferences</li>
                <li>Other details you choose to share</li>
              </ul>
              <p>We may also collect technical data such as your IP address, browser type, referring pages, and device information.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
              <p>We may use your information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Deliver and maintain our services</li>
                <li>Communicate updates, changes, or promotional offers</li>
                <li>Respond to support queries</li>
                <li>Analyse site performance and improve functionality</li>
                <li>Comply with legal requirements</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">3. Sharing Your Information</h2>
              <p>Your information may be shared with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Trusted third-party service providers (e.g. hosting, analytics, email platforms)</li>
                <li>Legal authorities, if required by law</li>
                <li>As necessary to protect our rights and users</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">4. Security</h2>
              <p>We use reasonable administrative, technical, and physical measures to protect your data. However, no system is 100% secure.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">5. Data Retention</h2>
              <p>We retain your information only as long as needed to fulfil the purposes outlined here, or to meet legal requirements.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">6. Your Rights</h2>
              <p>You may request access, correction, deletion, or restriction of your personal data. Contact us at the email below to make a request.</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">7. Contact Us</h2>
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

export default PrivacyPolicy;
