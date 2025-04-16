
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';
import { Badge } from '@/components/ui/badge';

const BlogGrid = () => {
  // Skip the first post as it's used as featured
  const posts = mockBlogPosts.slice(1);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden border border-robin-orange/10 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
          <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-robin-dark/60">
              <div className="flex items-center">
                <User size={12} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={12} className="mr-1" />
                <time dateTime={post.date}>{post.formattedDate}</time>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 line-clamp-2 text-robin-dark hover:text-robin-orange transition-colors">
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            
            <p className="text-robin-dark/70 mb-4 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="outline" className="bg-robin-cream/50 text-robin-dark/80 hover:bg-robin-cream">
                    {category}
                  </Badge>
                ))}
                {post.categories.length > 2 && (
                  <Badge variant="outline" className="bg-robin-cream/50 text-robin-dark/80 hover:bg-robin-cream">
                    +{post.categories.length - 2}
                  </Badge>
                )}
              </div>
              
              <Link to={`/blog/${post.slug}`} className="text-robin-orange font-medium hover:text-robin-orange/80 transition-colors inline-flex items-center group">
                Read article
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogGrid;
