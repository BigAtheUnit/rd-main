
import { BlogPost } from '../../models/content-types';

/**
 * Blog posts related to small business, digital marketing, and trends
 */
export const businessPosts: BlogPost[] = [
  {
    id: 9,
    title: "Top Digital Trends for Small Businesses in 2025",
    slug: "top-digital-trends-small-businesses-2025",
    excerpt: "Discover the key digital trends shaping small business success in 2025 — from AI automation to hyperlocal SEO and sustainable tech.",
    content: `
      <p class="lead">The digital landscape is shifting fast, and small businesses that adapt early often gain the edge. In 2025, staying competitive means keeping an eye on emerging technologies and evolving customer behaviours.</p>
      
      <p>Here are the top digital trends small businesses should watch this year.</p>
      
      <h2>1. Hyperlocal SEO and Voice Search</h2>
      <p>With more customers using voice assistants to find services, small businesses are doubling down on local SEO. Optimise for "near me" searches and voice-friendly content.</p>
      
      <p>Tools like Google Business Profile and schema markup are essential.</p>
      
      <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=1170&auto=format&fit=crop" alt="Voice search on a smartphone finding local businesses" />
      
      <h2>2. Automation with AI</h2>
      <p>From invoice processing to customer responses, small businesses are using AI-powered tools like Zapier, Tidio, and ChatGPT to reduce admin time and improve customer experience.</p>
      
      <p>This isn't about replacing people — it's about letting your team focus on what matters.</p>
      
      <p>For guidance on selecting the right AI solutions for your specific needs, see our detailed guide on <a href="/blog/choose-right-generative-ai-tool-workplace">choosing the right generative AI tool</a> for your workplace.</p>
      
      <h2>3. Social Selling and Shortform Video</h2>
      <p>Video content continues to dominate. Platforms like Instagram Reels, TikTok, and YouTube Shorts are helping even microbusinesses reach huge audiences with minimal spend.</p>
      
      <p>Invest in storytelling, not just selling.</p>
      
      <h2>4. First-Party Data and Email Marketing</h2>
      <p>With third-party cookies disappearing, businesses are focusing more on building their own email lists and engaging customers with personalised, permission-based marketing.</p>
      
      <h2>5. Sustainability and Digital Carbon Footprint</h2>
      <p>Consumers increasingly expect ethical practices — including online. This includes green hosting, optimised image loading, and transparent supply chains.</p>
      
      <p>As you upgrade your online presence, don't overlook the importance of <a href="/blog/accessibility-foundation-website-design">website accessibility</a> — it's not just good practice, it's becoming essential for reaching all potential customers.</p>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    date: "2025-04-12",
    formattedDate: "April 12, 2025",
    author: "Robin Digital",
    categories: ["Small Business", "Digital Marketing", "SEO", "Social Media"]
  }
];
