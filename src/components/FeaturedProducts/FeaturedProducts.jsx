import React from 'react';
import './FeaturedProducts.scss'
import Card from "../Card/Card";
function FeaturedProducts({type}) {
    const data=[
        {id:1,
            img:'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            title:'Chair Comfy',
            isNew:true,
            oldPrice:3500,
            price:2499
        },
        {id:2,
            img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title:'Sofa Sage',
            isNew:true,
            oldPrice:14000,
            price:9999
        },
        {id:3,
            img:'https://images.unsplash.com/photo-1597374480673-089471d847b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            title:'Table set Woody',
            isNew:false,
            oldPrice:11400,
            price:6999
        },
        {id:4,
            img:'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            title:'Kitchen set Black River',
            isNew:false,
            oldPrice:140000,
            price:111999
        },

    ]
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
                    return <Card item={item} key={item.id}/>
                })}
            </div>
        </div>
    );
}

export default FeaturedProducts;