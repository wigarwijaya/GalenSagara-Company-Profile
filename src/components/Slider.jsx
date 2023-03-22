import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { pict1, pict2, pict3, pict4, pict5 } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
    <div id="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pict1}/></SwiperSlide>
        <SwiperSlide><img src={pict2}/></SwiperSlide>
        <SwiperSlide><img src={pict3}/></SwiperSlide>
        <SwiperSlide><img src={pict4}/></SwiperSlide>
        <SwiperSlide><img src={pict5}/></SwiperSlide>
      </Swiper>
    </div>
  );
}
