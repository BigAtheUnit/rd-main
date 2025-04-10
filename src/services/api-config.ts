
/**
 * API Configuration
 * 
 * This file contains configuration settings for the content API.
 */

// API URL - change this to your Hostinger domain if you set up a headless CMS
export const API_URL = 'https://your-hostinger-domain.com/api';

// Feature flags for API behavior
export const API_CONFIG = {
  // Whether to use local data instead of making API calls
  USE_LOCAL_DATA: true,
  
  // Cache durations in milliseconds
  CACHE_DURATION: {
    THEME_SETTINGS: 24 * 60 * 60 * 1000, // 24 hours
    SERVICES: 12 * 60 * 60 * 1000,       // 12 hours
    TESTIMONIALS: 12 * 60 * 60 * 1000,   // 12 hours
    PAGES: 6 * 60 * 60 * 1000,           // 6 hours
    POSTS: 1 * 60 * 60 * 1000,           // 1 hour
  }
};
