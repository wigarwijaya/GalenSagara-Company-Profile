import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { SidebarData } from "../constants";

import "./Nav.css";
import "./Dropd.css";

function Navbar({ item, close }) {
  const [click, setClick] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <li className="flex items-center h-[60px]">
        <Link
          to="/"
          className="text-pink no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Home
        </Link>
      </li>
      <li
        className="flex items-center h-[60px]"
        onMouseEnter={() => setDropdownService(true)}
        onMouseLeave={() => setDropdownService(false)}
      >
        <Link
          to="#"
          className="text-pink no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Services <i className="fas fa-caret-down" />
        </Link>
        {dropdownService && (
          <ul
            onClick={handleClick}
            className={
              click
                ? "hidden"
                : "bg-[#414757] absolute top-[60px] no-underline text-start"
            }
          >
            {SidebarData[1].subNav.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="block h-full w-full no-underline text-white px-4 py-2"
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
      <li
        className="flex items-center h-[60px]"
        onMouseEnter={() => setDropdownAbout(true)}
        onMouseLeave={() => setDropdownAbout(false)}
      >
        <Link
          to="#"
          className="text-pink no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          About Us <i className="fas fa-caret-down" />
        </Link>
        {dropdownAbout && (
          <ul
            onClick={handleClick}
            className={
              click
                ? "hidden"
                : "bg-[#414757] absolute top-[60px] no-underline text-start"
            }
          >
            {SidebarData[2].subNav.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="block h-full w-full no-underline text-white px-4 py-2"
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
      <li className="flex items-center h-[60px]">
        <Link
          to="/contact-us"
          className="text-pink no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Contact Us
        </Link>
      </li>
    </>
  );
}

export default Navbar;
