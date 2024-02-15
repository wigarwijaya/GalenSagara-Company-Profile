import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropd } from ".";
import { SidebarData } from "../constants";
import { useTranslation } from "react-i18next";

function Navbar({ item, close }) {
  const [click, setClick] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [t, i18n] = useTranslation("common");
  const [selectLang, setSelectLang] = useState(i18n.language);
  const handleChange = (language) => {
    i18n.changeLanguage(language);
    setSelectLang(language);
  };

  return (
    <>
      <li className="flex items-center h-[60px]">
        <Link
          to="/"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          {t("nav.home")}
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
          {t("nav.services")} <i className="fas fa-caret-down text-primary" />
        </Link>
        {dropdownService && (
          <Dropd handle={handleClick} dropdownData={SidebarData[1].subNav} />
   
        )}
        {/* {t("construction",{title:SidebarData[1].subNav})} */}
        {/* <div>{SidebarData[1].subNav}</div> */}
        {console.log(SidebarData[1].subNav[0].title)}
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
          {t("nav.aboutUs")} <i className="fas fa-caret-down text-primary" />
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
          {t("nav.contactUs")}
        </Link>
      </li>
      <div>
        <label style={{ marginRight: "10px" }} htmlFor="language">
          {t("language-selector.languages.text")}
        </label>

        <select
          id="language"
          value={selectLang}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="en">{t("language-selector.languages.en")}</option>
          <option value="id">{t("language-selector.languages.id")}</option>
        </select>
      </div>
    </>
  );
}

export default Navbar;
