import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Topurl } from "./mockData";
import { ShimmerItemBody } from "./shimmer";


const Item=(props)=>{
    return <div>
          <div className="item-card">
               <img className="item-img" src={Topurl+props.data.imageId}></img>
        </div>
      </div>
}


const ItemApi=()=>{
    const [item,setItem]=useState([])
    async function ItemCard() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const finaldata = await data.json();
        console.log(finaldata.data.cards[0].card.card.gridElements.infoWithStyle.info);
        console.log(finaldata);
        setItem(finaldata.data.cards[0].card.card.gridElements.infoWithStyle.info)
      }
      useEffect(() => {
        ItemCard();
      }, []);

      if(item.length==0){
            return <ShimmerItemBody/>
      }
      else {
        return <div className="item-body">
        {
            item.map((x)=>{
            return <Item data={x} key={x.id}/>
            })
        }
        </div>
      }
      
}


export default ItemApi;