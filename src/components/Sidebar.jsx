import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../constants";
import { Nav, SubMenu } from ".";
import { IconContext } from "react-icons/lib";
import { companyLogo } from "../assets";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const closeMobileMenu = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#1b4332" }}>
        <div className="flex justify-between items-center sticky top-0 z-20 h-[60px] w-screen bg-[#e4e4e4]">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex justify-center items-center ml-8 text-2xl h-[60px]"
          >
            <img src={companyLogo} className="w-6 h-6 mr-2" />
            <p className="text-base font-medium text-primary">
              GALEN SAGARA PERKASA
            </p>
          </Link>
          <div className="hidden ss:flex flex-col justify-center items-center">
            <ul className="flex flex-row justify-center items-center gap-1 mr-8">
              <Nav/>
              {/* {SidebarData.map((item, index) => {
                return <Nav close={closeMobileMenu} item={item} key={index} />;
              })} */}
            </ul>
          </div>
          {!sidebar ? (
            <Link
              to="#"
              className="flex justify-end items-center h-[60px] text-2xl mr-8 ss:hidden"
            >
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          ) : (
            <Link
              to="#"
              className="flex justify-end items-center h-[60px] text-2xl mr-8"
            >
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          )}
        </div>
        {sidebar && (
          <nav
            className={`bg-[#EDEDED] flex justify-center fixed w-screen h-screen top-0 ${(
              sidebar
            ) => (sidebar ? "left-0" : "-left-full")} z-10 sidebar`}
          >
            <div className="w-full">
              <Link
                to="#"
                className="flex justify-end items-center h-[60px] text-2xl mr-8"
              >
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu close={closeMobileMenu} item={item} key={index} />
                );
              })}
            </div>
          </nav>
        )}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
