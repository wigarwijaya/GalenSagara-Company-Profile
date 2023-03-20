import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { navLang } from "../constants";

const Dropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)} className="">
        Dropdown
        {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </button>
      {isOpen && (
        <div>
          {navLang.map((item, i) => (
            <div key={i}>{item.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdowns;
