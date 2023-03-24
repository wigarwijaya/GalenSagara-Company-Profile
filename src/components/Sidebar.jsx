import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../constants";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { companyLogo } from "../assets";

const Nav = styled.div`
  background: #e4e4e4;
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #EDEDED;
  width: 100vw;
  ${'' /* height: 100vh; */}
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const closeMobileMenu = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#E3682B" }}>
        <Nav>
          <CompanyIcon to="/"><img src={companyLogo} className="w-6 h-6 mr-2"/><p className="text-base text-[#E3682B]">GALEN SAGARA PERKASA</p></CompanyIcon>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu close={closeMobileMenu} item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
