import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeItem,resetCart} from "../../redux/cartReducer";

function Cart() {
    const products = useSelector(state=>state.cart.products)
    const totalPrice = ()=>{
        let total = 0
        products.forEach(item=>total+=item.quantity*item.price)
        return total.toFixed(2);
    }
    const dispatch = useDispatch()


    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item=>{
                return <div className='item' key={item.id}>
                    <img src={item.img} alt=''/>
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,item.desc.indexOf('.')===-1?100:item.desc.indexOf('.'))}</p>
                        <div className='price'>{item.quantity} x {item.price} ₽</div>
                    </div>
                    <DeleteOutlineIcon class='delete' onClick={()=>dispatch(removeItem(item.id))}/>
                </div>
            })}
            <div className='total'><span>SUBTOTAL</span><span>{totalPrice()} ₽</span></div>
            <button>PROCEED TO CHECKOUT</button>
            <br/>
            <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
        </div>
    );
}

export default Cart;