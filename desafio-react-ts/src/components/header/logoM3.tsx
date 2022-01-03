import React from "react";
import "./Header.css";

function LogoM3() {
  return (
    <div>
      <img
        className="header-logo"
        src={require("../../components/header/img/m3-academy.png")}
      ></img>
    </div>
  );
}

export default LogoM3;
