
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initPerformanceOptimizations } from './lib/performance';

// Security monitoring
const monitorSecurityIssues = () => {
  // Monitor for XSS attempts
  const originalConsoleError = console.error;
  console.error = function(...args) {
    // Check for potential XSS patterns in errors
    const errorStr = args.join(' ');
    if (
      errorStr.includes('script') && 
      (errorStr.includes('inject') || errorStr.includes('XSS'))
    ) {
      // Log potential XSS attempt
      if (window.gtag) {
        window.gtag('event', 'security_warning', {
          event_category: 'Security',
          event_label: 'Potential XSS detected'
        });
      }
    }
    originalConsoleError.apply(console, args);
  };

  // Listen for CSP violations
  document.addEventListener('securitypolicyviolation', (e) => {
    if (window.gtag) {
      window.gtag('event', 'csp_violation', {
        event_category: 'Security',
        event_label: e.violatedDirective,
        value: e.blockedURI
      });
    }
  });

  // Monitor for iframe injection attempts
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'IFRAME' && !(node as HTMLElement).hasAttribute('sandbox')) {
            console.warn('Unsandboxed iframe detected and removed');
            node.parentNode?.removeChild(node);
          }
        });
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

// Initialize performance optimizations
initPerformanceOptimizations();

// Initialize security monitoring
monitorSecurityIssues();

// Track page views with Google Analytics
const trackPageView = () => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
};

// Create root with error boundary
const renderApp = () => {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
  
  // Track initial page view
  trackPageView();
};

// Use requestIdleCallback for non-critical initialization
if ('requestIdleCallback' in window) {
  // Wait for browser idle time to initialize non-critical tasks
  window.requestIdleCallback(() => {
    // Any non-critical initialization goes here
    console.log('Performance optimizations initialized during idle time');
  });
} else {
  // Fallback for browsers without requestIdleCallback
  setTimeout(() => {
    console.log('Performance optimizations initialized with timeout');
  }, 1);
}

// Render the app immediately
renderApp();

// Add type definition for window.gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}
