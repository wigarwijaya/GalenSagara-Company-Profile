import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Dropdowns from "./Dropdowns";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = ["Option 1", "Option 2", "Option 3"];
  const lang = ["EN", "INA", "THAI"];

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="w-[124px] h-[32px]">
        <Link to="/">
          <h1>Galen Sagara</h1>
        </Link>
      </div>
  
        {/* <Dropdown options={options} defaultOption={selectedOption} onSelect={handleSelect} /> */}
        <Dropdown
          options={lang}
          defaultOption={selectedOption}
          onSelect={handleSelect}
        />
        <Dropdowns />
    </nav>
  );
};

export default Navbar;
