import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { navLinks } from "../constants";
import "./ServiceMenus.css";

function ServiceMenus(props) {
  const [click, setClick] = useState(false);
//   const [service, setService] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setService(false);
//     } else {
//       setService(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setService(false);
//     } else {
//       setService(false);
//     }
//   };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "service-menu active" : "service-menu"}
      >
        <li
          className="service-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/services"
            className="service-links"
            onClick={closeMobileMenu}
          >
            Baru Services <i className="fas fa-caret-down i-services" />
          </Link>
          {service && <Dropd list={serviceLinks} />}
        </li>
        <li className="service-item">
          <Link
            to="/consultants"
            className="service-links"
            onClick={closeMobileMenu}
          >
            Baru Consultants
          </Link>
        </li>
        <li className="service-item">
          <Link
            to="/projects"
            className="service-links"
            onClick={closeMobileMenu}
          >
            Baru Projects
          </Link>
        </li>
        <li className="service-item">
          <Link
            to="/products"
            className="service-links"
            onClick={closeMobileMenu}
          >
            Baru Products <i className="fas fa-caret-down i-products" />
          </Link>
        </li>
        <li className="service-item">
          <Link
            to="/about-us"
            className="service-links"
            onClick={closeMobileMenu}
          >
            Baru About Us <i className="fas fa-caret-down i-about-us" />
          </Link>
        </li>
        <li className="service-item">
          <Link
            to="/contact-us"
            className="service-links"
            onClick={closeMobileMenu}
          >
            Baru Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}

export default ServiceMenus;
