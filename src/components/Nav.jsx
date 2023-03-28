import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { Dropd } from ".";

function Navbar({ item, close }) {
  const [click, setClick] = useState(false);
  const [service, setService] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <li className="nav-item">
        <Link to={item.path} className="nav-links">
          {item.title} <i className="fas fa-caret-down i-services" />
        </Link>
      </li>
    </>
  );
}

export default Navbar;
