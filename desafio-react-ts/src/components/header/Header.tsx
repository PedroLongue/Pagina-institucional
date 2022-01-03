import { log } from "console";
import React from "react";
import "./Header.css";

import LogoM3 from "./logoM3";
import SearchBox from "./SearchBox";
import Login from "./Login";
import CartButton from "./CartButton";
import Links from "./Links";

function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <LogoM3 />
        <SearchBox />
        <div className="Header-menu">
          <Login />
          <CartButton />
        </div>
      </div>

      <div className="Header-Links">
        <Links />
      </div>
    </div>
  );
}

export { Header };
