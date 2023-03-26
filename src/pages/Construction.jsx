import React, { useEffect } from "react";
import { pict1, pict2, pict3, pict4, pict5, pict6, pict7, pict8, pict9, pict10, pict11, pict12, pict13, pict14 } from "../assets";


const Construction = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container p-6">
      <section id="construction-planning" className="mb-6">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/3 h-full bg-primary"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-1 sm:mb-0">
              Construction Planning Service
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict11}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              REGIONAL DEVELOPMENT SERVICES – AL002
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Business services related to study, planning, design, supervision
              and management of construction implementation related to regional
              spatial planning including area utilization audits and zoning
              arrangements covering land, sea, air and in the earth including
              areas island corridors, national/provincial/regency/city strategic
              areas, mainstay areas, residential areas and public open/green
              open space areas
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict12}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              URBAN DEVELOPMENT SERVICES – AL003
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Urban spatial planning services (covering land, sea, air and
              underground), urban planning services, including assessment
              services and advisory services in urban spatial planning.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict10}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              URBAN DEVELOPMENT SERVICES – AL004
            </h2>
            <p className="text-base leading-relaxed mt-2">
              This group includes business services related to review, planning,
              design, supervision and construction management related to the
              development of aesthetic landscaping for parks, commercial land
              and settlements.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict3}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              OTHER ENGINEERING SERVICES – RK005
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Business services related to review, planning, design, supervision
              and management of related construction organizers: Military
              engineering building work, sports facility work, clean water
              treatment work, sewage, waste management, area facilities &
              infrastructure residential, industrial, hospital and traffic
              control system works for land, air and sea transportation.
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
              SCIENTIFIC AND TECHNICAL CONSULTANCY SERVICES ON SOIL SURFACE AND
              MAPPING – IT003
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Survey activities and analysis of the shape and/or layer of the
              earth's surface using other methods, including transit,
              photogrammetry, and hydrography for the purpose of preparing maps
              and topology by air/satellite, laser scanning, quality and
              quantity petroleum, cargo (cargo), bathymetry, meteorology and
              oceanography
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
              ARCHITECTURE SERVICES OF RESIDENTIAL AND NON RESIDENTIAL BUILDINGS
              – AR001
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Business studies, planning, design, supervision and management of
              construction services as well as architectural advisory and
              pre-design services.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={pict13}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              OTHER ARCHITECTURE SERVICES – AR002
            </h2>
            <p className="text-base leading-relaxed mt-2">
              SThis group includes business services for the study, planning,
              design, supervision and management of the construction of special
              buildings such as cultural heritage buildings, museum buildings,
              research and technology buildings, monuments, civil buildings and
              other similar special buildings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
