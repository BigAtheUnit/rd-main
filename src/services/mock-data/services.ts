
import { Service } from '../models/content-types';

/**
 * Static services data for optimal performance
 */
export const mockServices: Service[] = [
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
