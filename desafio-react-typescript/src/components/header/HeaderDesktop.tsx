import React from "react";
import "../../Global.css";
import "./Header.css";

import Links from "./Links";
import LogoM3 from "./LogoM3Academy";
import MiniCart from "../minicart/MiniCart";
import SearchBox from "../searchbox/SearchBox";
import Account from "./Account";

const HeaderDesktop = () => {
  return (
    <header className="Header">
      <div className="Header-Top-Wrapper">
        <div className="Header-Logo">
          <LogoM3 />
          <SearchBox />
        </div>
        <div className="Header-Utils">
          <Account />
          <MiniCart />
        </div>
      </div>

      <div className="Header-Bottom-Wrapper">
        <Links />
      </div>
    </header>
  );
};

export default HeaderDesktop;
