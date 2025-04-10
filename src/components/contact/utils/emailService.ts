
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("2e9rybcQIWSRcCfQ9"); // Public key for EmailJS

/**
 * Standard email parameters interface
 */
export interface EmailParams {
  name: string;
  email: string;
  Organisation: string;
  message: string;
  newsletter: boolean;
}

/**
 * Send email using EmailJS service
 * @param params Email parameters
 * @returns Promise with the result
 */
export const sendEmail = async (params: EmailParams) => {
  console.log("Attempting to send form with EmailJS...");
  console.log("Form data:", params);
  
  // Convert boolean to string for EmailJS template
  const templateParams = {
    ...params,
    newsletter: params.newsletter ? "Yes" : "No"
  };
  
  console.log("Template params for EmailJS:", templateParams);
  
  try {
    // Direct send method (better compatibility with Safari/iOS)
    const result = await emailjs.send(
      "service_0ifrai8", // Service ID
      "template_833msmm", // Template ID
      templateParams,
      "2e9rybcQIWSRcCfQ9" // Public key
    );
    
    console.log("EmailJS direct send result:", result);
    return result;
  } catch (emailError) {
    console.error("EmailJS direct send error:", emailError);
    throw new Error("There was a problem sending your message. Please try again later.");
  }
};
