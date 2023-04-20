import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Button from './Button';



function ProductCard({ title, description, imageURL, price, rating, discountPercentage, category }) {
    return (
        <div className="product-card">
            <AiOutlineHeart className='likebtn' />
            {/* <AiFillHeart color="red" className='linkbtn'/> */}
            <img src={imageURL} className="product-img" />
            <p className='product-title'>{title}</p>
            <p className='product-description'>{description}</p>
            <div className="flex">
                <p className='product-price'>&#8377; {price}</p>
                <p className='product-rating'>Ratings: {rating}</p>
            </div>
            <div className="flex2">
                <p className='product-category'>{category}</p>
                <p className='product-discountPercentage'>{discountPercentage}%</p>
            </div>
            <Button />
        </div>
    );
}


export default ProductCard;