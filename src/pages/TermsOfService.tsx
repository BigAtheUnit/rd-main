
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Robin Digital";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <article className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-robin-orange/10 max-w-4xl mx-auto">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Terms of Service</h1>
              <p className="text-robin-dark/70">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>

            <div className="mt-8 prose prose-lg mx-auto text-robin-dark/80">
              <h2>1. Introduction</h2>
              <p>These Terms of Service ("Terms") govern your access to and use of Robin Digital's website, services, and products. Please read these Terms carefully before using our services.</p>
              <p>By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, you do not have permission to access the services.</p>
              
              <h2>2. Services</h2>
              <p>Robin Digital provides digital solutions including but not limited to website development, UX/UI design, digital strategy consulting, and various software products as described on our website.</p>
              
              <h2>3. User Accounts</h2>
              <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.</p>
              <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>
              <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
              
              <h2>4. Intellectual Property</h2>
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of Robin Digital and its licensors. The service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.</p>
              <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Robin Digital.</p>
              
              <h2>5. User Content</h2>
              <p>Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post, including its legality, reliability, and appropriateness.</p>
              <p>By posting content, you grant us the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material according to your account settings.</p>
              
              <h2>6. Termination</h2>
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <p>Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.</p>
              
              <h2>7. Limitation of Liability</h2>
              <p>In no event shall Robin Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
              <ul>
                <li>Your access to or use of or inability to access or use the service;</li>
                <li>Any conduct or content of any third party on the service;</li>
                <li>Any content obtained from the service; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
              
              <h2>8. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
              
              <h2>9. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
              <p>By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.</p>
              
              <h2>10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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
