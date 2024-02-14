import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pict20 } from "../assets";
import { useTranslation } from "react-i18next";

const FeaturedProject = () => {
  const [enter, setEnter] = useState(false);
  const { t } = useTranslation("common");

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
    <section className="body-font w-screen">
      <div className="container mx-auto px-5 pt-10">
        <div className="flex flex-col w-full">
          <h1 className="ss:text-center ss:text-3xl text-2xl text-start font-medium title-font text-gray-900">
            Portfolio
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="h-[350px] w-full mx-auto relative my-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src={pict20}
                alt="blog"
              />

              <div className="p-6 absolute bottom-0 left-0 flex flex-col justify-between bg-white/70 w-full">
                <div>
                  <h2 class="text-2xl font-medium text-gray-900 title-font">
                    {t("featured-project.serang.title")}
                  </h2>
                  <h3 class="text-md font-light text-black title-font mb-2">
                    {t("featured-project.serang.content.title")}
                  </h3>
                </div>
                <p className="leading-relaxed mb-3">
                {t("featured-project.serang.content.text")}
                </p>
                <div className="flex items-center flex-wrap "></div>
              </div>
            </div>
          </div>

          <div className="flex ss:flex-row ss:gap-4 flex-col ss:w-screen">
            <div className="border-gray-200 border p-4 rounded-lg my-3 ss:w-1/2">
              <h2 class="text-2xl font-medium text-gray-900 title-font">
              {t("featured-project.bekasi.title")}
              </h2>
              <h3 class="text-md font-light text-black title-font mb-2">
              {t("featured-project.bekasi.content.title")}
              </h3>
              <p class="leading-relaxed">
              {t("featured-project.bekasi.content.text")}
              </p>
            </div>
            <div className="border-gray-200 border p-4 rounded-lg my-3 ss:w-1/2">
              <h2 class="text-2xl font-medium text-gray-900 title-font">
              {t("featured-project.magelang.title")}
              </h2>
              <h3 class="text-md font-light text-black title-font mb-2">
              {t("featured-project.magelang.content.title")}
              </h3>
              <p class="leading-relaxed">
              {t("featured-project.magelang.content.text")}
              </p>
            </div>
          </div>

          <div className="flex ss:flex-row ss:gap-4 flex-col ss:w-screen">
            <div className="border-gray-200 border p-4 rounded-lg my-3 ss:w-1/2">
              <h2 class="text-2xl font-medium text-gray-900 title-font">
              {t("featured-project.bogor.title")}
              </h2>
              <h3 class="text-md font-light text-black title-font mb-2">
              {t("featured-project.magelang.content.title")}
              </h3>
              <p class="leading-relaxed">
              {t("featured-project.magelang.content.text")}
              </p>
            </div>
            <div className="border-gray-200 border p-4 rounded-lg my-3 ss:w-1/2">
              <h2 class="text-2xl font-medium text-gray-900 title-font">
              {t("featured-project.depok.title")}
              </h2>
              <h3 class="text-md font-light text-black title-font mb-2">
              {t("featured-project.depok.content.title")}
              </h3>
              <p class="leading-relaxed">
              {t("featured-project.depok.content.text")}
              </p>
            </div>
          </div>

          <div className="container flex justify-center items-center p-6">
            <Link
              to="/portfolio"
              className="w-64 h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center"
            >
              {t("see more")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
