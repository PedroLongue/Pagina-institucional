import React from "react";
import "./Header.css";

function SearchBox() {
  return (
    <div className="header-searchBox">
      <input
        className="header-searchBox-input"
        type="text"
        placeholder="Buscar"
      ></input>
      <img
        src={require("../../components/header/img/searchBox-icon.png")}
      ></img>
    </div>
  );
}

export default SearchBox;
