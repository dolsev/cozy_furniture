import React, {useState} from 'react';
import './Product.scss'
import {AddShoppingCartOutlined} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {BalanceOutlined} from "@mui/icons-material";
const Product = () => {
    const [selectedImg,setSelectedImg] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const images = [
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        'https://images.unsplash.com/photo-1555432783-a09e893d4a68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ]
    return (
<div className='product'>
    <div className='left'>
    <div className='images'>
        <img src={images[0]} alt='' onClick={()=>setSelectedImg(0)}/>
        <img src={images[1]} alt='' onClick={()=>setSelectedImg(1)}/>
    </div>
        <div className='mainImg'>
            <img src={images[selectedImg]} alt=''/>
        </div>
    </div>
    <div className='right'>
        <h1>Chair Comfy</h1>
        <span className='price'>2499 ₽</span>
        <p>This chair is amazing.This chair is amazing.This chair is amazing.This chair is amazing.</p>
        <div className='quantity'>
            <button onClick={()=>setQuantity(prevState=>prevState===1?1:prevState-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prevState=>prevState+1)}>+</button>
        </div>
        <button className='add'><AddShoppingCartOutlined/>ADD TO CART</button>
        <div className='link'>
            <div className='item'><FavoriteBorderOutlinedIcon/>ADD TO WISHLIST</div>
            <div className='item'><BalanceOutlined/>ADD TO COMPARE</div>
        </div>
        <div className='info'>
            <span>Vendor: IP Platov</span>
            <span>Product Type: Chair</span>
            <span>Tag:Chair, black</span>
        </div>
        <hr/>
        <div className='info'>
            <span>DESCRIPTION</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
        </div>
    </div>
</div>
    );
};

export default Product;