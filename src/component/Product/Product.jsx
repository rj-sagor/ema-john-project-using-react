import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props.product)
    const {img,name,price,seller,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h3 className='product-name'>{name}</h3>
            <p>Price:{price}</p>
            <p>Manufacture: {seller}</p>
            <p>Ratting: {ratings}</p>
           </div>
           <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;