
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTestimonials, Testimonial } from '@/services/wordpress-api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TestimonialsSection = () => {
  const { toast } = useToast();
  
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    retry: 1,
    onSettled: (data, error) => {
      if (error) {
        toast({
          title: "Information",
          description: "Using demo testimonials while connecting to WordPress.",
          duration: 5000,
        });
      }
    }
  });

  return (
    <section id="testimonials" className="py-20 bg-robin-cream relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-robin-dark mb-4">Client Success Stories</h2>
          <p className="text-xl text-robin-dark/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Robin Digital.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-robin-orange"></div>
          </div>
        )}

        {error && !testimonials && (
          <div className="text-center text-red-500">
            <p>Failed to load testimonials. Please try again later.</p>
          </div>
        )}

        {testimonials && testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-robin-orange/10 flex items-center justify-center mr-4">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="text-lg font-bold text-robin-orange">
                          {testimonial.author.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">{testimonial.author}</CardTitle>
                      <CardDescription>{testimonial.role}, {testimonial.organization}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div 
                    className="text-robin-dark/80 italic"
                    dangerouslySetInnerHTML={{ __html: testimonial.content }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {testimonials && testimonials.length === 0 && (
          <div className="text-center text-robin-dark/70 py-8">
            <p>No testimonials found. Please add testimonials in the WordPress admin.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
