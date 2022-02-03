import React from "react";

import { NavLink } from "react-router-dom";

import "./styles/pagenav.css";

const PageNav = () => {
  return (
    <ul className="page-links-wrapper">
      <li className="page-links">
        <NavLink
          className={(navData) =>
            navData.isActive ? "page-link-active" : "page-link"
          }
          to="/"
        >
          Sobre
        </NavLink>
      </li>
      <li className="page-links">
        <NavLink
          className={(navData) =>
            navData.isActive ? "page-link-active" : "page-link"
          }
          to="/payments"
        >
          Forma de pagamento
        </NavLink>
      </li>
      <li className="page-links">
        <NavLink
          className={(navData) =>
            navData.isActive ? "page-link-active" : "page-link"
          }
          to="/delivery"
        >
          Entrega
        </NavLink>
      </li>
      <li className="page-links">
        <NavLink
          className={(navData) =>
            navData.isActive ? "page-link-active" : "page-link"
          }
          to="/refund"
        >
          Troca e Devolução
        </NavLink>
      </li>
      <li className="page-links">
        <NavLink
          className={(navData) =>
            navData.isActive ? "page-link-active" : "page-link"
          }
          to="/safety"
        >
          Segurança e Privacidade
        </NavLink>
      </li>
      <li className="page-links">
        <NavLink
          className={(navData) =>
            navData.isActive ? "page-link-active" : "page-link"
          }
          to="/contact"
        >
          Contato
        </NavLink>
      </li>
    </ul>
  );
};

export { PageNav };
