import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { useEffect } from "react"
import {url} from "./mockData"
import Shimmer from "./shimmer"
import TopCard from "./topresto"
import ItemApi from "./item"
import MenuCard from "./menu"
import { Link } from "react-router-dom"


const Flexbox=(props)=>{
    return <div id="box" className="box">
    <img src={url+props.data.info.cloudinaryImageId} className="food-img"></img>
        <div className="details">
            <h4 className="hotel">{props.data.info.name}</h4>
            <h4 className="rating"><span><i className="bi bi-star-fill"></i></span>{props.data.info.avgRating} <span>{props.data.info.sla.slaString}</span></h4>
            <p className="place">{props.data.info.cuisines}</p>
            <p className="location">{props.data.info.locality}</p>
        </div>
</div>}

const Body=()=>{
    const [resto,setresto]=useState([])
    const [search,setsearch]=useState("")
    async function Swiggy(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const finaldata=await data.json()
        console.log(finaldata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setresto(finaldata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
       }
       useEffect(()=>{
          Swiggy()
       },[])

    if(resto.length==0){
        return <Shimmer/>
    }
    else{
    return <div className="body">
        <div className="filter-container">
            <button onClick={()=>{
                const abovefour=resto.filter((x)=>{
                   return x.info.avgRating>4.3
                }) 
               setresto(abovefour)  
            }} className="filter-btn">Rating 4.3+</button>
            <button className="filter-btn">Rs. 300-Rs. 600</button>

            <button className="filter-btn">Less than Rs. 300</button> 



            <div className="search">
                 <input type="text" placeholder="Search" value={search} onChange={(z)=>{
                    setsearch(z.target.value)
                 }}></input>
                <button className="Search-btn" onClick={()=>{
                    const filters=resto.filter((x)=>{
                          return x.info.name.toLowerCase().includes(search.toLowerCase())
                    })
                    setresto(filters)
                }}>Search</button>
            </div>
        </div>

        
        {
            resto.map((x)=>{
            
            return <Link to={"/menu"} className="link-menu"> <Flexbox data={x} key={x.info.id}/>
        </Link>
        })
      }
       
      
    </div>
    }
}

const Mainbody=()=>{

    return <div className="mainbody">
        <h1 className="itemheading">What's on your mind?</h1>
           <ItemApi/>
           <TopCard/>

           <h1>Restaurants with online food delivery in Bangalore</h1>
        
        <Body/>
    </div>
}

export default Mainbody;