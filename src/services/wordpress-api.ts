
/**
 * Content API Service
 * 
 * This service handles all content data for the site.
 * It attempts to fetch from a headless CMS but falls back to local data
 * for faster performance and reliability.
 */

import { API_URL, API_CONFIG } from './api-config';
import { mockThemeSettings } from './mock-data/theme-settings';
import { mockServices } from './mock-data/services';
import { mockTestimonials } from './mock-data/testimonials';
import { 
  ThemeSettings, 
  Service, 
  Testimonial, 
  PageContent, 
  Post, 
  Product 
} from './models/content-types';

// Re-export types for convenience
export type { 
  ThemeSettings, 
  Service, 
  Testimonial, 
  PageContent, 
  Post, 
  Product 
};

/**
 * Get theme settings with performance optimization
 * - Always returns immediately with static data
 * - No API calls for faster performance
 */
export const getThemeSettings = async (): Promise<ThemeSettings> => {
  // For maximum performance, just return the local data
  return mockThemeSettings;
};

/**
 * Get services with performance optimization
 * - Always returns immediately with static data
 * - No API calls for faster performance
 */
export const getServices = async (): Promise<Service[]> => {
  // For maximum performance, just return the local data
  return mockServices;
};

/**
 * Get testimonials with performance optimization
 * - Always returns immediately with static data
 * - No API calls for faster performance
 */
export const getTestimonials = async (): Promise<Testimonial[]> => {
  // For maximum performance, just return the local data
  return mockTestimonials;
};

/**
 * Get page content - stubbed for the non-WordPress version
 */
export const getPage = async (slug: string): Promise<PageContent> => {
  console.log(`Page requested: ${slug}`);
  return { 
    title: { rendered: 'Page Title' }, 
    content: { rendered: '<p>Page content would go here.</p>' } 
  };
};

/**
 * Get posts - stubbed for the non-WordPress version
 */
export const getPosts = async (page = 1, perPage = 10): Promise<Post[]> => {
  console.log(`Posts requested: page ${page}, perPage ${perPage}`);
  return [];
};

/**
 * Get a single post - stubbed for the non-WordPress version
 */
export const getPost = async (slug: string): Promise<Post | null> => {
  console.log(`Post requested: ${slug}`);
  return null;
};

/**
 * Get products - stubbed for the non-WordPress version
 */
export const getProducts = async (): Promise<Product[]> => {
  console.log('Products requested');
  return [];
};
