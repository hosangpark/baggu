/* eslint-disable */
import React from "react";


export default function Standard_Header(){
 
  return(
    <div className="product_header">
      <h2>BEST ITEM</h2>
      <h3>Total : 32 items</h3>
      <div className="filterbox">
        <button className="sortreset">기본정렬</button>
        <button className="descending">낮은가격순</button>
        <button className="ascending">높은가격순</button>
      </div>
    </div>
  )
}