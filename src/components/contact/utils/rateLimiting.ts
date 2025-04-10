
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
 * @param cooldownMs Cooldown period in milliseconds
 * @returns Boolean indicating if submission is allowed
 */
export const isWithinRateLimit = (cooldownMs: number = 300000): boolean => {
  // 5 minute cooldown between submissions (increased from 1 minute)
  const lastSubmission = localStorage.getItem('lastFormSubmission');
  const now = Date.now();
  
  if (lastSubmission && now - parseInt(lastSubmission) < cooldownMs) {
    return false;
  }
  
  // Check daily submission limit (5 per day max) to prevent spam
  const today = new Date().toDateString();
  const dailySubmissionCount = parseInt(localStorage.getItem(`submissions_${today}`) || '0');
  
  if (dailySubmissionCount >= 5) {
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
