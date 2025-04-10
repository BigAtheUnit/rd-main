
/**
 * Check if the current device is running iOS
 * @returns Boolean indicating if device is iOS
 */
export const isIOSDevice = (): boolean => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return isIOS;
};

/**
 * Check if the current browser is Safari
 * @returns Boolean indicating if browser is Safari
 */
export const isSafariBrowser = (): boolean => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return isSafari;
};

/**
 * Apply browser-specific fixes to hide the Lovable editor
 * Works for all browsers, not just iOS/Safari
 */
export const applyIOSFixes = (): void => {
  // Apply multiple methods to hide the Lovable editor
  
  // Method 1: URL parameter
  if (window.location.href.indexOf('forceHideBadge=true') === -1) {
    const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
    const newUrl = window.location.href + separator + 'forceHideBadge=true';
    window.history.replaceState({}, document.title, newUrl);
  }
  
  // Method 2: Local storage
  localStorage.setItem('hideLovableEditor', 'true');
  localStorage.setItem('lovable_hideEditor', 'true');
  
  // Method 3: Meta viewport tag
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
  
  // Method 4: Additional CSS to hide any potential overlays
  const style = document.createElement('style');
  style.textContent = `
    [id*="lovable"], [class*="lovable"], [id*="lovable-editor"], [id*="lovable-badge"], [id*="lovable-button"], [class*="lovable-editor"] {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
  
  console.log("Applied comprehensive badge hiding fixes");
};
