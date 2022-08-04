import React from "react";
import Table  from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./store";
import { removeCount } from "./store";

export default function Cart(){
  let state = useSelector((state)=> {return state})
  let dispatch = useDispatch()

  return(
    <div>
      <Table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">상품명</th>
            <th scope="col">상품개수</th>
            <th scope="col">상품가격</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {
            state.cart.map((value, i) => {
              return(
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>
                <button onClick={()=>{dispatch(removeCount(state.cart[i].id))}}>-</button>
                  <span className="store_count">{state.cart[i].count}</span>
                <button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}