import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'
function Cart() {
    const data=[
        {id:1,
            img:'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            title:'Chair Comfy',
            desc:'Amazing chair made of 100% natural plastic and arctic wood. Comes with instruction for usage',
            isNew:true,
            oldPrice:3500,
            price:2499
        },
        {id:2,
            img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title:'Sofa Sage',
            desc:'Beautiful sofa for your cat to lay down and to tear it down',
            isNew:true,
            oldPrice:14000,
            price:9999
        }
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item=>{
                return <div className='item' key={item.id}>
                    <img src={item.img} alt=''/>
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,item.desc.indexOf('.')===-1?100:item.desc.indexOf('.'))}</p>
                        <div className='price'>1 x {item.price} ₽</div>
                    </div>
                    <DeleteOutlineIcon class='delete'/>
                </div>
            })}
            <div className='total'><span>SUBTOTAL</span><span>2999 ₽</span></div>
            <button>PROCEED TO CHECKOUT</button>
            <br/>
            <span className='reset'>Reset Cart</span>
        </div>
    );
}

export default Cart;