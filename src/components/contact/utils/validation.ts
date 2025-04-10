
/**
 * Email validation utility
 * @param email Email to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Input sanitization to prevent XSS
 * @param input Raw user input
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Spam detection using multiple techniques
 * @param formData The form data to check
 * @returns Boolean indicating if submission is spam
 */
export const checkForSpam = (formData: {
  name: string;
  email: string;
  message: string;
  contact_me_by_fax?: string;
}): boolean => {
  // Check honeypot field - if filled, it's definitely a bot
  if (formData.contact_me_by_fax && formData.contact_me_by_fax.length > 0) {
    console.log("Honeypot field was filled - blocking as spam");
    return true;
  }
  
  // Check for submission time - if too fast (< 3 seconds), likely a bot
  const formStartTime = window.sessionStorage.getItem('formStartTime');
  if (formStartTime) {
    const timeSpent = Date.now() - parseInt(formStartTime);
    if (timeSpent < 3000) { // Less than 3 seconds
      console.log("Form filled too quickly - blocking as spam");
      return true;
    }
  }
  
  // Check for common spam keywords
  const spamKeywords = [
    'viagra', 'cialis', 'casino', 'lottery', 'prize', 'winner', 
    'buy followers', 'buy likes', 'cheap seo', 'make money fast'
  ];
  
  const combinedText = (
    (formData.name || '') +
    (formData.message || '')
  ).toLowerCase();
  
  for (const keyword of spamKeywords) {
    if (combinedText.includes(keyword)) {
      console.log(`Spam keyword detected: ${keyword}`);
      return true;
    }
  }
  
  // Check for excessive URLs in message (likely spam)
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urlMatches = formData.message?.match(urlRegex) || [];
  if (urlMatches.length > 2) {
    console.log("Too many URLs in message - blocking as spam");
    return true;
  }
  
  return false;
};

/**
 * Form validation
 * @param formData Form data object
 */
export const validateForm = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!formData.name.trim()) {
    throw new Error("Please enter your name");
  }
  
  if (!formData.email.trim()) {
    throw new Error("Please enter your email address");
  }
  
  if (!isValidEmail(formData.email)) {
    throw new Error("Please enter a valid email address");
  }
  
  if (!formData.message.trim()) {
    throw new Error("Please enter your message");
  }
  
  // Limit message length to prevent abuse
  if (formData.message.length > 2000) {
    throw new Error("Message is too long. Please limit to 2000 characters.");
  }
};
