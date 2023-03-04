import React, {useState} from 'react';
import './Products.scss'
import {useParams} from "react-router-dom";
import List from "../../components/List/List";
import dataTable from "../../data";
const Products = () => {
    const catId=parseInt(useParams().id)
    const[maxPrice,setMaxPrice] = useState(130000)
    const [selectedSubCats, setSelectedSubcats] = useState(['table-set','kitchen-set','sofas','bed','chair','table'])
    const handleChange = (e)=>{
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedSubcats(isChecked?[...selectedSubCats,value]:selectedSubCats.filter(item=>item!==value))
    }

    return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                        <input type='checkbox' defaultChecked='checked' id='table' value={'table'} onChange={handleChange}/>
                        <label htmlFor='table'>Tables</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' defaultChecked='checked' id='chair' value={'chair'} onChange={handleChange}/>
                        <label htmlFor='chair'>Chairs</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' defaultChecked='checked' id='bed' value={'bed'} onChange={handleChange}/>
                        <label htmlFor='bed'>Beds</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' defaultChecked='checked' id='sofas' value={'sofas'} onChange={handleChange}/>
                        <label htmlFor='sofas'>Sofas</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' defaultChecked='checked' id='kitchen-set' value={'kitchen-set'} onChange={handleChange}/>
                        <label htmlFor='kitchen-set'>Kitchen sets</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' defaultChecked='checked' id='table-set' value={'table-set'} onChange={handleChange}/>
                        <label htmlFor='table-set'>Table sets</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Filter by price</h2>
                    <div className='inputItem'>
                        <span>0</span>
                        <input type='range' min={0} max={130000}
                               onChange={(e)=>setMaxPrice(parseInt(e.target.value))}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>

            </div>
            <div className='right'>
                <img className='catImg' src='https://images.unsplash.com/photo-1614061340739-8c58cc239aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''/>
            <List data={dataTable} catId={catId} maxPrice={maxPrice} selectedSubCats={selectedSubCats}/>
            </div>
        </div>
    );
};

export default Products;