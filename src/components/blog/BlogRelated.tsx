
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';

interface BlogRelatedProps {
  currentPostId: number;
  categories: string[];
}

const BlogRelated = ({ currentPostId, categories }: BlogRelatedProps) => {
  // Find related posts based on shared categories, excluding the current post
  const relatedPosts = mockBlogPosts
    .filter(post => 
      post.id !== currentPostId && 
      post.categories.some(category => categories.includes(category))
    )
    .slice(0, 3); // Get up to 3 related posts
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.length > 0 ? (
        relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden border border-robin-orange/10 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link to={`/blog/${post.slug}`} className="block h-40 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>
            
            <CardContent className="p-5">
              <div className="flex items-center mb-2 text-xs text-robin-dark/60">
                <Calendar size={12} className="mr-1" />
                <time dateTime={post.date}>{post.formattedDate}</time>
              </div>
              
              <h3 className="text-lg font-bold mb-2 line-clamp-2 text-robin-dark hover:text-robin-orange transition-colors">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-robin-dark/70 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="col-span-3 text-center py-8 text-robin-dark/70">
          No related articles found.
        </div>
      )}
    </div>
  );
};

export default BlogRelated;
