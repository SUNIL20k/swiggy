import React from "react";
// import { ReactDOM } from "react-dom/client";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Topurl } from "./mockData";


const Top = () => {
  return (
    <div>
      <div className="top-box">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552"
          className="top-img"
        ></img>
      </div>
    </div>
  );
};

const TopCard = () => {
    
  return (
    <div>
      <h1 className="top-heading">Top restaurant chains in Bangalore</h1>
      <div className="Top-Card">
        
        <Top />
        <Top />
        <Top />
        <Top />
        <Top />
        <Top />
        <Top />
        <Top />
        <Top />
      </div>
    </div>
  );
};

export default TopCard;