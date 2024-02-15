import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Dropd({ dropdownData }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const { t } = useTranslation("common");

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? "hidden"
            : "bg-[#414757] absolute top-[60px] no-underline text-start"
        }
      >
        {dropdownData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="block hover:bg-primary h-full w-full no-underline text-white px-4 py-2"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {/* {item.title} */}
                {t(item.title, { title: item.title })}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropd;
