
import { useCallback } from 'react';

export const useScrollToContact = () => {
  const handleContactClick = useCallback(() => {
    // Navigate to homepage and scroll to contact section
    window.location.href = "/#contact";
  }, []);
  
  return { handleContactClick };
};
