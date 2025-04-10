
/**
 * Utility to ensure lovable editor is not visible in share previews and social cards
 */

/**
 * Remove any Lovable editor references that might appear in social media previews or cards
 */
export const removeLovableReferences = (): void => {
  // Execute once DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Find and remove any elements with lovable or editor related classnames/ids
    // Exclude the required gptengineer.js script
    const potentialEditorElements = document.querySelectorAll(
      '[id*="lovable-editor"], [class*="lovable-editor"], [id*="lovable-badge"], [class*="lovable-badge"], [id*="lovable-preview"], [class*="lovable-preview"], [id*="splash-screen"], [class*="splash-screen"]'
    );

    potentialEditorElements.forEach(element => {
      element.remove();
    });

    // Remove any elements with href attributes containing lovable.dev
    document.querySelectorAll('a[href*="lovable.dev"]').forEach(link => {
      link.remove();
    });

    // Find and remove any meta tags with lovable in the content
    document.querySelectorAll('meta').forEach(meta => {
      const content = meta.getAttribute('content') || '';
      if (content.includes('lovable') && !meta.getAttribute('name')?.includes('description')) {
        meta.remove();
      }
    });

    // Add specific CSS to ensure editor is not shown in screenshots
    // But allow the required gptengineer.js script
    const style = document.createElement('style');
    style.textContent = `
      [id*="lovable"], [class*="lovable"], [id*="lovable-editor"], [id*="lovable-badge"], 
      [id*="gpt-engineer"], [class*="gpt-engineer"], [id*="gpteng"], [class*="gpteng"],
      [id*="splash-screen"], [class*="splash-screen"], [id*="lovable-preview"], [class*="lovable-preview"] {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        height: 0 !important;
        width: 0 !important;
        position: absolute !important;
        z-index: -9999 !important;
      }
      
      /* Exception for the required gptengineer.js script */
      script[src="https://cdn.gpteng.co/gptengineer.js"] {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      /* Hide any badge elements */
      [href*="lovable.dev"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Set localStorage indicators 
    localStorage.setItem('hideLovableEditor', 'true');
    localStorage.setItem('hideEditor', 'true');
    localStorage.setItem('hideSplashScreen', 'true');
    localStorage.setItem('hideSocialPreview', 'true');
    
    // Remove any script tags related to lovable or gpteng except the required one
    document.querySelectorAll('script').forEach(scriptTag => {
      const src = scriptTag.getAttribute('src') || '';
      if ((src.includes('lovable') || src.includes('gpteng')) && 
          src !== 'https://cdn.gpteng.co/gptengineer.js') {
        scriptTag.remove();
      }
    });
    
    // Verify that OG and Twitter images are set correctly
    const correctImageUrl = 'https://www.robindigital.io/lovable-uploads/a66dd7fe-3331-45db-a03b-de02400f9e5b.png';
    
    // Update OG image if needed
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', correctImageUrl);
    }
    
    // Update Twitter image if needed
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', correctImageUrl);
    }
  });
  
  // Listen for any new elements being added to the DOM that might be from Lovable
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (
              node.id?.includes('lovable') || 
              node.className?.includes('lovable') ||
              node.id?.includes('gpteng') || 
              node.className?.includes('gpteng') ||
              node.id?.includes('splash-screen') || 
              node.className?.includes('splash-screen')
            ) {
              // Don't remove the required script
              if (node.tagName === 'SCRIPT' && 
                  node.getAttribute('src') === 'https://cdn.gpteng.co/gptengineer.js') {
                return;
              }
              node.remove();
            }
            
            // Remove any links to lovable.dev
            if (node.tagName === 'A' && node.getAttribute('href')?.includes('lovable.dev')) {
              node.remove();
            }
            
            // Check for script tags as well, but preserve the required one
            if (node.tagName === 'SCRIPT') {
              const src = node.getAttribute('src') || '';
              if ((src.includes('lovable') || src.includes('gpteng')) && 
                  src !== 'https://cdn.gpteng.co/gptengineer.js') {
                node.remove();
              }
            }
          }
        });
      }
    });
  });
  
  // Start observing the document
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  
  // Make sure to override any attempt to show the Lovable splash screen
  if (window.localStorage) {
    Object.defineProperty(window.localStorage, 'getItem', {
      value: function(key: string) {
        if (key && (key.includes('lovable') || key.includes('splash') || key.includes('editor') || key.includes('gpteng'))) {
          return 'false';
        }
        return Storage.prototype.getItem.apply(this, arguments);
      },
      writable: false
    });
  }
};

// Call this function immediately to ensure it runs
removeLovableReferences();

// Export for direct importing
export default removeLovableReferences;
