import React, {useEffect, useState} from 'react';
import './List.scss'
import Card from "../Card/Card";
import dataTable from "../../data";

function List({selectedSubCats, maxPrice}) {

const [data, setFilteredData] = useState([])
useEffect(
    ()=>{
        const fetchData = ()=> setFilteredData(dataTable)
        fetchData()
    },[selectedSubCats, maxPrice]
)
    return (
        <div className='list'>
            {data?.map(item=>{
                return selectedSubCats.includes(item.subcategory)&&item.price<maxPrice?<Card item={item} key={item.id}/>:null
            })}
        </div>
    );
}

export default List;