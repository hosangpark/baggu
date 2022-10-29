/* eslint-disable */
import React from "react";
import data from '../components/strandard_data'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { addItem } from './store'
import { useDispatch } from 'react-redux'



export default function Standard(){
  let dispatch = useDispatch()
  const navigate = useNavigate()
  return(
    <div className='strandard_container'>
        {
          data.map((value, i) => {
            return (
              <div className='strandard_product' key={value.id}>
                <img src={process.env.PUBLIC_URL + value.img} onClick={() => {navigate('/standard/detail')}}/>
                <h3>{value.title}</h3>
                <p>{value.price}</p>
                <button onClick={() => {
                dispatch(addItem({id: value.id, title: value.title, img : value.img, price:value.price, count: 1}))
                }}>장바구니</button>
              </div>
            )
          })
        } 

    </div>
  )
}