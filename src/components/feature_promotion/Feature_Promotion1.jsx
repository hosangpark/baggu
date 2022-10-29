/* eslint-disable */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion1-1.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion1-2.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/baggu_main_page_imgs/promotion1-3.jpg"} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
