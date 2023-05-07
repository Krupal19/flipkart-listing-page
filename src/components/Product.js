import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Product() {
    const urlParams = useParams()

    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // let productList;
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
            <div className=''></div>
            <div>{oneProduct.title}</div>
            <div>{oneProduct.id}</div>
            <img src={oneProduct.thumbnail} />
            <div>{oneProduct.description}</div>
            <div>{oneProduct.price}</div>
            <div>{oneProduct.rating}</div>
            <div>{oneProduct.discountPercentage}</div>
        </section>
    )
}

export default Product