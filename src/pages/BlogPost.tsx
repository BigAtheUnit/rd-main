
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { mockBlogPosts } from '@/services/mock-data/blog-posts';
import BlogRelated from '@/components/blog/BlogRelated';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = mockBlogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Robin Digital Blog`;
    } else {
      document.title = "Blog Post Not Found | Robin Digital";
    }
    window.scrollTo(0, 0);
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="pt-32 pb-16 flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">Blog Post Not Found</h1>
            <p className="text-lg mb-8 text-robin-dark/70">Sorry, the blog post you're looking for doesn't exist.</p>
            <Button asChild variant="default" className="bg-robin-orange hover:bg-robin-orange/90">
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button asChild variant="outline" size="sm" className="mb-6">
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Blog
                </Link>
              </Button>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-robin-dark">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-robin-dark/60">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <time dateTime={post.date}>{post.formattedDate}</time>
                </div>
              </div>
            </div>
            
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none mb-10 text-robin-dark/90">
              {/* This would be the rich content of the blog post */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            <Separator className="my-8" />
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-robin-dark">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.categories.map((category) => (
                  <div key={category} className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm border border-robin-orange/10">
                    <Tag size={14} className="mr-2 text-robin-orange" />
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-robin-dark">Related Articles</h2>
            <BlogRelated currentPostId={post.id} categories={post.categories} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
