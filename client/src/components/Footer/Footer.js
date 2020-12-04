import './Footer.scss';
import React from 'react';
import Home from '../../assets/Home.png';
import Profile from '../../assets/Profile.png';
import Cart from '../../assets/Cart.png';

export default function Footer() {
     
    return (
    <div className="footer">
    <img src = {Home} className = 'footer__icon'/>
    <img src = {Cart} className = 'footer__icon'/>
    <img src = {Profile} className = 'footer__icon'/>
    </div>
    )
}
