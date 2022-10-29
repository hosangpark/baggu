/* eslint-disable */
import React, { useState } from "react";
import Feature_Promotion1 from '../components/feature_promotion/Feature_Promotion1'
import Feature_Promotion2 from '../components/feature_promotion/Feature_Promotion2'
import Feature_Promotion3 from '../components/feature_promotion/Feature_Promotion3'
import Feature_Promotion4 from '../components/feature_promotion/Feature_Promotion4'
import Feature_Promotion5 from '../components/feature_promotion/Feature_Promotion5'
import Feature_Promotion6 from '../components/feature_promotion/Feature_Promotion6'
import Feature_Promotion7 from '../components/feature_promotion/Feature_Promotion7'
import Feature_Promotion8 from '../components/feature_promotion/Feature_Promotion8'

const content = [
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion1.png"} alt=""/>,  content:  <Feature_Promotion1/>} ,
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion2.png"} alt=""/>,  content:  <Feature_Promotion2/>},
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion3.png"} alt=""/>,  content:  <Feature_Promotion3/>},
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion4.png"} alt=""/>,  content:  <Feature_Promotion4/>},
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion5.png"} alt=""/>,  content:  <Feature_Promotion5/>},
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion6.png"} alt=""/>,  content:  <Feature_Promotion6/>},
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion7.png"} alt=""/>,  content:  <Feature_Promotion7/>},
  { tab: <img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion8.png"} alt=""/>,  content:  <Feature_Promotion8/>},
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export default function Main_Feature() {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <section className="feature">
      <div className="feature_text">
        <h2>Product Feature</h2>
        <hr className="feature_hr" />
        <h3>스탠다드 바꾸 세트</h3>
        <h4>40,000원</h4>
        <p>
          스탠다드 바쿠세트는 섬세하고 재사용 가능한 파우치 입니다. <br />
          각 세트는 세가지의 유니크한 프린트를 포함하고 있고 <br />
          선물하기에 가장 이상적입니다.
        </p>
        <h4>COLOR: 일렉트릭 스토레베리즈</h4>
        <div className="feature_labelbox">
          {content.map((section, index) => (
            <span key={section.tab} className='Feature_label' onClick={() => contentChange(index)}>{section.tab}</span>
          ))}
        </div>
        <div className="feature_btnbox">
          <a href="#!">자세히 보기</a>
          <a href="#!">장바구니 담기</a>
        </div>
      </div>
        <div className="feature_slide">
        {contentItem.content}
        </div>
    </section>
  )
}