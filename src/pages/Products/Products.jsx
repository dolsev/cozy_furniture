import React,{useState} from 'react';
import './Products.scss'
import {useParams} from "react-router-dom";
import List from "../../components/List/List";
const Products = () => {
    const catId=parseInt(useParams().id)
    const[maxPrice,setMaxPrice] = useState(300000)
    const [sort,setSort] = useState(null)

    return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                        <input type='checkbox' id='1' value={1}/>
                        <label htmlFor='1'>Tables</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='1' value={2}/>
                        <label htmlFor='2'>Chairs</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='3' value={3}/>
                        <label htmlFor='3'>Beds</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='4' value={4}/>
                        <label htmlFor='4'>Sofas</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='5' value={5}/>
                        <label htmlFor='5'>Kitchen sets</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id='6' value={6}/>
                        <label htmlFor='6'>Table sets</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Filter by price</h2>
                    <div className='inputItem'>
                        <span>0</span>
                        <input type='range' min={0} max={300000}
                               onChange={(e)=>setMaxPrice(parseInt(e.target.value))}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort by</h2>
                    <div className='inputItem'>
                        <input type='radio' id='asc' value='asc' name='price'
                               onChange={()=>setSort('asc')}/>
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='inputItem'>
                        <input type='radio' id='desc' value='desc' name='price'
                               onChange={()=>setSort('desc')}/>

                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img className='catImg' src='https://images.unsplash.com/photo-1614061340739-8c58cc239aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''/>
            <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
};

export default Products;