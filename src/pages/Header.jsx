/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import "../css/Header.css";

export default function Header() {
const [scrollPosition, setScrollPosition] = useState(0);
const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
}
useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
});
  const navigate = useNavigate()
  return (
    <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
      <div className={scrollPosition < 100 ? "nav_gnb" : "change_nav_gnb"}>
        <span className='search_icon'><FiSearch onClick={() => {navigate('/cart')}}/></span>
        <span className='header_logo' onClick={() => {navigate('/')}}>BAGGU</span>
        <span className='cart_person_icon'>
          <AiOutlineShoppingCart onClick={() => {navigate('/cart')}}/>
          <MdPersonOutline onClick={() => {navigate('/cart')}}/>
        </span>
      </div>
      <ul className="nav_lnb">
        <li onClick={() => {navigate('/about')}}>FANNY PACK</li>
        <li onClick={() => {navigate('/standard')}}>STANDARD</li>
        <li>BABY</li>
        <li>WINE BAG</li>
        <li>BIG</li>
        <li>DUCK</li>
        <li>POUCH&CASE</li>
        <li>CROSS BODY</li>
        <li>TOWEL</li>
      </ul>
    </div>
  )
}