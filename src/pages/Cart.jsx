import React from "react";
import Table  from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./store";
import { removeCount } from "./store";

export default function Cart(){
  let state = useSelector((state)=> {return state})
  let dispatch = useDispatch()

  return(
    <div className="cart_chart">
      <Table className="cart_table">
        <thead>
          <tr>
            <th scope="col">상품사진</th>
            <th scope="col">상품명</th>
            <th scope="col">상품개수</th>
            <th scope="col">상품가격</th>
            <th scope="col">상품삭제</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            state.cart.map((value, i) => {
              return(
              <tr key={i}>
                <td><img src={state.cart[i].img} alt="" /></td>
                <td>{state.cart[i].title}</td>
                <td>
                <button onClick={()=>{dispatch(removeCount(state.cart[i].id))}}>-</button>
                  <span className="store_count">{state.cart[i].count}</span>
                <button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button>
                </td>
                <td>{state.cart[i].price*state.cart[i].count}</td>
                <td><span>X</span></td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}