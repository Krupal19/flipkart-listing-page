import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Product() {
    var urlParams = useParams();

    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`https://dummyjson.com/products/${urlParams.productID}`)
            .then((data) => data.json())
            .then((jsondata) => {
                console.log(jsondata);
                setOneProduct(jsondata);
            })
            .catch((error) => console.error(error));
    };

    return (
        <section className='container'>
            <div className='product-grid'>
                <img src={oneProduct.thumbnail} alt={oneProduct.title} />
                <div className='product-details'>
                    <h1 className='product-page-title'>{oneProduct.title}</h1>
                    <p className='product-raing'>
                        {oneProduct.rating}
                    </p>
                </div>
                <p className='product-page-desc'>{oneProduct.description}</p>
                <div className='flex' data-justify="left">
                    <p className='product-page-price'>{oneProduct.price}</p>
                </div>

                <div className='flex' style={{ marginBlock: "2em" }}>
                    <button text="Add to cart" type="cart-to-cart"> Buy now</button>
                    {/* <Button text="Add to cart" type="cart-to-cart" /> */}
                    {/* <Button text="Buy Now" type="buy-now" /> */}
                </div>
            </div>
        </section>
    )
}

export default Product