
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogFeatured from '@/components/blog/BlogFeatured';
import BlogGrid from '@/components/blog/BlogGrid';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Robin Digital";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-robin-dark">Our Blog & Case Studies</h1>
            <p className="text-lg md:text-xl text-robin-dark/70 max-w-3xl mx-auto">
              Insights, expertise and success stories from our work with charities, businesses and public sector organisations.
            </p>
          </div>
          
          <BlogFeatured />
          
          <div className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-robin-dark">Latest Articles</h2>
            <BlogGrid />
          </div>
          
          <div className="my-16 bg-white rounded-xl p-8 shadow-md border-2 border-robin-orange/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-robin-dark">Need a Digital Solution?</h2>
                <p className="text-robin-dark/70">Let's discuss how we can help your organisation succeed online.</p>
              </div>
              <Button asChild className="bg-robin-orange hover:bg-robin-orange/90 text-white px-6 py-3 rounded-md">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          
          <div className="my-16">
            <Card className="bg-white/50 border-robin-orange/10">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-robin-dark">Blog Categories</h2>
                <div className="flex flex-wrap gap-3">
                  {['Digital Strategy', 'Web Development', 'UX/UI Design', 'Accessibility', 'Charity Sector', 'Education', 'Public Sector', 'Case Studies'].map((category) => (
                    <div key={category} className="bg-white px-4 py-2 rounded-md shadow-sm border border-robin-orange/10 hover:bg-robin-orange/5 transition-colors cursor-pointer">
                      {category}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
