import React from "react";
import "../../Global.css";
import "./Header.css";
import { isMobile } from "react-device-detect";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
