import React, { useState } from "react";
import { text } from "../constants";
import { pict1, pict2, pict3, pict4, pict5 } from "../assets";

const FeaturedProject = () => {
  const [enter, setEnter] = useState(false);
  //   const [service, setService] = useState(false);

  const onMouseEnter = () => {
    setEnter(true);
  };

  const onMouseLeave = () => {
    setEnter(false);
  };

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl text-start font-medium title-font text-gray-900">
            Featured Projects
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="h-[350px] w-[full] mx-auto relative my-4">
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={pict1}
                alt="blog"
              />

              <div className="p-6 absolute bottom-0 left-0 flex flex-col justify-between bg-white/70">
                <div>
                  <h2 class="text-2xl font-medium text-gray-900 title-font">
                    Candelaria
                  </h2>
                  <h3 class="text-md font-light text-gray-400 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h3>
                </div>
                <div className={!enter && "hidden"}>
                  <p className="leading-relaxed mb-3">{truncate(text.text1)}</p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="#nav"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
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
            </div>
          </div>
          <div class="md:flex-grow my-5">
            <h2 class="text-2xl font-medium text-gray-900 title-font">
              Candelaria
            </h2>
            <h3 class="text-md font-light text-gray-400 title-font mb-2">
              Bitters hashtag waistcoat fashion axe chia unicorn
            </h3>
            <p class="leading-relaxed">{truncate(text.text1)}</p>
            <a class="text-[#E3682B] inline-flex items-center mt-2">
              Learn More
              <svg
                class="w-4 h-4 ml-2"
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
          <div class="md:flex-grow my-5">
            <h2 class="text-2xl font-medium text-gray-900 title-font">
              Candelaria
            </h2>
            <h3 class="text-md font-light text-gray-400 title-font mb-2">
              Bitters hashtag waistcoat fashion axe chia unicorn
            </h3>
            <p class="leading-relaxed">{truncate(text.text1)}</p>
            <a class="text-[#E3682B] inline-flex items-center mt-2">
              Learn More
              <svg
                class="w-4 h-4 ml-2"
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
          <a href="" className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black mt-5 py-2 px-8 focus:outline-1 rounded text-sm text-center">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
