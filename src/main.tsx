
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster as SonnerToaster } from './components/ui/sonner.tsx'
import './lib/performance.ts'

// Import our utility to remove any lovable references
import './components/contact/utils/lovableRemover.ts'

// Apply CSP meta tag for browsers that support it (as a fallback to server headers)
const applyCSPMetaTag = () => {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: www.google-analytics.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.robindigital.io https://www.google-analytics.com; frame-src 'self' https://www.youtube.com https://player.vimeo.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests; block-all-mixed-content;";
  document.head.appendChild(meta);
};

// Only apply CSP meta tag if not already set by server
if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
  applyCSPMetaTag();
}

// Force HTTPS (except in development)
if (window.location.protocol !== 'https:' && 
    window.location.hostname !== 'localhost' && 
    !window.location.hostname.includes('127.0.0.1')) {
  window.location.href = window.location.href.replace('http:', 'https:');
}

// Handle SPA routing for redirected 404s
const handleSPARedirects = () => {
  const redirectPath = sessionStorage.getItem('redirect_path');
  if (redirectPath) {
    sessionStorage.removeItem('redirect_path');
    // Wait for router to be ready
    setTimeout(() => {
      if (window.location.pathname === '/') {
        window.history.replaceState(null, '', redirectPath);
      }
    }, 100);
  }
};

// Call the function after DOM is loaded
document.addEventListener('DOMContentLoaded', handleSPARedirects);

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
        <SonnerToaster position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
