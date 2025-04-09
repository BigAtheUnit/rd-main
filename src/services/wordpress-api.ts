/**
 * WordPress API Service
 * 
 * This service handles all requests to the WordPress REST API
 * for the headless CMS setup.
 */

// WordPress site URL - change this to your Hostinger domain
const WORDPRESS_API_URL = 'https://your-hostinger-domain.com/wp-json';

// Define types for WordPress API responses
export interface ThemeSettings {
  site_title: string;
  site_description: string;
  logo_url: string;
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
  };
  contact: {
    email: string;
    address_line1: string;
    address_line2: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  footer_tagline: string;
}

export interface Service {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  permalink: string;
  icon: string;
  featured_image: string;
}

export interface Testimonial {
  id: number;
  author: string;
  content: string;
  role: string;
  organization: string;
  rating: number;
  avatar: string;
}

/**
 * Fetch settings from WordPress
 */
export const getThemeSettings = async (): Promise<ThemeSettings> => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/robindigital/v1/settings`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch theme settings: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching theme settings:', error);
    throw error;
  }
};

/**
 * Fetch services from WordPress
 */
export const getServices = async (): Promise<Service[]> => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/robindigital/v1/services`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

/**
 * Fetch testimonials from WordPress
 */
export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/robindigital/v1/testimonials`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

/**
 * Fetch pages from WordPress
 */
export const getPage = async (slug: string): Promise<any> => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/pages?slug=${slug}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.status}`);
    }
    
    const pages = await response.json();
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    throw error;
  }
};

/**
 * Fetch posts from WordPress
 */
export const getPosts = async (page = 1, perPage = 10): Promise<any> => {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp/v2/posts?page=${page}&per_page=${perPage}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Fetch a single post from WordPress
 */
export const getPost = async (slug: string): Promise<any> => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    throw error;
  }
};

/**
 * Fetch products from WordPress
 */
export const getProducts = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/products?per_page=100`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
