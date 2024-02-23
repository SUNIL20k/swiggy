import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter,RouterProvider } from "react-router-dom";
import MenuCard from './menu';
import Applayout from './body';
import Help from "./help";
import Search from "./search"
import Mainbody from './cardbody';

const AppOutput=()=>{
     return <div>
        <Applayout/>
    </div>
}



const ways=createBrowserRouter([
    {
       path:"/",
       element:<Applayout/>,
       children:[
        {
            path:"/",
            element:<Mainbody/>
        },
        {
            path:"/help",
            element:<Help/>
        },
        {
            path:"/search",
            element:<Search/>
        },
        {
            path:"/menu",
            element:<MenuCard/>
        },
       ]
    },
      
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}><AppOutput/></RouterProvider>);

