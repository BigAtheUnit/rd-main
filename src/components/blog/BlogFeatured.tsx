import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { mockBlogPosts } from '@/services/mock-data/blog-posts/index';

const BlogFeatured = () => {
  const featuredPost = mockBlogPosts[0];

  if (!featuredPost) {
    return <p>No featured post available.</p>;
  }

  return (
    <Card className="bg-white/50 border-robin-orange/10">
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:order-2">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:order-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-robin-dark">{featuredPost.title}</h2>
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-robin-dark/60">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <time dateTime={featuredPost.date}>{featuredPost.formattedDate}</time>
              </div>
            </div>
            <p className="text-lg text-robin-dark/80 mb-6">{featuredPost.excerpt}</p>
            <Link to={`/blog/${featuredPost.slug}`}>
              <button className="bg-robin-orange hover:bg-robin-orange/90 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogFeatured;
