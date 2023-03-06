import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import './Navbar.scss'
import Cart from "../../Cart/Cart";
import {useSelector} from "react-redux";
const Navbar = () => {
    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)

    return (
        <div className='navbar'>
            <div className='wrapper'>
            <div className='left'>
                <div className='item disabled-link'>
                    <img className='image' src='https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg' alt=''/>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item disabled-link'>
                    <span>RUB</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/1'>Furniture</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/2'>Sets</Link>
                </div>
            </div>
            <div className='center'>
                        <Link className='link' to='/'>COZY FURNITURE</Link>
                    </div>
            <div className='right'>
                        <div className='item disabled-link'>
                            <Link className='link' to='/'>Homepage</Link>
                        </div>
                        <div className='item disabled-link'>
                            <Link className='link' to='/'>About</Link>
                        </div>
                        <div className='item disabled-link'>
                            <Link className='link' to='/'>Contact</Link>
                        </div>
                        <div className='item disabled-link'>
                            <Link className='link' to='/'>Stores</Link>
                        </div>
                            <div className='icons'>
                                <SearchIcon  className='icon disabled-link'/>
                                <PersonOutlineIcon className='icon disabled-link'/>
                                <FavoriteBorderOutlinedIcon className='icon disabled-link'/>
                              <div className='cartIcon' onClick={()=>setOpen(!open)}>
                                  <ShoppingCartOutlinedIcon className='icon'/><span>{products.length}</span>
                            </div>
                            </div>
                    </div>
            </div>
            {open&&<Cart/>}
        </div>
    );
};

export default Navbar;