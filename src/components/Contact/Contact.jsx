import React from 'react';
import './Contact.scss'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'

function Contact() {
    return (
        <div className='contact'>
        <div className='wrapper'>
            <span>BE IN TOUCH WITH US:</span>
            <div className='mail'>
                <input type='text' placeholder='Enter your e-mail'/>
                <button>JOIN US</button>
            </div>
            <div className='icons'>
                <InstagramIcon/>
                <GoogleIcon/>
                <img className='image' src='https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/VK-Whiteicon-logo-vector.png' alt=''/>
            </div>
        </div>
        </div>
    );
}

export default Contact;