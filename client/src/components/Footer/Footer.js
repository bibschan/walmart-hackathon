import './Footer.scss';
import React from 'react';
import Home from '../../assets/Home.svg';
import User from '../../assets/user.svg';
import Cart from '../../assets/shopcart.svg';

export default function Footer() {
     
    return (
    <div className="footer">
    <button className = 'footer__button'><img src = {Home} alt = 'home icon' className = 'footer__icon'/></button>
    <button className = 'footer__button'><img src = {Cart} alt = 'cart icon' className = 'footer__icon'/></button>
    <button className = 'footer__button'><img src = {User} alt = 'user icon' className = 'footer__icon'/></button>
    </div>
    )
}
