import React from "react";
import { Link } from "react-router-dom";
import { companyLogo } from "../assets";

const Footer = () => {
  return (
    <div className="w-screen body-font border-t border-gray-200 bg-[#e4e4e4]">
      <div className="container mx-auto p-5">
        <div className="flex ss:flex-row flex-col justify-center items-center ss:gap-10">
          <div className="mt-0 ss:w-1/3 w-full ss:h-[218px] px-6 ss:mb-0 mb-4 ss:text-start text-center">
            <a href="#" className="flex justify-center ss:justify-start">
              <img src={companyLogo} className="w-6 h-6 mr-2" />
              <p className="text-base text-primary">GALEN SAGARA PERKASA</p>
            </a>
          </div>

          <div className="ss:w-1/4 w-full justify-center ss:h-[218px] ss:text-start text-center">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">
              ADDRESS
            </h2>
            <p className="">Jl. Martanegara No. 56, Bandung</p>
            <h2 className=" mt-1 title-font font-semibold text-gray-900 tracking-widest text-xs">
              OFFICE ADDRESS
            </h2>
            <p className="">Jl. Guntur Madu No. 6A, Bandung</p>
            <h2 className=" title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <button
              className="underline text-primary leading-relaxed"
              onClick={() => (window.location = "mailto:galensagara@gmail.com")}
            >
              galensagara@gmail.com
            </button>
            <h2 className=" title-font font-semibold text-gray-900 tracking-widest text-xs">
              PHONE
            </h2>
            <p className=" leading-relaxed">+62 8128 0807 385</p>
          </div>

          <div className="ss:w-1/4 w-full justify-start ss:items-start ss:h-[218px] ss:flex hidden flex-col">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              </li>
              <li>
                <Link to="/services/construction-planning" className="text-gray-600 hover:text-gray-800">Construction Planning</Link>
              </li>
              <li>
                <Link to="/services/non-construction-planning" className="text-gray-600 hover:text-gray-800">Non-Construction Planning</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-gray-800">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="w-screen py-4 px-5 flex ss:flex-row flex-col justify-between">
          <p className="text-secondary text-sm text-center ss:mb-0 mb-4">
            © Galen Sagara Perkasa 2023 —
            <span className="ss:mt-0 mt-2 w-full text-center text-secondary text-sm">
              All Rights Reserved
            </span>
          </p>
          <span className="flex justify-center px-6">
              <a className="text-white">
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

              <a className="ml-3 text-white">
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
    </div>
  );
};

export default Footer;
