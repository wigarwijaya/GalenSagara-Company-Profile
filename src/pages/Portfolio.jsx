import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { companyProfile } from "../assets";
import { PdfViewer } from "../components";

import { Project2022, Project2021, Project2020 } from "../components";

const projects = [{ year: "2022" }, { year: "2021" }, { year: "2020" }];

const Portfolio = () => {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-6 w-full">
          <h2 className="text-center text-xs title-font font-medium text-black mb-1">
            Our Portfolio
          </h2>
          <PdfViewer pdf={companyProfile} />
        </div>
        <div className="p-6 mb-6">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block">{selected.year}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {projects.map((project, projectIdx) => (
                    <Listbox.Option
                      key={projectIdx}
                      className={({ active }) =>
                        `relative cursor-default flex justify-center items-center select-none py-2 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={project}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {project.year}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="p-6">
          {selected === projects[0] && <Project2022 />}
          {selected === projects[1] && <Project2021 />}
          {selected === projects[2] && <Project2020 />}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
