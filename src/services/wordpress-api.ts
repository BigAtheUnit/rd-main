
/**
 * Content API Service
 * 
 * This service handles all content data for the site.
 * It attempts to fetch from a headless CMS but falls back to local data
 * for faster performance and reliability.
 */

// API URL - change this to your Hostinger domain if you set up a headless CMS
const API_URL = 'https://your-hostinger-domain.com/api';

// Define types for API responses
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

// Static data for optimal performance - no API calls needed
const localThemeSettings: ThemeSettings = {
  site_title: 'Robin Digital',
  site_description: 'Digital Solutions That Transform',
  logo_url: '',
  hero: {
    title: 'Digital Solutions That Transform',
    subtitle: 'Empowering organizations with innovative digital solutions that make a difference.',
    cta_primary: 'Start Your Project',
    cta_secondary: 'Explore Solutions',
  },
  contact: {
    email: 'hello@robindigital.com',
    address_line1: '123 Digital Hub, Lace Market',
    address_line2: 'Nottingham City Centre, UK',
  },
  social: {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  },
  footer_tagline: 'Empowering organizations with innovative digital solutions that make a difference.',
};

// Static testimonials data for optimal performance
const localTestimonials: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    content: "Robin Digital transformed our outdated website into a powerful fundraising tool. Donations increased by 40% in the first three months after launch.",
    role: "Director of Digital",
    organization: "Charity, London",
    rating: 5,
    avatar: ""
  },
  {
    id: 2,
    author: "Michael Thompson",
    content: "Their WordPress template was exactly what our school needed. Easy to customise and maintain, with excellent support when we needed help.",
    role: "Head of IT",
    organization: "Education, Scotland",
    rating: 5,
    avatar: ""
  },
  {
    id: 3,
    author: "Rebecca Clark",
    content: "The custom CRM they built for our council has streamlined operations and improved our service delivery to vulnerable communities.",
    role: "Digital Transformation Manager",
    organization: "Public Sector, Midlands",
    rating: 5,
    avatar: ""
  }
];

// Static services data for optimal performance
const localServices: Service[] = [
  {
    id: 1,
    title: "WordPress Development",
    content: "<p>Custom WordPress themes and plugins tailored to your specific needs.</p>",
    excerpt: "Custom WordPress themes and plugins tailored to your specific needs.",
    permalink: "#",
    icon: "code",
    featured_image: ""
  },
  {
    id: 2,
    title: "Web Applications",
    content: "<p>Scalable and responsive web applications built with modern frameworks.</p>",
    excerpt: "Scalable and responsive web applications built with modern frameworks.",
    permalink: "#",
    icon: "app-window",
    featured_image: ""
  },
  {
    id: 3,
    title: "Digital Transformation",
    content: "<p>End-to-end digital solutions to transform your organization.</p>",
    excerpt: "End-to-end digital solutions to transform your organization.",
    permalink: "#",
    icon: "rocket",
    featured_image: ""
  }
];

/**
 * Get theme settings with performance optimization
 * - Always returns immediately with static data
 * - No API calls for faster performance
 */
export const getThemeSettings = async (): Promise<ThemeSettings> => {
  // For maximum performance, just return the local data
  return localThemeSettings;
};

/**
 * Get services with performance optimization
 * - Always returns immediately with static data
 * - No API calls for faster performance
 */
export const getServices = async (): Promise<Service[]> => {
  // For maximum performance, just return the local data
  return localServices;
};

/**
 * Get testimonials with performance optimization
 * - Always returns immediately with static data
 * - No API calls for faster performance
 */
export const getTestimonials = async (): Promise<Testimonial[]> => {
  // For maximum performance, just return the local data
  return localTestimonials;
};

/**
 * Get page content - stubbed for the non-WordPress version
 */
export const getPage = async (slug: string): Promise<any> => {
  console.log(`Page requested: ${slug}`);
  return { 
    title: { rendered: 'Page Title' }, 
    content: { rendered: '<p>Page content would go here.</p>' } 
  };
};

/**
 * Get posts - stubbed for the non-WordPress version
 */
export const getPosts = async (page = 1, perPage = 10): Promise<any> => {
  console.log(`Posts requested: page ${page}, perPage ${perPage}`);
  return [];
};

/**
 * Get a single post - stubbed for the non-WordPress version
 */
export const getPost = async (slug: string): Promise<any> => {
  console.log(`Post requested: ${slug}`);
  return null;
};

/**
 * Get products - stubbed for the non-WordPress version
 */
export const getProducts = async (): Promise<any[]> => {
  console.log('Products requested');
  return [];
};
