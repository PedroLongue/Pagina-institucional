import { useState } from "react";

import "./styles/HeaderMobile.css";

import LogoM3 from "../../assets/images/header-logo-M3.png";
import LogoCart from "../../assets/images/header-logo-cart.png";
import SearchIcon from "../../assets/images/search-icon.png";
import BurguerIcon from "../../assets/images/navbar-icon.png";

const HeaderMobile = () => {
  const [navBar, setNavaBar] = useState(false);
  const [hoverCourse, setHoverCourse] = useState(false);
  const [hoverKnowMore, setHoverKnowMore] = useState(false);

  const toggleNavBar = () => {
    setNavaBar(!navBar);
    setHoverKnowMore(false);
    setHoverCourse(false);
  };

  const toggleHoverCourse = () => {
    setHoverCourse(!hoverCourse);
    setHoverKnowMore(false);
  };

  const toggleHoverKnowMore = () => {
    setHoverKnowMore(!hoverKnowMore);
    setHoverCourse(false);
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
        <div className="wrapper-header-page-infos-mobile">
          <button className="courses-infos-button" onClick={toggleHoverCourse}>
            <h3 className="courses-infos">CURSOS </h3>
          </button>
          <div
            className={
              hoverCourse
                ? "isOpened-mobile"
                : "courses-infos-subcategories-wrapper-mobile"
            }
          >
            <li className="courses-infos-category">
              <a className="courses-infos-category-link" href="#">
                Lorem Ipsum
              </a>
            </li>
            <li className="courses-infos-category">
              <a className="courses-infos-category-link" href="#">
                Lorem Ipsum
              </a>
            </li>
            <li className="courses-infos-category">
              <a className="courses-infos-category-link" href="#">
                Lorem Ipsum
              </a>
            </li>
            <li className="courses-infos-style-see-all-category">
              <a className="courses-infos-style-see-all" href="#">
                VER TODOS
              </a>
            </li>
          </div>
          <button className="know-more-button" onClick={toggleHoverKnowMore}>
            <h3 className="know-more-infos">SAIBA MAIS</h3>
          </button>
          <div
            className={
              hoverKnowMore
                ? "isOpened-mobile"
                : "know-more-subcategories-wrapper-mobile"
            }
          >
            <li className="courses-infos-category ">
              <a className="courses-infos-category-link" href="#">
                Lorem Ipsum 2
              </a>
            </li>
            <li className="courses-infos-category">
              <a className="courses-infos-category-link" href="#">
                Lorem Ipsum 2
              </a>
            </li>
            <li className="courses-infos-category">
              <a className="courses-infos-category-link" href="#">
                Lorem Ipsum 2
              </a>
            </li>
            <li className="courses-infos-style-see-all-category">
              <a className="courses-infos-style-see-all" href="#">
                VER TODOS
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderMobile };
