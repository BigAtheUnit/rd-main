
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
 * Apply iOS-specific fixes to hide the Lovable editor
 */
export const applyIOSFixes = (): void => {
  // If on iOS, apply the URL parameter to hide the Lovable editor
  if (window.location.href.indexOf('forceHideBadge=true') === -1) {
    const separator = window.location.href.indexOf('?') !== -1 ? '&' : '?';
    const newUrl = window.location.href + separator + 'forceHideBadge=true';
    
    // Use history API to avoid page reload
    window.history.replaceState({}, document.title, newUrl);
  }
  
  // Set local storage flag to hide Lovable editor
  localStorage.setItem('hideLovableEditor', 'true');
  
  // Add meta tag to prevent zooming on iOS
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
};
