
import { Testimonial } from '../models/content-types';

/**
 * Static testimonials data for optimal performance
 */
export const mockTestimonials: Testimonial[] = [
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
