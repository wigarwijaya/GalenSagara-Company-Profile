import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  coaBali,
  kemenATR,
  kemendagri,
  kemenhub,
  kemenkumham,
  kemenli,
  kemkominfo,
  kotaBogor,
  jawaBarat,
  tommyUtama,
} from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Clients = () => {
  return (
    <section className="body-font w-screen">
      <div
        id="clients"
        className="mx-auto px-5 py-10 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900">
            Our Partners
          </h1>
        </div>
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
              <div className="relative w-40 mb-5">
                <img
                  src={coaBali}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kemenATR}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kemendagri}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kemenhub}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kemenkumham}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kemenli}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kemkominfo}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={kotaBogor}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-40 mb-5">
                <img
                  src={jawaBarat}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-start text-[18px] bg-[#fff] flex justify-center items-center">
              <div className="relative w-56 mb-5">
                <img
                  src={tommyUtama}
                  className="block w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
