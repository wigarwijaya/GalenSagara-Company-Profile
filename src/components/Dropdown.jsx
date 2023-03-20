import React, { useState } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";


const Dropdown = ({ options, defaultOption, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      {/* <h2>Selected option: {selectedOption}</h2> */}
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
