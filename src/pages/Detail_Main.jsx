/* eslint-disable */
import React from 'react'
import Detail_Slide from '../components/Detail_Silde'
import Table  from "react-bootstrap/Table";

export default function Detail01() {
  return (
  <section className="detail_product">
    <div className="detail_main_slide">
    <Detail_Slide/>
    </div>
    <div className="detail_infromation">
      <h2>바쿠 스탠다드 파머스 마켓 <i className="xi-heart-o"></i></h2>
      <h3>15,000 KRW</h3>
      <Table className='detail_table'>
      <thead>
          <tr>
            <td>-</td>
            <td>0</td>
            <td>+</td>
          </tr>
        </thead>
      </Table>
      <hr className="dotted"></hr>
      <h4>총 상품금액 : <span className="detail_price">15,000원</span></h4>
      <div className="orderbox">
        <a className="order01">장바구니</a>
        <a className="order02">구매하기</a>
      </div>
      <hr className="justline"></hr>
      <p className="order_inform">배송정보</p>
      <div className="ulbox">
        <ul className="ulbox01">
          <li>배송 방법</li>
          <li>배송 지역</li>
          <li>배송 비용</li>
          <li>배송 기간</li>
          <li>배송 안내</li>
        </ul>
        <ul className="ulbox02">
          <li>택배</li>
          <li>전국지역</li>
          <li>3,000원</li>
          <li>3일 ~ 7일</li>
          <li>산간벽지나 도서지방 별도의 추가금액을 지불하셔야 하는 경우가 있습니다. 고객님께서
            주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이
            다소 지연될 수 있습니다.</li>
        </ul>
      </div>
    </div>
  </section>
  )
}