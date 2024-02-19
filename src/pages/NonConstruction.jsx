import React, { useEffect } from "react";
import {
  pict1,
  pict9,
  pict14,
  pict15,
  pict16,
  pict17,
  pict18,
} from "../assets";
import { useTranslation } from "react-i18next";

const NonConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation("common");

  return (
    <div className="container p-6">
      <section id="construction-planning" className="mb-6">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/3 h-full bg-primary"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-1 sm:mb-0">
          
              {t("latestUpdate.services.non-construction.title")}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict17}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {t("construction.type.non-planning.0.title", {
                title: " AGRICULTURE AND RURAL DEVELOPMENT",
              })}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {t("construction.type.non-planning.0.content", {
                content:
                  "Services in the field of agricultural and rural development include: Social Infrastructure and Community Participation Development, Credit and Institutions, Plantation and Agricultural Mechanization, Nursery, Pest/Plant Disease Control, Animal Husbandry, Forestry, Fisheries, Perennials and Food and Other Plant Products, Conservation and Greening, Other Agricultural and Rural Development.",
              })}
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict16}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              TRANSPORTATION
            </h2>

            <div className="flex flex-col">
              {[
                "Development of Transportation Facilities: Origin-Destination Surveys, Demand Forecasting, Modeling, Policy and Investment Programs.",
                "Legislation / Regulations in the Transportation Sector.",
                "Transportation service business: Transportation service business regulations, management and development of transportation business organizations, financial analysis, calculation of basic prices and determination of tariffs.",
                "Compiler of Traffic Impact Analysis Documents.",
                "Other Transportation Sub-sector.",
              ].map((item, index) => (
                <span key={index} className="text-base leading-relaxed">
                  {/* {index + 1}. {item} */}
                  {index + 1}.{" "}
                  {t("construction.type.non-planning.1.content.0", {
                    content: item,
                  })}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict9}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {t("construction.type.non-planning.2.title", {
                title: "TELEMATICS",
              })}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {t("construction.type.non-planning.2.content", {
                content:
                  "  Services in the telematics sector include activities in the Land Telecommunications, Satellite Telecommunications, Hardware,  Content, Application/Software sub-services, and other Telematics sub-services.",
              })}
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict18}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {t("construction.type.non-planning.3.title", {
                title: "MINING AND ENERGY",
              })}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {t("construction.type.non-planning.3.content", {
                content:
                  "This field serves sub-sectors of services which include: Economics and Energy Conservation; Oil and gas; Coal, Lignite and Anthracile; Marketing Economics and Mineral Exploration; Mineral Technology; Commodity and Mineral Exploitation; and Mining and Other Energy Sub-Sector.",
              })}
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict1}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {t("construction.type.non-planning.4.title", {
                title: "   MANAGEMENT CONSULTANCY SERVICES",
              })}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {t("construction.type.non-planning.4.content", {
                content:
                  "In this field, service sub-sectors include: Accounting System Planning; HR Training and Development; Functional Management Consulting; Business Law Consulting.",
              })}
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict14}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {t("construction.type.non-planning.5.title", {
                title: " STUDY, RESEARCH AND TECHNICAL ASSISTANCE SERVICES",
              })}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {t("construction.type.non-planning.5.content", {
                content:
                  "  Oil and Gas Research and Development Services: Engaging in specialized activities such as analyzing core drilling results, fluid analysis of reservoirs, environmental impact assessments, management and monitoring efforts, risk analysis, field development studies, feasibility studies, engineering design assistance, and studies on enhanced oil recovery techniques.",
              })}
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict15}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {t("construction.type.non-planning.6.title", {
                title: "  SURVEY SERVICES",
              })}
            </h2>
            <p className="text-base leading-relaxed mt-2">

              {t("construction.type.non-planning.6.content", {
                content:
                  " This field serves service sub-sectors, such as: Terrestrial Surveys; Remote Sensing/Photogrammetry; Hydrographic/Bathymetric Survey; Geographic Information System; Survey of Land Ownership Registration/Kadastral Survey of Geology and Geophysics; Agricultural Survey; Non-Seismic Survey Services and Geological and Geophysics (non-seismic) Survey Services.",
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonConstruction;
