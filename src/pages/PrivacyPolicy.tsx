
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Robin Digital";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <article className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-robin-orange/10 max-w-4xl mx-auto">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Privacy Policy</h1>
              <p className="text-robin-dark/70">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>

            <div className="mt-8 prose prose-lg mx-auto text-robin-dark/80">
              <h2>Introduction</h2>
              <p>At Robin Digital, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
              
              <h2>Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, participate in activities on the Website, or otherwise contact us.</p>
              
              <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              <ul>
                <li>Names</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
                <li>Mailing addresses</li>
                <li>Job titles</li>
                <li>Organization names</li>
                <li>Contact preferences</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
              
              <p>We use the information we collect or receive:</p>
              <ul>
                <li><strong>To facilitate account creation and login process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and login process for the performance of the contract.</li>
                <li><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our services.</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              
              <h3>By Law or to Protect Rights</h3>
              <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
              
              <h3>Third-Party Service Providers</h3>
              <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
              
              <h2>Security of Your Information</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
              
              <h2>Contact Information</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
