
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { mockBlogPosts } from '@/services/mock-data/blog-posts/index';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const BlogGrid = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockBlogPosts.map((post) => (
        <Card key={post.id} className="bg-white border-2 border-robin-orange/10 hover:border-robin-orange/30 transition-colors flex flex-col h-full">
          <Link to={`/blog/${post.slug}`}>
            <div className="overflow-hidden rounded-md">
              <AspectRatio ratio={16/9}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                  loading={isMobile ? "lazy" : "eager"}
                />
              </AspectRatio>
            </div>
            <CardContent className="p-6 flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-robin-dark line-clamp-2">{post.title}</h3>
              <p className="text-sm text-robin-dark/70 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center mt-4 text-xs text-robin-dark/60">
                <User size={14} className="mr-1" />
                {post.author}
                <span className="mx-2">•</span>
                <Calendar size={14} className="mr-1" />
                {post.formattedDate}
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default BlogGrid;
