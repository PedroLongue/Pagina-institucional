import { HeaderDepartments } from "./HeaderDepartments";
import { HeaderMobile } from "./HeaderMobile";

import "./styles/HeaderDesktop.css";

import LogoM3 from "../../assets/images/header-logo-M3.png";
import LogoCart from "../../assets/images/header-logo-cart.png";
import SearchIcon from "../../assets/images/search-icon.png";

const Header = () => {
  return (
    <>
      <header className="header-page">
        <div className="wrapper-header-page-top-content">
          <button className="top-content-button">
            <img src={LogoM3} alt="Logo da Agência M3" />
          </button>
          <div className="wrapper-search-content">
            <input
              className="search-content-input"
              type="text"
              placeholder="Buscar..."
            />
            <button className="search-content-button">
              <img src={SearchIcon} alt="Icone de pesquisa" />
            </button>
          </div>

          <div className="wrapper-header-page-user-options">
            <h3 className="user-options-title">ENTRAR</h3>
            <button className="user-options-button">
              <img src={LogoCart} alt="Logo Carrinho de compras" />
            </button>
          </div>
        </div>

        <HeaderDepartments />
      </header>

      <HeaderMobile />
    </>
  );
};

export { Header };
