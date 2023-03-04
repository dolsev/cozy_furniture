import React, {useEffect,useState} from 'react';
import './FeaturedProducts.scss'
import Card from "../Card/Card";
import dataTable from "../../data";
function FeaturedProducts({type}) {

    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = ()=>{
            setData(dataTable)
        }
        fetchData()
        },[])
    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>If you're on the lookout for the latest and greatest furniture trends,
                    you're in luck! Please find below  a dedicated section that showcases
                    the hottest and most popular furniture products.</p>
            </div>
            <div className='bottom'>
                {data.map(item=>{
                    return item.type===type?<Card item={item} key={item.id}/>:null
                })}
            </div>
        </div>
    );
}

export default FeaturedProducts;