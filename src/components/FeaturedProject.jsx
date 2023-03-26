import React, { useState } from "react";
import { text } from "../constants";
import { pict20 } from "../assets";
import { PdfViewer } from ".";
import { companyProfile } from "../assets";

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
      <div className="container mx-auto px-5 pt-10">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-2xl text-start font-medium title-font text-gray-900">
            Portfolio
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="h-[350px] w-full mx-auto relative my-4">
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={pict20}
                alt="blog"
              />

              <div className="p-6 absolute bottom-0 left-0 flex flex-col justify-between bg-white/70 w-full">
                <div>
                  <h2 class="text-2xl font-medium text-gray-900 title-font">
                    2022 | Serang City
                  </h2>
                  <h3 class="text-md font-light text-gray-400 title-font mb-2">
                    Environmental/Civil Water
                  </h3>
                </div>
                <div className={!enter && "hidden"}>
                  <p className="leading-relaxed mb-3">
                    Special Services Oriented Consultancy Expenditures Serang
                    City Clean Water Pipeline Master Plan
                  </p>
                  <div className="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex-grow my-5">
            <h2 class="text-2xl font-medium text-gray-900 title-font">
              2022 | Bekasi District
            </h2>
            <h3 class="text-md font-light text-gray-400 title-font mb-2">
              Research Studies and Technical Assistance
            </h3>
            <p class="leading-relaxed">
              Expenditures for Making Investment Books on Regency/City Business
              Potential and Opportunities
            </p>
          </div>
          <div class="md:flex-grow my-5">
            <h2 class="text-2xl font-medium text-gray-900 title-font">
              2022 | Serang City
            </h2>
            <h3 class="text-md font-light text-gray-400 title-font mb-2">
              Research Studies and Technical Assistance
            </h3>
            <p class="leading-relaxed">
              Study of Utilization and Management of Paddy Field Agricultural
              Land Assets with a Profit Sharing System
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-6 w-full">
            <h2 className="text-center text-xs title-font font-medium text-black mb-1">
              Our Portfolio
            </h2>
            <PdfViewer pdf={companyProfile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
