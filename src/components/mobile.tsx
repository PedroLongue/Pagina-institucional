import React, { useState } from "react";

import "./styles/mobile.css";

interface MobileProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Mobile = ({ isOpen, setIsOpen }: MobileProps) => {
  return (
    <div className={`mobile-wrapper ${isOpen && "open"}`}>
      <div className="mobile-content">
        <div className="mobile-header">
          <span className="span">MENU</span>
          <div className="mobile-header-buttons">
            <span className="mobile-login-button">ENTRAR</span>
            <span
              className="mobile-close-button"
              onClick={() => setIsOpen(false)}
            >
              X
            </span>
          </div>
        </div>
        <div className="mobile-links-wrapper">
          <a className="mobile-link" href="#" onClick={() => setIsOpen(false)}>
            CURSOS
          </a>
          <a className="mobile-link" href="#" onClick={() => setIsOpen(false)}>
            SAIBA MAIS
          </a>
        </div>
      </div>
      <div
        className={`mobile-overlay ${isOpen && "overlay-open"}`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export { Mobile };
