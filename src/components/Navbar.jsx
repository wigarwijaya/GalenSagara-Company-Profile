import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="container">
        <Link to="/">
          <h1>Galen Sagara</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;