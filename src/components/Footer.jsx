import React from "react";
import { companyLogo } from "../assets";

const Footer = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="inline-flex lg:ml-auto mt-0 w-full justify-center md:justify-start md:w-auto px-6">
            <a href="#" className="flex">
              <img src={companyLogo} className="w-6 h-6 mr-2" />
              <p className="text-base text-primary">GALEN SAGARA PERKASA</p>
            </a>
          </div>

          <div className="lg:w-1/2 p-6 w-full justify-center">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs text-center">
              ADDRESS
            </h2>
            <p className="text-center">Jl. Martanegara No. 56, Bandung</p>
            <h2 className="text-center mt-1 title-font font-semibold text-gray-900 tracking-widest text-xs">
              OFFICE ADDRESS
            </h2>
            <p className="text-center">Jl. Guntur Madu No. 6A, Bandung</p>
            <h2 className="text-center title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <button
              className="text-center w-full text-primary leading-relaxed"
              onClick={() => (window.location = "mailto:galensagara@gmail.com")}
            >
              galensagara@gmail.com
            </button>
            <h2 className="text-center title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="text-center leading-relaxed">+62 8128 0807 385</p>
          </div>

          <span className="inline-flex lg:ml-auto lg:mt-0 w-full justify-center px-6 md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-secondary text-sm text-center sm:text-left">
            © Galen Sagara 2023 —
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-secondary text-sm">
            All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
