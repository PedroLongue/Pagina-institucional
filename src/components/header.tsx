import React, { useState } from "react";

import { Mobile } from "./mobile";

import "./styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header-top">
          <img
            className="mobile-icon"
            src="/images/mobile-icon.png"
            alt=""
            onClick={() => setIsOpen(true)}
          />
          <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
          <a className="logo" href="#">
            <img
              className="logo-image"
              src="./images/m3-academy-logo.png"
              alt="m3 academy logo"
            />
          </a>
          <div className="search-desktop-wrapper">
            <input
              className="search-input"
              type="text"
              placeholder="Buscar..."
            />
            <img
              className="search-icon"
              src="./images/search-icon.png"
              alt=""
            />
          </div>
          <div className="user-wrapper">
            <a className="user-login" href="#">
              ENTRAR
            </a>
            <img className="cart-icon" src="./images/cart-icon.png" alt="" />
          </div>
        </div>
        <div className="search-mobile-wrapper">
          <input className="search-input" type="text" placeholder="Buscar..." />
          <img className="search-icon" src="./images/search-icon.png" alt="" />
        </div>
        <nav className="header-nav">
          <div className="header-nav-wrapper">
            <a className="header-nav-link" href="#">
              CURSOS
            </a>
            <a className="header-nav-link" href="#">
              SAIBA MAIS
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
