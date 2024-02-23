import React from "react";
import { ReactDOM } from "react";



const MenuBody=()=>{
    return <div className="Main-menu">
        <div className="menu-box-1">
            <h1 className="g-box"><span className="g-dot"></span></h1>
            <h3 className="menu">All American Veg Cheese Burger</h3>
            <p className="cost">$ 299</p>
            <p>Our delicious mix veggie patty with crunchy lettuce cheese chipotle mayo in a toasted burger bun serving size: 320 Gms energy: 837 K Cal.</p>
        </div>
        <div className="menu-box-2">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f4e5e074b24951d468817a718c60cdb5" className="menu-img"></img>
            <button className="add-btn">ADD+</button>
        </div>
    </div>
}


const MenuCard=()=>{
    return <div>
        <MenuBody/>
        <MenuBody/>
        <MenuBody/>
        <MenuBody/>
        <MenuBody/>
        <MenuBody/>
        <MenuBody/>

    </div>
}

export default MenuCard;