import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    console.log(props.cart)
    const {cart}=props
    let Total=0
    let totalShipping=0
    for(const product of cart){
        // console.log(product)
        Total =Total+product.price
        totalShipping= totalShipping+product.shipping
    }
    const tax=(Total*7)/100;
    const GrandTotal=Total+totalShipping+tax
    return (
        <div className='cart'>
             <h2>Order section</h2>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: {Total} </p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${GrandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;