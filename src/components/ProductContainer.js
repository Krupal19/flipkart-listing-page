import React, { useEffect, useState } from "react";
// import allProducts from "../data";
import ProductCard from "./ProductCard";

function ProductContainer({ searchTitle }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // let productList;
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((jsondata) => {
        console.log(jsondata);
        setAllProducts(jsondata.products);
      })
      .catch((error) => console.error(error));
  };

  let productList = allProducts.filter((val) => {
    if (searchTitle) {
      return val.title.toLowerCase().includes(searchTitle.toLowerCase());
    }
    return val;
  });

  return (
    <section className="product-container">
      {productList &&
        productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
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
