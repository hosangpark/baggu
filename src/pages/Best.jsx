import React from "react";
import data from '../components/data'
import { addItem } from './store'
import { useDispatch } from 'react-redux'

export default function Best(){
  let dispatch = useDispatch()
  return(
    <div className='container'>
        {
          data.map((value, i) => {
            return (
              <div className='col-md-3'>
                <img src={`/images/best_0${i+1}.png`} width='280px' />
                <h3>{value.title}</h3>
                <p>{value.price}</p>
                <button onClick={() => {
                dispatch(addItem({id: value.id, title: value.title, count: 1}))
                }}>장바구니</button>
              </div>
            )
          })
        }        
      </div>
  )
}