import React from 'react';
import './Card.scss'
import {Link} from "react-router-dom";
function Card({item}) {
    return (
        <div className='card'>
            <Link className='link' to={`/product/${item.id}`}>
            <div className='image'>
                {item.isNew&&<span>New Collection</span>}
                <img src={item.img} alt='' className='mainImg'/>
            </div>
            <h2>{item.title}</h2>
            <div className='prices'>
                <h3>{item.oldPrice} ₽</h3>
                <h3>{item.price} ₽</h3>
            </div>
            </Link>
        </div>
    );
}
export default Card;