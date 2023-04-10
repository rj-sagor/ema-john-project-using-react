import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
       const StorCart=getShoppingCart()
       let saveCart=[]
    //    step -1  find the id
    for(const id in StorCart){
        // step-2 find the product by using id
        const addProduct=products.find(product => product.id ===id)
        // console.log(SavedProduct)
        // step-3 get quantity in products
       if(addProduct){
        const quantity=StorCart[id];
        addProduct.quantity=quantity
        saveCart.push(addProduct)
       }
       
    }
setCart(saveCart)

    },[products])


    const cartHandeler = (product) => {
       const NewCart=[...cart,product]
       setCart(NewCart);
       addToDb(product.id)
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
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;