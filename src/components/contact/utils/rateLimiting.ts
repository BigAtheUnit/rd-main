
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
 * VPN compatible with less restrictive limits for legitimate users
 * @param cooldownMs Cooldown period in milliseconds
 * @returns Boolean indicating if submission is allowed
 */
export const isWithinRateLimit = (cooldownMs: number = 180000): boolean => {
  // 3 minute cooldown between submissions (reduced for legitimate VPN users)
  const lastSubmission = localStorage.getItem('lastFormSubmission');
  const now = Date.now();
  
  if (lastSubmission && now - parseInt(lastSubmission) < cooldownMs) {
    return false;
  }
  
  // More permissive daily submission limit (10 per day)
  const today = new Date().toDateString();
  const dailySubmissionCount = parseInt(localStorage.getItem(`submissions_${today}`) || '0');
  
  if (dailySubmissionCount >= 10) {
    console.log("Daily submission limit reached");
    return false;
  }
  
  return true;
};

/**
 * Record a successful submission for rate limiting
 */
export const recordSubmission = (): void => {
  // Record timestamp of submission
  localStorage.setItem('lastFormSubmission', Date.now().toString());
  
  // Increment daily submission count
  const today = new Date().toDateString();
  const dailySubmissionCount = parseInt(localStorage.getItem(`submissions_${today}`) || '0');
  localStorage.setItem(`submissions_${today}`, (dailySubmissionCount + 1).toString());
};
