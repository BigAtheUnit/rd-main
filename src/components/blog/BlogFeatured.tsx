
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';

const BlogFeatured = () => {
  const featuredPost = mockBlogPosts[0]; // Using the first post as featured
  
  return (
    <div className="mb-12">
      <Card className="overflow-hidden border-2 border-robin-orange/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 order-2 md:order-1">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-robin-dark/60">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <time dateTime={featuredPost.date}>{featuredPost.formattedDate}</time>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-robin-dark hover:text-robin-orange transition-colors">
                <Link to={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h3>
              
              <p className="text-robin-dark/70 mb-6 line-clamp-3 md:line-clamp-4">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredPost.categories.map((category) => (
                  <span key={category} className="bg-robin-cream px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
              
              <Button asChild variant="outline" className="group">
                <Link to={`/blog/${featuredPost.slug}`} className="flex items-center">
                  Read Full Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2 h-64 md:h-auto overflow-hidden">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogFeatured;
