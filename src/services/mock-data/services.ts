
import { Service } from '../models/content-types';

/**
 * Static services data for optimal performance
 */
export const mockServices: Service[] = [
  {
    id: 1,
    title: "Web Development",
    content: "<p>Custom web development with solutions tailored to your specific business needs and objectives.</p>",
    excerpt: "Custom web development with solutions tailored to your specific business needs and objectives.",
    permalink: "#",
    icon: "code",
    featured_image: ""
  },
  {
    id: 2,
    title: "AI Consulting & Implementation",
    content: "<p>Leverage the power of AI to solve complex problems and enhance your digital capabilities.</p>",
    excerpt: "Leverage the power of AI to solve complex problems and enhance your digital capabilities.",
    permalink: "#",
    icon: "bot",
    featured_image: ""
  },
  {
    id: 3,
    title: "CMS Development",
    content: "<p>Expert WordPress, Drupal, and other CMS development with tailored solutions for content management.</p>",
    excerpt: "Expert WordPress, Drupal, and other CMS development with tailored solutions for content management.",
    permalink: "#",
    icon: "globe",
    featured_image: ""
  }
];
