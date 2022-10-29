/* eslint-disable */
import React from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Standard_Header from "./Standard_Header"
import Standard_Product from "./Standard_Product"


export default function Standard(){

  return(
    <div className='standard_wrap'>
       <Standard_Header/>
       <Standard_Product/>
    </div>
  )
}