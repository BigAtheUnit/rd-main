
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';

const BlogGrid = () => {
  // Skip the first post as it's used as featured
  const posts = mockBlogPosts.slice(1);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden border border-robin-orange/10 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-3 text-xs text-robin-dark/60">
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
            
            <p className="text-robin-dark/70 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.categories.slice(0, 2).map((category) => (
                <span key={category} className="bg-robin-cream px-2 py-0.5 rounded-full text-xs">
                  {category}
                </span>
              ))}
              {post.categories.length > 2 && (
                <span className="bg-robin-cream px-2 py-0.5 rounded-full text-xs">
                  +{post.categories.length - 2}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogGrid;
