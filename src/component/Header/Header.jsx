import React from 'react';
import logo from "../../images/Logo.svg";
import "./Header.css"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Order</a>
                <a href="/about">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/contact">Login</a>
            </div>
        </nav>
    );
};

export default Header;