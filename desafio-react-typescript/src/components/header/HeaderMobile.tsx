import React from "react";
import "../../Global.css";
import "./Header.css";

import LogoM3 from "./LogoM3Academy";
import MiniCart from "../minicart/MiniCart";
import SearchBox from "../searchbox/SearchBox";

const HeaderMobile = () => {
  return (
    <header className="Header">
      <div className="Header-Top-Wrapper">
        <div className="Header-Logo">
          <div className="Header-Menu-mobile">
            <img src={require("../../imagens/menu-icon.png")} alt="Menu Icon" />
          </div>
          <LogoM3 />
          <MiniCart />
        </div>

        <div className="Header-Utils">
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
