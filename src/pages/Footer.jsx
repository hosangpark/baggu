/* eslint-disable */

import React from 'react'

export default function Footer() {
  return (
    <section>
      <footer className="footer">
      <ul className="footerbox">
        <li>회사 소개</li>
        <li>이용 약관</li>
        <li>개인정보 처리방침</li>
        <li>이용 안내</li>
      </ul>
      <ul className="footerbox">
        <li>공지사항</li>
        <li>REVIEW</li>
        <li>EVENT</li>
        <li>ABOUT US</li>
      </ul>
      <ul className="footerbox">
        <li>CONTACT :</li>
        <li className="number">1588 - 8564</li>
        <p>평일 : 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
        <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
        <p>토요일, 일요일, 공휴일 휴무</p>
        <p>통화량 많을때는 문의 게시판으로 문의주세요.</p>
      </ul>
      <ul className="footerbox">
        <a href="#!">문의 게시판</a>
        <a href="#!">자주묻는 질문</a>
      </ul>
    </footer>
    <footer className="footer_maintext">
      <img src="./baggu_main_page_imgs/footer_logo.png" alt="" />
    </footer>
  </section>
  )
}