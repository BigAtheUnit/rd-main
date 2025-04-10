
import React from 'react';
import ProductCard from './ProductCard';
import { ProductType } from './productTypes';

type ProductsGridProps = {
  products: ProductType[];
  onShowDetails: (product: ProductType) => void;
};

const ProductsGrid = ({ products, onShowDetails }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          title={product.title}
          description={product.description}
          fullDescription={product.fullDescription}
          icon={product.icon}
          isNew={product.isNew}
          isFeatured={product.isFeatured}
          imageSrc={product.imageSrc}
          onShowDetails={() => onShowDetails(product)}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
