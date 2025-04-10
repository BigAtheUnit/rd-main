
/**
 * Track when the form was first interacted with
 * Used for bot detection (too fast submissions)
 */
export const trackFormInteraction = (): void => {
  if (!window.sessionStorage.getItem('formStartTime')) {
    window.sessionStorage.setItem('formStartTime', Date.now().toString());
  }
};

/**
 * Check if a submission is within the rate limit
 * Enhanced for VPN compatibility with fallback mechanisms
 * @param cooldownMs Cooldown period in milliseconds
 * @returns Boolean indicating if submission is allowed
 */
export const isWithinRateLimit = (cooldownMs: number = 120000): boolean => {
  try {
    // Reduced to 2 minute cooldown between submissions for VPN users
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    const now = Date.now();
    
    // Identify potential VPN users through storage inconsistencies
    const isPotentialVpnUser = detectVpnUsage();
    
    // Apply more permissive rules for VPN users
    if (isPotentialVpnUser) {
      // For VPN users: shorter cooldown (1 minute) and higher daily limit
      cooldownMs = 60000;
      
      if (lastSubmission && now - parseInt(lastSubmission) < cooldownMs) {
        console.log("Rate limit reached, but VPN detected - applying special rules");
        // For VPN users: instead of blocking completely, check if it's been at least 30 seconds
        return now - parseInt(lastSubmission) >= 30000;
      }
    } else {
      // Standard rate limit check for non-VPN users
      if (lastSubmission && now - parseInt(lastSubmission) < cooldownMs) {
        return false;
      }
    }
    
    // More permissive daily submission limit (15 per day for potential VPN users, 10 otherwise)
    const today = new Date().toDateString();
    const dailySubmissionKey = `submissions_${today}`;
    const dailySubmissionCount = parseInt(localStorage.getItem(dailySubmissionKey) || '0');
    
    const maxDailySubmissions = isPotentialVpnUser ? 15 : 10;
    
    if (dailySubmissionCount >= maxDailySubmissions) {
      console.log(`Daily submission limit reached (${maxDailySubmissions})`);
      return false;
    }
    
    return true;
  } catch (error) {
    // If there's any error with localStorage, default to allowing the submission
    // This helps with cross-origin VPN issues where localStorage might be restricted
    console.error("Error in rate limiting, defaulting to allow:", error);
    return true;
  }
};

/**
 * Detect potential VPN usage through various signals
 * Non-invasive approach that respects privacy
 */
const detectVpnUsage = (): boolean => {
  try {
    // Check for inconsistent localStorage access (common with some VPNs)
    const testKey = 'vpn_detection_test';
    const testValue = Date.now().toString();
    
    // Attempt to write and immediately read from localStorage
    localStorage.setItem(testKey, testValue);
    const retrieved = localStorage.getItem(testKey);
    
    // Some VPNs with privacy features may block or alter localStorage
    const storageInconsistency = retrieved !== testValue;
    
    // Check for timezone inconsistencies (common VPN signal)
    const browserTime = new Date();
    const timezoneOffset = browserTime.getTimezoneOffset();
    
    // Get timezone name if available (not supported in all browsers)
    const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    
    // Store the timezone info for consistency checking across sessions
    const storedTimezone = localStorage.getItem('user_timezone');
    let timezoneChanged = false;
    
    if (storedTimezone) {
      // If timezone data exists, check if it suddenly changed
      const [storedOffset, storedName] = storedTimezone.split('|');
      timezoneChanged = storedOffset !== timezoneOffset.toString() || 
                         (storedName && storedName !== timezoneName);
    }
    
    // Store current timezone info for future checks
    localStorage.setItem('user_timezone', `${timezoneOffset}|${timezoneName}`);
    
    // Return true if any VPN indicators are detected
    return storageInconsistency || timezoneChanged;
  } catch (error) {
    // If any errors occur during detection, assume it might be a VPN
    // Better to allow legitimate submissions than block them
    console.warn("Error in VPN detection, assuming potential VPN:", error);
    return true;
  }
};

/**
 * Record a successful submission for rate limiting
 * Enhanced with fallback mechanisms for VPN users
 */
export const recordSubmission = (): void => {
  try {
    // Record timestamp of submission
    localStorage.setItem('lastFormSubmission', Date.now().toString());
    
    // Increment daily submission count
    const today = new Date().toDateString();
    const dailySubmissionKey = `submissions_${today}`;
    const dailySubmissionCount = parseInt(localStorage.getItem(dailySubmissionKey) || '0');
    localStorage.setItem(dailySubmissionKey, (dailySubmissionCount + 1).toString());
  } catch (error) {
    // Fallback for VPN users with localStorage restrictions
    console.error("Error recording submission, using fallback approach:", error);
    
    // For VPN users with localStorage issues, try sessionStorage as fallback
    try {
      sessionStorage.setItem('lastFormSubmission', Date.now().toString());
    } catch (sessionError) {
      // If both fail, log but don't block the submission
      console.error("Both storage mechanisms failed, continuing anyway:", sessionError);
    }
  }
};
