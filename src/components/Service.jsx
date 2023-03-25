import React from "react";
import { pict1, pict2, pict3, pict4, pict5, pict6, pict7, pict8, pict9 } from "../assets";

const Service = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl text-start font-medium title-font mb-4 text-gray-900">
            Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-start text-base">
            Our experienced consultants work closely with clients to understand
            their unique needs and challenges, providing expert advice and
            guidance to help them achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict1}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Architecture
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Architecture
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict2}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Planning
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Planning
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict3}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Engineering Consultant
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Engineering Consultant
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict4}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Survey
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Survey
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict5}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Mapping
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Mapping
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict6}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Environment
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Environment
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict7}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Management
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Management
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict8}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Information Technology
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Information Technology
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-40">
            <div className="flex justify-center items-center relative w-full h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pict9}
              />
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full">
                <h1 className="title-font text-lg font-medium text-white">
                  Project Management
                </h1>
              </div>
              <div className="absolute flex flex-col justify-between py-4 px-4 h-full w-full hover:bg-white opacity-0 hover:opacity-80 transition duration-150 ease-in hover:ease-out">
                <h1 className="title-font text-lg font-medium text-black">
                  Project Management
                </h1>
                <a
                  href=""
                  className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
