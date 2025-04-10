
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
    const potentialEditorElements = document.querySelectorAll(
      '[id*="lovable-editor"], [class*="lovable-editor"], [id*="lovable-badge"], [class*="lovable-badge"], [id*="lovable-preview"], [class*="lovable-preview"], [id*="splash-screen"], [class*="splash-screen"]'
    );

    potentialEditorElements.forEach(element => {
      element.remove();
    });

    // Add specific CSS to ensure editor is not shown in screenshots
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
    `;
    document.head.appendChild(style);

    // Set localStorage indicators 
    localStorage.setItem('hideLovableEditor', 'true');
    localStorage.setItem('hideEditor', 'true');
    localStorage.setItem('hideSplashScreen', 'true');
    localStorage.setItem('hideSocialPreview', 'true');
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
              node.remove();
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
        if (key && (key.includes('lovable') || key.includes('splash') || key.includes('editor'))) {
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
