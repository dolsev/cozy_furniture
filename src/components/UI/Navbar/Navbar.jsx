import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img className='image' src='/img/Flag_of_Russia.svg.png' alt=''/>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                    <span>RUB</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/1'>Outdoor</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/2'>Indoor</Link>
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
                            <div className='icons'><SearchIcon/>
                       <PersonOutlineIcon/>
                  <FavoriteBorderOutlinedIcon/>
                        <div className='cartIcon'>
                      <ShoppingCartOutlinedIcon/><span>0</span>
                        </div>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;