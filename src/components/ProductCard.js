import React, { useContext } from 'react';
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ThemeContext, CartContext } from "../Contexts";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";

function ProductCard({ title, description, imageURL, price, rating, stock, discount, id }) {
    const { theme } = useContext(ThemeContext);

    const addButton = (
        <AddToCartButton
            productDetails={{ id, title, description, imageURL, price, rating, stock, discount }}
        />
    );
    const removeButton = <RemoveFromCartButton productId={id} />;

    const { cartItems } = useContext(CartContext);

    let actionButton = addButton;

    cartItems.forEach((item) => {
        if (id === item.id) {
            actionButton = removeButton;
        }
    });

    return (
        <div className={`product-card ${theme}`}>
            <AiOutlineHeart className='like-button' />
            <Link to={`/products/${id}`}><img src={imageURL} className="product-img" alt={title} /></Link>
            <Link to={`/products/${id}`} className='product-link'><p className='product-title'>{title}</p></Link>
            <p className='product-description'>{description}</p>
            <div className="flex">
                <p className="product-price">&#36;{price}</p>
                <p className="product-rating">
                    <AiFillStar />
                    {rating}
                </p>
            </div>
            <div className="flex">
                <p className="product-stock">Stock: {stock}</p>
                <p className="product-discount">{discount}%</p>
            </div>
            {actionButton}
        </div>
    );
}


export default ProductCard;