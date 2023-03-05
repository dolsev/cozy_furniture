import React, {useState} from 'react';
import './Product.scss'
import {AddShoppingCartOutlined} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {BalanceOutlined} from "@mui/icons-material";
import dataTable from "../../data";
import {useParams} from "react-router-dom";
const Product = () => {
    const { id } = useParams();
    const selectedItem = dataTable.find(item => item.id === parseInt(id));

    const [selectedImg,setSelectedImg] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const images= [selectedItem.img,
        selectedItem.img2
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
                <h1>{selectedItem.title}</h1>
                <span className='price'>{selectedItem.price} ₽</span>
                <p>Trully amazing furniture.</p>
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

