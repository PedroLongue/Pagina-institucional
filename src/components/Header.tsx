import React, {useState} from "react";

import "./Header.css";
import LogoM3 from "../images/m3-logo.png";
import Cart from "../images/cart-icon.png";
import Search from "../images/search-icon.png"

const Header = () => {
    const [openMenu, setOpenMenu] = useState (false);

    const clickOpenMenu = () => {
       openMenu ? setOpenMenu(false) : setOpenMenu(true);
   }

    return (
    <section>
        <div className="header-desktop-wrapper">
                <div className="header-desktop-wrapper-logo">
                    <a href="/">
                        <img src={LogoM3} alt="Logo M3" />
                    </a>
                    <a href="/">
                        <h1 className="header-desktop-wrapper-logo-title">academy</h1>
                    </a>
                </div>
                <div className="relative">
                    <div className="header-desktop-wrapper-search">
                        <button type="submit" className="header-desktop-wrapper-search-button">
                            <input className="header-desktop-wrapper-search-input" type="text" placeholder="Buscar..." />
                            <img className="header-desktop-wrapper-search-icon" alt="Buscar icon" src={Search} />
                        </button>
                    </div>
                </div>
                <div className="header-desktop-wrapper-icons">
                    <a href="/" target="_blank" rel="noreferrer">
                        <p className="header-desktop-wrapper-icons-login">ENTRAR</p>
                    </a>
                    <a href="/">
                        <img className="header-desktop-wrapper-icons-cart"src={Cart} alt="Cart" />
                    </a>
                </div>
        </div>
        <div className="sub-header-desktop-wrapper"></div>
            <div className="sub-header-desktop-info">
                <a href="/" target="_blank" rel='noreferrer'>
                    <h2 className="sub-header-desktop-info-text sub-header-desktop-info-text-01">CURSOS</h2>
                </a>
                <a href="/" target="_blank" rel='noreferrer'>
                    <h2 className="sub-header-desktop-info-text" >SAIBA MAIS</h2>
                </a>
            </div>
           <div className={openMenu ? "header-mobile-wrapper-menu-active" : "header-mobile-wrapper"}>
                <div className="header-mobile-title">
                    <button onClick={clickOpenMenu} className="header-mobile-menu">
                            <div className={openMenu ? "menu-icon-open menu-icon-open-line1" : "menu-icon-closed"}></div>
                            <div className={openMenu ? "menu-icon-open menu-icon-open-line1" : "menu-icon-closed"}></div>
                            <div className={openMenu ? "menu-icon-open menu-icon-open-line2" : "menu-icon-closed"}></div>
                    </button>
                    <div className={openMenu ? "background-active" : "background-disabled"}>
                        <div className={openMenu ? "menu-active" : "menu-disabled"}>
                            <h5 className="menu-titles menu-titles-line1" >Entrar</h5>
                            <h5 className="menu-titles menu-titles-line2" >Cursos</h5>
                            <h5 className="menu-titles" >Saiba Mais</h5>
                        </div>
                    </div>
                    <div className="header-mobile-logo">
                    <a href="/">   <img src={LogoM3} alt="Logo M3" />  </a>
                    <a href="/">    <h1 className="header-mobile-wrapper-logo-title">academy</h1></a>
                    </div>
                    <a href="/">
                        <img className="header-mobile-wrapper-icons-cart"src={Cart} alt="Cart" />
                    </a>
                </div>
                <div className="header-mobile-wrapper-search">
                    <input className="header-mobile-wrapper-search-input" type="text" name="input-mobile" placeholder="Buscar..." />
                    <a href="/">
                            <img className="header-mobile-wrapper-search-icon" alt="Search" src={Search} />
                        </a>
                </div>
           </div>
    </section>
)}

export {Header};
