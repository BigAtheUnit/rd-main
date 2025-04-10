
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
  });
};

// Initialize performance optimizations with security enhancements
export const initPerformanceOptimizations = (): void => {
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
