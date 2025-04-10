
/**
 * Content API Data Models
 * 
 * This file contains all the type definitions used by the content API services.
 */

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

export interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
}

export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
