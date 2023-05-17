import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import { ThemeContext, CartContext, ProductsData } from "../Contexts";

function Root() {

    const [allProducts, setAllProducts] = useState([]);

    const getData = () => {
        fetch("https://dummyjson.com/products")
            .then((data) =>
                data.json().then((jsonData) => {
                    setAllProducts(jsonData.products);
                })
            )
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getData();
    }, []);

    // Dark Light mode context
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Products in cart
    const [cartItems, setCartItems] = useState([]);

    // Add a product to cart
    const addToCart = (newProduct) => {
        // console.log();
        setCartItems((existingProducts) => [...existingProducts, newProduct]);
    };

    // Remove the product from cart
    const removeFromCart = (productId) => {
        console.log("prodID", productId);
        const newArr = cartItems.filter((item) => item.id != productId);
        console.log(newArr);
        // 👇🏻 returns new array without the product in parameter of this function
        // const arr = [...cartItems.slice(0, productIndex), ...cartItems.slice(productIndex + 1)];
        setCartItems(newArr);
    };

    const searchQuery = "";

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme, searchQuery }}>
                <ProductsData.Provider value={{ allProducts }}>
                    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
                        <Header cartItemCount={cartItems.length} />
                        <Outlet />
                    </CartContext.Provider>
                </ProductsData.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default Root