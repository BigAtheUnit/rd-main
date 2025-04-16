
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';
import { Badge } from '@/components/ui/badge';

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
          <Card key={post.id} className="overflow-hidden border border-robin-orange/10 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <Link to={`/blog/${post.slug}`} className="block h-40 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>
            
            <CardContent className="p-5 flex flex-col flex-grow">
              <div className="flex items-center mb-2 text-xs text-robin-dark/60">
                <Calendar size={12} className="mr-1" />
                <time dateTime={post.date}>{post.formattedDate}</time>
              </div>
              
              <h3 className="text-lg font-bold mb-2 line-clamp-2 text-robin-dark hover:text-robin-orange transition-colors">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-robin-dark/70 text-sm line-clamp-2 mb-3 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.slice(0, 1).map((category) => (
                    <Badge key={category} variant="outline" className="bg-robin-cream/50 text-robin-dark/80 hover:bg-robin-cream">
                      {category}
                    </Badge>
                  ))}
                  {post.categories.length > 1 && (
                    <Badge variant="outline" className="bg-robin-cream/50 text-robin-dark/80 hover:bg-robin-cream">
                      +{post.categories.length - 1}
                    </Badge>
                  )}
                </div>
                
                <Link to={`/blog/${post.slug}`} className="text-robin-orange font-medium hover:text-robin-orange/80 transition-colors inline-flex items-center group text-sm">
                  Read article
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="col-span-3 text-center py-8 text-robin-dark/70 bg-white rounded-lg shadow-sm p-6">
          <p className="mb-4">No related articles found.</p>
          <Link to="/blog" className="text-robin-orange hover:text-robin-orange/80 transition-colors inline-flex items-center group">
            Browse all articles
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogRelated;
