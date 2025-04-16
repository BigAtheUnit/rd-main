
import { BlogPost } from '../../models/content-types';

/**
 * Blog posts related to the public sector
 */
export const publicSectorPosts: BlogPost[] = [
  {
    id: 2,
    title: "Digital Strategy for the Public Sector: 2025 Trends You Can't Ignore",
    slug: "digital-strategy-public-sector-2025-trends",
    excerpt: "From data dashboards to digital inclusion, here are the key trends shaping public sector digital strategy in 2025 — and how to stay ahead.",
    content: `
      <p class="lead">The pace of change in the public sector has accelerated dramatically post-pandemic. Digital is no longer a nice-to-have — it's essential to delivering services that are faster, fairer, and more accessible.</p>
      
      <p>Here are the key digital trends shaping 2025 and how councils, NHS bodies, and public service providers can respond.</p>
      
      <h2>1. Citizen-Centred Design</h2>
      <p>Gone are the days of clunky portals. 2025 is about designing experiences around real user journeys. The best public sector websites now involve service users in testing and co-design.</p>
      
      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop" alt="UX Designer working with citizen panel on public service design" />
      
      <h2>2. Data-Driven Decision Making</h2>
      <p>Public bodies are increasingly using interactive dashboards and real-time data visualisation tools (e.g. Power BI, Tableau) to guide policy, identify inequalities, and demonstrate accountability.</p>
      
      <h2>3. Digital Inclusion by Design</h2>
      <p>From assistive tech to mobile-friendly layouts, digital inclusion is baked into the design process. This includes translation tools, plain English content, and ensuring low-income communities aren't left behind.</p>
      
      <p>Digital inclusion and <a href="/blog/accessibility-web-design-public-sector">web accessibility standards</a> have become critical considerations for all public sector websites, with legal requirements driving better user experiences for everyone.</p>
      
      <h2>4. Sustainable Technology Choices</h2>
      <p>Green hosting, carbon footprint calculators, and energy-efficient design are all now part of responsible digital procurement.</p>
      
      <h2>5. Cybersecurity and Public Trust</h2>
      <p>With ransomware attacks on the rise, public trust depends on robust security. Public sector digital strategies now prioritise security-by-default and transparent data governance.</p>
      
      <p>Building trust through security isn't just good practice—it's becoming a <a href="/blog/cybersecurity-brand-asset-trust-online">valuable brand asset</a> that can differentiate your organization in a crowded digital landscape.</p>
    `,
    image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=1170&auto=format&fit=crop",
    date: "2025-04-11",
    formattedDate: "April 11, 2025",
    author: "Adam Huckerby",
    categories: ["Public Sector", "Digital Strategy", "Data", "Accessibility"]
  },
  {
    id: 6,
    title: "Accessibility in Web Design: A Public Sector Imperative",
    slug: "accessibility-web-design-public-sector",
    excerpt: "Accessibility isn't optional for public sector websites. Learn about legal requirements, implementation strategies, and the benefits beyond compliance.",
    content: `
      <p class="lead">For public sector organizations, web accessibility isn't just good practice—it's a legal requirement. The Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 mandate that all public sector websites must be accessible to everyone, including people with disabilities.</p>
      
      <p>But accessibility brings benefits that go far beyond compliance.</p>
      
      <h2>The Legal Landscape</h2>
      <p>Public sector websites must meet the WCAG 2.1 AA standard. This includes requirements for:</p>
      <ul>
        <li>Text alternatives for non-text content</li>
        <li>Captions for videos</li>
        <li>Content that can be presented in different ways</li>
        <li>Keyboard navigation for all functionality</li>
        <li>Sufficient time to read and use content</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1176&auto=format&fit=crop" alt="Person using assistive technology to access government website" />
      
      <h2>Benefits Beyond Compliance</h2>
      <p>Accessible websites deliver advantages that benefit everyone:</p>
      <ul>
        <li>Improved usability for all visitors</li>
        <li>Better SEO and search rankings</li>
        <li>Faster page load times</li>
        <li>Increased mobile usability</li>
        <li>Future-proofing your digital presence</li>
      </ul>
      
      <p>For more on why accessibility should be fundamental to your approach rather than an afterthought, read our article on <a href="/blog/accessibility-foundation-website-design">why accessibility should be the foundation of your website design</a>.</p>
      
      <h2>Practical Implementation</h2>
      <p>Achieving accessibility requires a systematic approach:</p>
      <ol>
        <li>Conduct an accessibility audit of your current site</li>
        <li>Develop a remediation plan with clear priorities</li>
        <li>Train content creators in accessibility principles</li>
        <li>Test with real users who have disabilities</li>
        <li>Publish an accessibility statement</li>
      </ol>
      
      <h2>Technology Solutions</h2>
      <p>Modern frameworks and tools can help streamline accessibility implementation:</p>
      <ul>
        <li>ARIA landmarks and attributes</li>
        <li>Semantic HTML5 elements</li>
        <li>Automated testing tools like Axe or WAVE</li>
        <li>Accessible design systems and component libraries</li>
      </ul>
      
      <p>To understand how accessibility fits into broader digital strategy trends, explore our guide on <a href="/blog/digital-strategy-public-sector-2025-trends">digital strategy for the public sector in 2025</a>.</p>
    `,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1176&auto=format&fit=crop",
    date: "2025-03-10",
    formattedDate: "March 10, 2025",
    author: "Adam Huckerby",
    categories: ["Public Sector", "Accessibility", "Web Design", "Compliance"]
  }
];
