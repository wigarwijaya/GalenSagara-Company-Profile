import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";

const SubMenu = ({ item, close }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const closeShowSubnav = (close) => {
    close();
    setSubnav(!subnav);
  };

  return (
    <>
      <Link
        to={item.path}
        onClick={item.subNav ? showSubnav : close}
        className="flex justify-between items-center p-5 h-[60px] text-lg list-none no-underline text-black hover:bg-[#c5c5c5] hover:cursor-pointer hover:border-l-4 hover:border-primary"
      >
        <div>
          <span className="ml-4">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav ? (
            <RiIcons.RiArrowDownSFill />
          ) : item.subNav ? (
            <RiIcons.RiArrowRightSFill />
          ) : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              onClick={close}
              className="bg-[#414757] h-[60px] pl-12 flex items-center no-underline text-lg text-[#f5f5f5] hover:bg-[#1b4332] hover:cursor-pointer"
            >
              <span className="ml-4">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
