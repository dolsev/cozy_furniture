import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Outdoor</span>
                <span>Indoor</span>
                <span>Kitchen</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>About section</span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>Contacts section</span>
            </div>
            <div className='item'></div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo'>Cozy Furniture</span>
                    <span className='copyright'>©2023 Vladislav Smirnov </span>
                </div>
                </div>
        </div>
    );
};

export default Footer;