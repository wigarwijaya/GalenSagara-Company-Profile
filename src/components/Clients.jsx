import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { pict1, pict2, pict3, pict4, pict5 } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Clients = () => {

  return (
    <div>
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
        className="w-[100vw] h-60"
      >
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict1} className="block w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict2} className="block w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict3} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict4} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict5} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict4} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict3} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict4} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict2} className="block w-full h-full object-cover" />
        
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients;
