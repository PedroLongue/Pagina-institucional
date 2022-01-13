import React from "react";
import "../../Global.css";
import "./SearchBox.css";

const SearchBox = () => (
  <div className="SearchBox">
    <input className="SearchBox-input" type="text" placeholder="Buscar..." />
    <img
      src={require("../../imagens/searchbox.png")}
      alt="Imagem do SeacrhBox"
    />
  </div>
);

export default SearchBox;
