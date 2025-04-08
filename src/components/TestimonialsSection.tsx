
import React from 'react';
import { Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  organization: string;
};

const TestimonialCard = ({ quote, author, position, organization }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-robin-dark/5 h-full flex flex-col">
      <div className="text-robin-orange mb-4">
        <Quote size={32} />
      </div>
      <blockquote className="text-robin-dark/80 italic flex-grow">"{quote}"</blockquote>
      <div className="mt-6 pt-6 border-t border-robin-dark/10">
        <p className="font-semibold text-robin-dark">{author}</p>
        <p className="text-robin-dark/70 text-sm">{position}, {organization}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Robin Digital transformed our outdated website into a powerful fundraising tool. Donations increased by 40% in the first three months after launch.",
      author: "Sarah Johnson",
      position: "Director of Digital",
      organization: "Global Hope Charity"
    },
    {
      quote: "Their team understood our educational needs perfectly. The learning platform they developed has revolutionized how we deliver online courses.",
      author: "Professor Thomas Chen",
      position: "Dean of Digital Learning",
      organization: "Metropolitan University"
    },
    {
      quote: "The custom CRM they built for our organization has streamlined operations and improved our service delivery to vulnerable communities.",
      author: "Mark Williams",
      position: "Operations Director",
      organization: "City Council Services"
    },
    {
      quote: "We needed a partner who could innovate while understanding our business constraints. Robin Digital delivered a solution that exceeded our expectations.",
      author: "Rebecca Taylor",
      position: "Chief Technology Officer",
      organization: "Nexus Innovations"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-robin-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Client Success Stories</h2>
          <p className="text-lg text-robin-dark/70">
            Don't just take our word for it. Here's what our clients have to say about working with Robin Digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              organization={testimonial.organization}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
