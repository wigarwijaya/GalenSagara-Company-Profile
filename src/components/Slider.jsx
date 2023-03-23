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
                Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We deliver a range of specialized services to the earth and
                water resource industries.
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
                Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We deliver a range of specialized services to the earth and
                water resource industries.
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
                Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We deliver a range of specialized services to the earth and
                water resource industries.
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
                Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We deliver a range of specialized services to the earth and
                water resource industries.
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
                Consultant
              </h2>
              <p className="mx-auto leading-relaxed text-base text-white text-start py-2">
                We deliver a range of specialized services to the earth and
                water resource industries.
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
