/* eslint-disable */

import React from 'react'
import Best_Tab from './Best_Tab';

export default function Main_Best() {
  return (
    <div className='Main_Best'>
      <h2 className='main_section_title'>BEST ITEM</h2>
      <p className="item_p">바꾸를 만나보세요</p>
      <Best_Tab/>
    </div>
  )
}


// const tabItem = document.querySelectorAll(".tab_button");
// const tabContent = document.querySelectorAll(".bestitemcontainer");
//   tabItem.forEach((item) => {
//     item.addEventListener("click", tabHandler);
//   });
  
// function tabHandler(item) {
//   const tabTarget = item.currentTarget;
//   const target = tabTarget.dataset.tab;
//   tabItem.forEach((title) => {
//     title.classList.remove("tab_active");
//   });
//   tabContent.forEach((target) => {
//     target.classList.remove("tabshow");
//   });
//   document.querySelector("#" + target).classList.add("tabshow");
//   tabTarget.classList.add("tab_active");
// }





