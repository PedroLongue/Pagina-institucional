import { useState } from "react";
import { HeaderDepartments } from "./HeaderDepartments";

import "./styles/HeaderMobile.css";

import LogoM3 from "../../assets/images/header-logo-M3.png";
import LogoCart from "../../assets/images/header-logo-cart.png";
import SearchIcon from "../../assets/images/search-icon.png";
import BurguerIcon from "../../assets/images/navbar-icon.png";

const HeaderMobile = () => {
  const [navBar, setNavaBar] = useState(false);

  const toggleNavBar = () => {
    setNavaBar(!navBar);
  };

  return (
    <div className="wrapper-header-mobile">
      <header className="header-mobile-page">
        <div className="wrapper-navbar-icon-content">
          <button className="navbar-icon-content" onClick={toggleNavBar}>
            <img src={BurguerIcon} alt="Icone para a navbar mobile" />
          </button>
          <button className="M3-icon-content">
            <img src={LogoM3} alt="Logo da Agência M3" />
          </button>
          <button className="cart-icon-content">
            <img src={LogoCart} alt="Logo Carrinho de compras" />
          </button>
        </div>
        <div className="wrapper-search-content-mobile">
          <input
            className="search-content-input-mobile"
            type="text"
            placeholder="Buscar..."
          />
          <button className="search-content-button-mobile">
            <img src={SearchIcon} alt="Icone de pesquisa" />
          </button>
        </div>
      </header>
      <div className={navBar ? "navbar-opened" : "navbar-wrapper"}>
        <HeaderDepartments />
      </div>
    </div>
  );
};

export { HeaderMobile };
