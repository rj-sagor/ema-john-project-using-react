import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const cartHandeler = (product) => {
       const NewCart=[...cart,product]
       setCart(NewCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        cartHandeler={cartHandeler}></Product>)
                }
            </div>
            <div className='order-container'>
                <h2>Order section</h2>
                <p>Cart Item: {cart.length} </p>
            </div>

        </div>
    );
};

export default Shop;