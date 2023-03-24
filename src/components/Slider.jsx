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
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict1} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Architecture
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We transforming your ideas into innovative and sustainable
                designs.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict2} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Planning
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We design your vision, build your future with our planning
                services.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict3} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Engineering Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                Expert engineering solutions for your toughest challenges.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict4} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Survey
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                Accurate data, confident decisions - with our survey services.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict5} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Mapping
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                Mapping your world with precision and detail.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict4} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Environment
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                Working towards a sustainable future with our comprehensive
                environmental services.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict3} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Management
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                Efficient and effective management solutions for your projects -
                trust us to deliver results.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict4} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Information Technology
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                Empowering your business with innovative IT solutions - our
                expertise, your success.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <img src={pict2} />
            <div className="absolute bottom-0 w-full h-50 bg-black/70 p-5">
              <h2 className="text-[#E3682B] font-bold text-2xl text-start">
                Project Management
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
              From concept to completion - our project management services ensure your vision becomes a reality.
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href="#nav"
                  className="text-[#E3682B] inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
