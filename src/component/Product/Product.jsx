import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    // console.log(props.product)
    const {img,name,price,seller,ratings}=props.product
    const cartHandeler=props.cartHandeler;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h3 className='product-name'>{name}</h3>
            <p>Price:${price}</p>
            <p>Manufacture: {seller}</p>
            <p>Ratting: {ratings} stars</p>
           </div>
           <button className='btn-cart' onClick={()=>cartHandeler(props.product)}>
            Add to cart
           <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;