
import React from 'react';
import { Quote, Star } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  role: string;
  organization: string;
  rating: number;
};

const TestimonialCard = ({ quote, role, organization, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-dark/5 hover:border-robin-orange/20 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="text-robin-orange">
          <Quote size={32} />
        </div>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <blockquote className="text-robin-dark/80 italic flex-grow">{quote}</blockquote>
      <div className="mt-6 pt-6 border-t border-robin-dark/10">
        <p className="text-robin-dark/70 text-sm">{role}</p>
        <p className="text-robin-dark/70 text-sm">{organization}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Robin Digital transformed our outdated website into a powerful fundraising tool. Donations increased by 40% in the first three months after launch.",
      role: "Director of Digital",
      organization: "Charity, London",
      rating: 5
    },
    {
      quote: "Their WordPress template was exactly what our school needed. Easy to customise and maintain, with excellent support when we needed help.",
      role: "Head of IT",
      organization: "Education, Scotland",
      rating: 5
    },
    {
      quote: "The custom CRM they built for our council has streamlined operations and improved our service delivery to vulnerable communities.",
      role: "Digital Transformation Manager",
      organization: "Public Sector, Midlands",
      rating: 5
    },
    {
      quote: "Using their AI integration services has transformed our business processes, reducing manual work by 65% and allowing us to focus on growth.",
      role: "Managing Director",
      organization: "Business, Ireland",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding py-20 bg-robin-cream/50">
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
              role={testimonial.role}
              organization={testimonial.organization}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
