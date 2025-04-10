
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
