import React from "react";

import "./Header.css";
import LogoM3 from "../images/m3-logo.png";
import Cart from "../images/cart-icon.png";
import Search from "../images/search-icon.png"
import MenuIcon from "../images/menu-icon-mobile.png";

const Header = () => {
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
                        <input className="header-desktop-wrapper-search-input" type="text" placeholder="Buscar..." />
                        <a href="/">
                            <img className="header-desktop-wrapper-search-icon" alt="Search" src={Search} />
                        </a>
                    </div>
                </div>
                <div className="header-desktop-wrapper-icons">
                    <a href="/">
                        <p className="header-desktop-wrapper-icons-login">ENTRAR</p>
                    </a>
                    <a href="/">
                        <img className="header-desktop-wrapper-icons-cart"src={Cart} alt="Cart" />
                    </a>
                </div>
        </div>
        <div className="sub-header-desktop-wrapper"></div>
            <div className="sub-header-desktop-info">
                <a href="/">
                    <h2 className="sub-header-desktop-info-text sub-header-desktop-info-text-01">CURSOS</h2>
                </a>
                <a href="/">
                    <h2 className="sub-header-desktop-info-text" >SAIBA MAIS</h2>
                </a>
            </div>
           <div className="header-mobile-wrapper">
                <div className="header-mobile-title">
                    <a href="/">    <img className="header-mobile-menu" src={MenuIcon} alt="Menu Icon" />  </a>
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
