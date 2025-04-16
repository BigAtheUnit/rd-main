
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';
import { Badge } from '@/components/ui/badge';

const BlogFeatured = () => {
  const featuredPost = mockBlogPosts[0]; // Using the first post as featured
  
  return (
    <div className="mb-12">
      <Card className="overflow-hidden border-2 border-robin-orange/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 order-2 md:order-1 p-6 md:p-8 flex flex-col">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-robin-dark/60">
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <time dateTime={featuredPost.date}>{featuredPost.formattedDate}</time>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-robin-dark">
              <Link to={`/blog/${featuredPost.slug}`} className="hover:text-robin-orange transition-colors">
                {featuredPost.title}
              </Link>
            </h3>
            
            <p className="text-robin-dark/70 mb-6 line-clamp-3 md:line-clamp-4">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6 mt-auto">
              {featuredPost.categories.map((category) => (
                <Badge key={category} variant="secondary" className="bg-robin-cream text-robin-dark/80 hover:bg-robin-cream/80">
                  {category}
                </Badge>
              ))}
            </div>
            
            <Button asChild variant="default" className="mt-auto bg-robin-orange hover:bg-robin-orange/90 w-fit group">
              <Link to={`/blog/${featuredPost.slug}`} className="flex items-center">
                Read Full Article
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2 h-64 md:h-auto">
            <Link to={`/blog/${featuredPost.slug}`} className="block h-full">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogFeatured;
