
/**
 * Performance optimization utilities
 */

// Image optimization
export const getOptimizedImageUrl = (url: string, width: number = 800, quality: number = 80): string => {
  if (!url) return '';
  
  // If image is already on a CDN with optimization parameters
  if (url.includes('imagecdn.app') || url.includes('imagekit.io') || url.includes('cloudinary.com')) {
    return url;
  }
  
  // If it's a lovable upload, keep as is (they're already optimized)
  if (url.includes('lovable-uploads')) {
    return url;
  }
  
  // For other images, we can add width and quality parameters
  // This is a placeholder for where you might implement image optimization
  return url;
};

// Lazy loading helper for images
export const lazyLoadImage = (element: HTMLImageElement): void => {
  if ('loading' in HTMLImageElement.prototype) {
    element.loading = 'lazy';
    // Add security attributes to prevent potential CORS issues
    element.crossOrigin = 'anonymous';
    // Add onError handler to manage broken images gracefully
    element.onerror = () => {
      element.src = '/placeholder.svg';
      element.alt = 'Image unavailable';
    };
  } else {
    // Fallback lazy loading for browsers that don't support the loading attribute
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          observer.unobserve(img);
        }
      });
    });
    observer.observe(element);
  }
};

// Prefetch helper for faster page loads with security considerations
export const prefetchPage = (url: string): void => {
  // Only prefetch same-origin URLs to prevent potential security issues
  try {
    const urlObj = new URL(url, window.location.origin);
    if (urlObj.origin === window.location.origin) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    }
  } catch (e) {
    console.error('Invalid URL for prefetching:', e);
  }
};

// Secure URL validator
export const isSecureUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.protocol === 'https:';
  } catch (e) {
    return false;
  }
};

// Add Content Security Policy to the client side application
export const applyCSP = (): void => {
  // For browsers that support it, we can set a CSP via meta tag
  // This is a fallback - the server should set these headers
  if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: www.google-analytics.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.robindigital.io https://www.google-analytics.com; frame-src 'self' https://www.youtube.com https://player.vimeo.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests; block-all-mixed-content;";
    document.head.appendChild(meta);
  }
};

// Core Web Vitals optimization
export const optimizeCWV = (): void => {
  // Optimize Largest Contentful Paint (LCP)
  document.addEventListener('DOMContentLoaded', () => {
    // Find all hero images
    const heroImages = document.querySelectorAll('.hero-section img');
    heroImages.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.fetchPriority = 'high';
        // Add security attributes
        img.crossOrigin = 'anonymous';
      }
    });
  });

  // Optimize First Input Delay (FID)
  // Defer non-critical JavaScript
  const deferNonCritical = () => {
    // Any non-critical scripts would be loaded here
  };
  
  // Execute after page load
  if (document.readyState === 'complete') {
    deferNonCritical();
  } else {
    window.addEventListener('load', deferNonCritical);
  }
  
  // Add Content Security Policy violation reporting
  document.addEventListener('securitypolicyviolation', (e) => {
    console.error('CSP violation:', {
      violatedDirective: e.violatedDirective,
      effectiveDirective: e.effectiveDirective,
      blockedURI: e.blockedURI
    });
    
    // Optional: Send to your error tracking service
    if (typeof window.fetch === 'function') {
      fetch('https://www.robindigital.io/api/csp-report', {
        method: 'POST',
        body: JSON.stringify({
          violatedDirective: e.violatedDirective,
          effectiveDirective: e.effectiveDirective,
          blockedURI: e.blockedURI,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          documentURI: document.location.href
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'same-origin',
        credentials: 'same-origin'
      }).catch(err => console.error('Failed to report CSP violation:', err));
    }
  });
};

// Check SSL/TLS configuration
export const checkSecureConnection = (): void => {
  if (window.location.protocol !== 'https:') {
    console.warn('Site is not being served over HTTPS. This may pose security risks.');
    
    // Attempt to redirect to HTTPS if not already
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }
};

// Initialize performance optimizations with security enhancements
export const initPerformanceOptimizations = (): void => {
  // Apply CSP as early as possible
  applyCSP();
  
  // Verify we're on HTTPS
  checkSecureConnection();
  
  // Initialize other optimizations
  optimizeCWV();
  
  // Add event listeners for link prefetching on hover with security checks
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'A' && 
      target.getAttribute('href') && 
      !target.getAttribute('href')?.startsWith('javascript:') && // Prevent javascript: URLs
      (target.getAttribute('href')?.startsWith('/') || isSecureUrl(target.getAttribute('href') || ''))
    ) {
      prefetchPage(target.getAttribute('href') || '');
    }
  });
  
  // Add security for dynamically created links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    // Check if the clicked element is an anchor tag or has an anchor parent
    const anchor = target.tagName === 'A' ? target : target.closest('a');
    
    if (anchor instanceof HTMLAnchorElement) {
      const href = anchor.getAttribute('href');
      
      // Prevent potentially malicious links
      if (href?.startsWith('javascript:') || 
          (href?.startsWith('http') && !isSecureUrl(href))) {
        e.preventDefault();
        console.warn('Potentially unsafe link blocked:', href);
      }
    }
  }, { capture: true });
};

// Initialize all performance and security optimizations
initPerformanceOptimizations();
