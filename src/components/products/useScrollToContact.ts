
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollToContact = () => {
  const navigate = useNavigate();
  
  const handleContactClick = useCallback(() => {
    // Navigate to the dedicated contact page instead of scrolling
    navigate('/contact');
  }, [navigate]);
  
  return { handleContactClick };
};
