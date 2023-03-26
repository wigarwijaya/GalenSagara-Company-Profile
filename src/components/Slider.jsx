import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { pict1, pict2, pict3, pict4, pict5, pict6, pict7, pict8, pict9, pict15 } from "../assets";

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
        className="w-[100vw] h-[95vh]"
      >
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict1} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Architecture
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                We transforming your ideas into innovative and sustainable
                designs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict2} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Planning
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                We design your vision, build your future with our planning
                services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict3} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Engineering Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                Expert engineering solutions for your toughest challenges.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict15} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Survey
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                Accurate data, confident decisions - with our survey services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict5} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Mapping
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                Mapping your world with precision and detail.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict6} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Environment
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                Working towards a sustainable future with our comprehensive
                environmental services.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict7} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Management
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                Efficient and effective management solutions for your projects -
                trust us to deliver results.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict8} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Information Technology
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
                Empowering your business with innovative IT solutions - our
                expertise, your success.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img src={pict9} className="block w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-50 bg-secondary/70 p-5">
              <h2 className="text-primary font-bold text-2xl text-start">
                Project Management
              </h2>
              <p className="mx-auto leading-relaxed text-base text-black text-start pt-2 pb-4">
              From concept to completion - our project management services ensure your vision becomes a reality.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
