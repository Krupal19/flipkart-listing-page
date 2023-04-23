import React from 'react'
import allProducts from '../data';
import ProductCard from './ProductCard';

function ProductContainer({ searchTitle }) {
  const productList = allProducts.filter((val) => {
    if (searchTitle) {
      // return val;
      return val.title.toLowerCase().includes(searchTitle.toLowerCase())
    }
    return val;
  })

  return (
    <section className="product-container">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          imageURL={product.images[0]}
          price={product.price}
          rating={product.rating}
          stock={product.stock}
          discount={product.discountPercentage}
        />
      ))}
    </section>
  );
}

export default ProductContainer;