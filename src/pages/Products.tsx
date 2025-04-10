
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDetailsDrawer from '@/components/products/ProductDetailsDrawer';
import ProductPageHeader from '@/components/products/ProductPageHeader';
import ProductsGrid from '@/components/products/ProductsGrid';
import ContactCTA from '@/components/products/ContactCTA';
import { useScrollToContact } from '@/components/products/useScrollToContact';
import { productsData } from '@/components/products/productData';
import { ProductType } from '@/components/products/productTypes';
import { LucideIcon } from 'lucide-react';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    fullDescription: string;
    icon: LucideIcon;
  } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { handleContactClick } = useScrollToContact();

  useEffect(() => {
    document.title = "Robin Digital | Digital Products";
    window.scrollTo(0, 0);
  }, []);

  const handleShowDetails = (product: ProductType) => {
    setSelectedProduct({
      title: product.title,
      fullDescription: product.fullDescription,
      icon: product.icon
    });
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <ProductPageHeader />
        
        <section className="py-16 bg-robin-cream">
          <div className="container mx-auto px-4 md:px-6">
            <ProductsGrid 
              products={productsData} 
              onShowDetails={handleShowDetails} 
            />
            
            <ContactCTA onContactClick={handleContactClick} />
          </div>
        </section>
      </main>
      
      <ProductDetailsDrawer 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
