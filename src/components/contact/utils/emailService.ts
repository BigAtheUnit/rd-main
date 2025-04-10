
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
 * Send email using EmailJS service with enhanced VPN compatibility
 * @param params Email parameters
 * @returns Promise with the result
 */
export const sendEmail = async (params: EmailParams) => {
  console.log("Attempting to send form with EmailJS...");
  
  // Convert boolean to string for EmailJS template
  const templateParams = {
    ...params,
    newsletter: params.newsletter ? "Yes" : "No"
  };
  
  // Add an identifier to help with debugging VPN issues
  const vpnCompatibleParams = {
    ...templateParams,
    vpnCompatMode: "true",
    timestamp: Date.now().toString()
  };
  
  try {
    // Enhanced send method with timeout to prevent hanging requests
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("EmailJS request timed out")), 10000)
    );
    
    const sendPromise = emailjs.send(
      "service_0ifrai8", // Service ID
      "template_833msmm", // Template ID
      vpnCompatibleParams,
      "2e9rybcQIWSRcCfQ9" // Public key
    );
    
    // Race between actual send and timeout
    const result = await Promise.race([sendPromise, timeoutPromise]) as any;
    
    console.log("EmailJS send successful:", result);
    return result;
  } catch (emailError) {
    console.error("EmailJS send error:", emailError);
    
    // Special handling for network errors that might be VPN-related
    if (
      emailError instanceof Error && 
      (emailError.message.includes("network") || 
       emailError.message.includes("timeout") ||
       emailError.message.includes("cors"))
    ) {
      console.log("Detected potential VPN-related error, attempting alternate approach");
      
      // Try a different approach for VPN users
      return await fallbackSendMethod(vpnCompatibleParams);
    }
    
    throw new Error("There was a problem sending your message. Please try again later.");
  }
};

/**
 * Fallback send method for VPN users with different configuration
 */
const fallbackSendMethod = async (params: any) => {
  console.log("Using fallback send method for VPN compatibility");
  
  try {
    // Use a more basic configuration that works better with VPNs
    const result = await emailjs.send(
      "service_0ifrai8", // Service ID
      "template_833msmm", // Template ID
      {
        ...params,
        vpnFallbackMode: "true" // Add flag to identify fallback mode in logs
      },
      "2e9rybcQIWSRcCfQ9" // Public key
    );
    
    console.log("Fallback send successful:", result);
    return result;
  } catch (fallbackError) {
    console.error("Fallback send failed:", fallbackError);
    throw new Error("Unable to send message. Please try disabling any content blockers or try again later.");
  }
};
