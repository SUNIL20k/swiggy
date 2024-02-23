import React from "react";


const Shimmer=()=>{
    return <div className="boxShimmer">
          <h1 className="imgShimmer"></h1>
          <h1 className="restoShimmer"></h1>
          <h1 className="RatingShimmer"></h1>
          <h1 className="Cuisinesshimmer"></h1>
        </div>
}

 const Shimmerbody=()=>{
    return <div className="Shimmerbody">
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
    </div>
}



const ShimmerItem=()=>{
    return <div className="item-shimmer-box">
            <h1 className="item-shimmer-img"></h1>
        </div>
}
export const ShimmerItemBody=()=>{
    return <div className="item-shimmer-body">
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
    </div>
  }





export default Shimmerbody;
