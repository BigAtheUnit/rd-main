
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

// Mock testimonials data to use when API isn't available
const mockTestimonials: Testimonial[] = [
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

// Mock services data to use when API isn't available
const mockServices: Service[] = [
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
    // Return mock data if API fails
    return {
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
    // Return mock data if API fails
    return mockServices;
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
    // Return mock data if API fails
    return mockTestimonials;
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
