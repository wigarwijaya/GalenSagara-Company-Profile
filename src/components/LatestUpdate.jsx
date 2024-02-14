import React, { useState } from "react";
import { text } from "../constants";
import { Link } from "react-router-dom";
import { pict1, pict3 } from "../assets";
import { useTranslation } from "react-i18next";

const LatestUpdate = () => {
  const [construction, setConstruction] = useState(false);
  const [nonConstruction, setNonConstruction] = useState(false);
  const {t} = useTranslation("common")

  const onConstructionEnter = () => {
    setConstruction(true);
  };

  const onConstructionLeave = () => {
    setConstruction(false);
  };
 
  const onNonConstructionEnter = () => {
    setNonConstruction(true);
  };

  const onNonConstructionLeave = () => {
    setNonConstruction(false);
  };

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 90) + "..." : str;
  };

  return (
    <section className="body-font w-screen">
      <div className="container mx-auto px-5 pt-10">
        <div className="flex flex-col w-full">
          <h1 className="ss:text-center ss:text-3xl text-2xl text-start font-medium title-font text-gray-900">
            Services
          </h1>
          <p className="ss:text-center mx-auto leading-relaxed text-start text-base">
            Our experienced consultants work closely with clients to understand
            their unique needs and challenges, providing expert advice and
            guidance to help them achieve their goals.
          </p>
        </div>
        <div className="flex flex-wrap ss:flex-nowrap ss:gap-8">
          <div
            onMouseEnter={onConstructionEnter}
            onMouseLeave={onConstructionLeave}
            className="h-[350px] w-full mx-auto relative my-4"
          >
            <div className="rounded h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src={pict3}
                alt="blog"
              />
              <div className="p-6 absolute bottom-0 bg-white/70 ss:w-full">
                <h1 className="title-font ss:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Construction Planning Service
                </h1>
                <p className="leading-relaxed mb-3 text-black">{text.text1}</p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    to="/services/construction-planning"
                    className={`${!construction && "ss:hidden"} text-primary inline-flex items-center md:mb-2 lg:mb-0`}
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={onNonConstructionEnter}
            onMouseLeave={onNonConstructionLeave}
            className="h-[350px] w-full mx-auto relative my-4"
          >
            <div className="rounded h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src={pict1}
                alt="blog"
              />
              <div className="p-6 absolute bottom-0 bg-white/70">
                <h1 className="title-font ss:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Non-Construction Planning Service
                </h1>
                <p className="leading-relaxed mb-3 text-black">{text.text2}</p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    to="/services/non-construction-planning"
                    className={`${!nonConstruction && "ss:hidden"} text-primary inline-flex items-center md:mb-2 lg:mb-0`}
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdate;
