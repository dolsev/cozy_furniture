import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import './Navbar.scss'
import Cart from "../../Cart/Cart";
const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img className='image' src='https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg' alt=''/>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
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
                        <div className='item'>
                            <Link className='link' to='/'>Homepage</Link>
                        </div>
                        <div className='item'>
                            <Link className='link' to='/products/2'>About</Link>
                        </div>
                        <div className='item'>
                            <Link className='link' to='/products/2'>Contact</Link>
                        </div>
                        <div className='item'>
                            <Link className='link' to='/products/2'>Stores</Link>
                        </div>
                            <div className='icons'>
                                <SearchIcon  className='icon'/>
                                <PersonOutlineIcon className='icon'/>
                                <FavoriteBorderOutlinedIcon className='icon'/>
                              <div className='cartIcon' onClick={()=>setOpen(!open)}>
                                  <ShoppingCartOutlinedIcon className='icon'/><span>0</span>
                            </div>
                            </div>
                    </div>
            </div>
            {open&&<Cart/>}
        </div>
    );
};

export default Navbar;