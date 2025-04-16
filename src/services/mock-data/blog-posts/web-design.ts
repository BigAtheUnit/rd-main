
import { BlogPost } from '../../models/content-types';

/**
 * Blog posts related to web design, accessibility, UX/UI
 */
export const webDesignPosts: BlogPost[] = [
  {
    id: 10,
    title: "Why Accessibility Should Be the Foundation of Your Website Design",
    slug: "accessibility-foundation-website-design",
    excerpt: "Website accessibility isn't just a legal requirement — it's a design principle that benefits everyone. Here's why you should start with it.",
    content: `
      <p class="lead">Accessibility isn't an add-on — it's the backbone of inclusive, user-friendly websites. Designing with accessibility from the start not only protects you legally (hello WCAG 2.1 compliance), but also boosts SEO, user experience, and public perception.</p>
      
      <h2>1. Accessibility Is a Legal Requirement</h2>
      <p>Under the Equality Act 2010, UK websites must be accessible to people with disabilities. This includes screen reader support, keyboard navigation, and proper colour contrast.</p>
      
      <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1170&auto=format&fit=crop" alt="Person using screen reader technology on a website" />
      
      <h2>2. It Expands Your Audience</h2>
      <p>An accessible site works for:</p>
      
      <ul>
        <li>Users with visual, motor, or cognitive impairments</li>
        <li>Older adults</li>
        <li>People using mobile or assistive tech</li>
      </ul>
      
      <p>That's a huge chunk of potential customers or service users.</p>
      
      <h2>3. It Improves SEO</h2>
      <p>Google loves accessible websites. Clear headings, alt text, and fast load times all contribute to better rankings.</p>
      
      <h2>4. It Enhances UX for Everyone</h2>
      <p>Good accessibility practices make your site easier for all users — especially on mobile.</p>
      
      <h2>5. It's the Right Thing to Do</h2>
      <p>Inclusion builds trust. Prioritising accessibility shows users you care about everyone, not just the majority.</p>
      
      <p>For public sector organizations where accessibility is a legal mandate, our guide on <a href="/blog/accessibility-web-design-public-sector">accessibility in web design for the public sector</a> provides specific compliance guidance.</p>
      
      <p>When building customer trust online, accessibility works hand in hand with security. Learn how <a href="/blog/cybersecurity-brand-asset-trust-online">cybersecurity can be a valuable brand asset</a> that complements your accessibility efforts.</p>
    `,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1170&auto=format&fit=crop",
    date: "2025-04-10",
    formattedDate: "April 10, 2025",
    author: "Adam Huckerby",
    categories: ["Accessibility", "Web Design", "UX/UI", "Inclusion"]
  }
];
