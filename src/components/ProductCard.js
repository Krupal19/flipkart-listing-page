import React from 'react';
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import Button from './Button';

function ProductCard({ title, description, imageURL, price, rating, stock, discount }) {
    return (
        <div className="product-card">
            <AiOutlineHeart className='like-button' />
            {/* <AiFillHeart color="red" className='linkbtn'/> */}
            <img src={imageURL} className="product-img" alt={title} />
            <p className='product-title'>{title}</p>
            <p className='product-description'>{description}</p>
            <div className="flex">
                <p className="product-price">&#8377;{price}</p>
                <p className="product-rating">
                    <AiFillStar />
                    {rating}
                </p>
            </div>
            <div className="flex">
                <p className="product-stock">Stock: {stock}</p>
                <p className="product-discount">{discount}%</p>
            </div>
            <Button text="Add to Cart" type="add-to-card" />
        </div>
    );
}


export default ProductCard;