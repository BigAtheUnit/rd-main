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

// Prefetch helper for faster page loads
export const prefetchPage = (url: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
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
};

// Initialize performance optimizations
export const initPerformanceOptimizations = (): void => {
  optimizeCWV();
  
  // Add event listeners for link prefetching on hover
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
      prefetchPage(target.getAttribute('href') || '');
    }
  });
};
