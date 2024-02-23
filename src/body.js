import React from "react"
import Navbar from "./navbar"
import { Outlet} from "react-router-dom"




const Applayout=()=>{
    return <div className="Applayout">
       <Navbar/>
       <Outlet/>
    </div>
}



export default Applayout;