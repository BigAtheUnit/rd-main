
/**
 * Check if a submission is within the rate limit
 * @param cooldownMs Cooldown period in milliseconds
 * @returns Boolean indicating if submission is allowed
 */
export const isWithinRateLimit = (cooldownMs: number = 60000): boolean => {
  const lastSubmission = localStorage.getItem('lastFormSubmission');
  const now = Date.now();
  
  if (lastSubmission && now - parseInt(lastSubmission) < cooldownMs) {
    return false;
  }
  
  return true;
};

/**
 * Record a successful submission for rate limiting
 */
export const recordSubmission = (): void => {
  localStorage.setItem('lastFormSubmission', Date.now().toString());
};
