import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropd } from ".";
import { SidebarData } from "../constants";

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
          className="text-primary no-underline px-4 py-2"
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
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Services <i className="fas fa-caret-down text-primary" />
        </Link>
        {dropdownService && (
          <Dropd handle={handleClick} dropdownData={SidebarData[1].subNav} />
        )}
      </li>
      <li
        className="flex items-center h-[60px]"
        onMouseEnter={() => setDropdownAbout(true)}
        onMouseLeave={() => setDropdownAbout(false)}
      >
        <Link
          to="#"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          About Us <i className="fas fa-caret-down text-primary" />
        </Link>
        {dropdownAbout && (
          <Dropd handle={handleClick} dropdownData={SidebarData[2].subNav} />
        )}
      </li>
      <li className="flex items-center h-[60px]">
        <Link
          to="/contact-us"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Contact Us
        </Link>
      </li>
    </>
  );
}

export default Navbar;
