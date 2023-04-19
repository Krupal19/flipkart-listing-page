import React from 'react'
import allProducts from '../data';
import ProductCard from './ProductCard';

function ProductContainer() {
    return (
        <section className="product-container">
          {allProducts.map((product) => (
            <ProductCard
              title={product.title}
              description={product.description}
              imageURL={product.images[0]}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </section>
      );
}

export default ProductContainer;