
/**
 * Track when the form was first interacted with
 * Used for bot detection (too fast submissions)
 */
export const trackFormInteraction = (): void => {
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.setItem('formStartTime', Date.now().toString());
    } catch (err) {
      console.warn("Unable to set session storage, continuing anyway:", err);
      // Create in-memory fallback for VPN users with restricted storage
      window.__formStartTime = Date.now();
    }
  }
};

/**
 * Check if a submission is within the rate limit
 * Enhanced with multiple fallbacks for VPN users
 * @returns Boolean indicating if submission is allowed
 */
export const isWithinRateLimit = (): boolean => {
  // Always allow submissions for VPN users to ensure compatibility
  if (detectVpnUsage()) {
    console.log("VPN detected - bypassing rate limiting");
    return true;
  }
  
  try {
    // For non-VPN users, apply a simple cooldown check
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    const now = Date.now();
    
    if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
      return false;
    }
    
    // Check daily submission limit (10 per day)
    const today = new Date().toDateString();
    const dailySubmissionKey = `submissions_${today}`;
    const dailySubmissionCount = parseInt(localStorage.getItem(dailySubmissionKey) || '0');
    
    if (dailySubmissionCount >= 10) {
      console.log("Daily submission limit reached (10)");
      return false;
    }
    
    return true;
  } catch (error) {
    // If there's any error with storage, default to allowing the submission
    console.error("Error in rate limiting, defaulting to allow:", error);
    return true;
  }
};

/**
 * Enhanced VPN detection that always errs on the side of caution
 * Uses multiple signals to detect VPN usage
 */
const detectVpnUsage = (): boolean => {
  try {
    // Check for storage inconsistencies (common with VPNs)
    let storageInconsistency = false;
    
    try {
      // Test localStorage
      const testKey = 'vpn_detection_test';
      localStorage.setItem(testKey, 'test');
      const retrieved = localStorage.getItem(testKey);
      storageInconsistency = retrieved !== 'test';
      localStorage.removeItem(testKey);
    } catch (storageErr) {
      // If we can't access localStorage at all, likely a VPN with privacy features
      storageInconsistency = true;
    }
    
    // Check for unusual user agent or navigator properties
    const userAgent = navigator.userAgent.toLowerCase();
    const hasVpnSignals = userAgent.includes('anonymized') || 
                          userAgent.includes('proxy') ||
                          typeof navigator.connection === 'undefined';
    
    // Check for timezone inconsistencies
    const browserTime = new Date();
    const timezoneOffset = browserTime.getTimezoneOffset();
    
    // Get timezone name if available
    const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    
    let timezoneChanged = false;
    
    try {
      const storedTimezone = localStorage.getItem('user_timezone');
      
      if (storedTimezone) {
        const [storedOffset, storedName] = storedTimezone.split('|');
        timezoneChanged = storedOffset !== timezoneOffset.toString() || 
                          (storedName && storedName !== timezoneName);
      }
      
      // Store current timezone info for future checks
      localStorage.setItem('user_timezone', `${timezoneOffset}|${timezoneName}`);
    } catch (tzErr) {
      // If we can't check timezone, assume it might be a VPN
      timezoneChanged = true;
    }
    
    return storageInconsistency || hasVpnSignals || timezoneChanged;
  } catch (error) {
    // If any errors occur during detection, assume it might be a VPN
    console.warn("Error in VPN detection, assuming potential VPN to ensure compatibility:", error);
    return true;
  }
};

/**
 * Record a successful submission with VPN compatibility
 */
export const recordSubmission = (): void => {
  try {
    // Try to record timestamp in localStorage
    localStorage.setItem('lastFormSubmission', Date.now().toString());
    
    // Try to increment daily count
    const today = new Date().toDateString();
    const dailySubmissionKey = `submissions_${today}`;
    const dailySubmissionCount = parseInt(localStorage.getItem(dailySubmissionKey) || '0');
    localStorage.setItem(dailySubmissionKey, (dailySubmissionCount + 1).toString());
  } catch (error) {
    // For VPN users, try sessionStorage as fallback
    try {
      sessionStorage.setItem('lastFormSubmission', Date.now().toString());
    } catch (sessionError) {
      // If both fail, create in-memory fallback
      window.__lastFormSubmission = Date.now();
      console.log("Using in-memory fallback for submission recording");
    }
  }
};

// Attach a global property for VPN-compatible storage fallback
declare global {
  interface Window {
    __formStartTime?: number;
    __lastFormSubmission?: number;
  }
}

