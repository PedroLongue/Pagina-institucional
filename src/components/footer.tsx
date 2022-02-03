import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
  const [toggleOpen1, setToggleOpen1] = useState(false);
  const [toggleOpen2, setToggleOpen2] = useState(false);
  const [toggleOpen3, setToggleOpen3] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="newsletter-wrapper">
        <div className="newsletter-email-wrapper">
          <h1 className="newsletter-title">ASSINE NOSSA NEWSLETTER</h1>
          <input
            className="newsletter-email-input"
            type="text"
            placeholder="E-mail"
          />
        </div>
        <button className="newsletter-email-button">ENVIAR</button>
      </div>
      <footer>
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <div
              className="footer-links-title-wrapper"
              onClick={() => setToggleOpen1(!toggleOpen1)}
            >
              <h3 className="footer-links-title">Institucional</h3>
              <div className="footer-links-open-mobile-wrapper">
                {toggleOpen1 ? (
                  <span className="footer-links-open-mobile">-</span>
                ) : (
                  <span className="footer-links-open-mobile">+</span>
                )}
              </div>
            </div>
            <div className={`footer-link-wrapper ${toggleOpen1 && "open"}`}>
              <Link onClick={scrollToTop} className="footer-link" to="/">
                Quem Somos
              </Link>
              <Link onClick={scrollToTop} className="footer-link" to="/safety">
                Política de Privacidade
              </Link>
              <Link onClick={scrollToTop} className="footer-link" to="/safety">
                Segurança
              </Link>
              <Link className="footer-link footer-link-underline" to="#">
                Seja um Revendedor
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <div
              className="footer-links-title-wrapper"
              onClick={() => setToggleOpen2(!toggleOpen2)}
            >
              <h3 className="footer-links-title">Dúvidas</h3>
              <div className="footer-links-open-mobile-wrapper">
                {toggleOpen2 ? (
                  <span className="footer-links-open-mobile">-</span>
                ) : (
                  <span className="footer-links-open-mobile">+</span>
                )}
              </div>
            </div>
            <div className={`footer-link-wrapper ${toggleOpen2 && "open"}`}>
              <Link
                onClick={scrollToTop}
                className="footer-link"
                to="/delivery"
              >
                Entrega
              </Link>
              <Link
                onClick={scrollToTop}
                className="footer-link"
                to="/payments"
              >
                Pagamento
              </Link>
              <Link onClick={scrollToTop} className="footer-link" to="/refund">
                Trocas e Devoluções
              </Link>
              <Link className="footer-link" to="#">
                Dúvidas Frequentes
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <div
              className="footer-links-title-wrapper"
              onClick={() => setToggleOpen3(!toggleOpen3)}
            >
              <h3 className="footer-links-title">Fale Conosco</h3>
              <div className="footer-links-open-mobile-wrapper">
                {toggleOpen3 ? (
                  <span className="footer-links-open-mobile">-</span>
                ) : (
                  <span className="footer-links-open-mobile">+</span>
                )}
              </div>
            </div>
            <div className={`footer-link-wrapper ${toggleOpen3 && "open"}`}>
              <span className="footer-link footer-link-customer-service">
                Atendimento ao Consumidor
              </span>
              <span className="footer-link">(11) 4159 9504</span>
              <span className="footer-link footer-link-customer-service">
                Atendimento Online
              </span>
              <span className="footer-link">(11) 99433-8825</span>
            </div>
          </div>
          <div className="footer-links-social-media-wrapper">
            <div>
              <a href="#">
                <img
                  className="footer-links-social-media"
                  src="./images/facebook-icon.png"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  className="footer-links-social-media"
                  src="./images/instagram-icon.png"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  className="footer-links-social-media"
                  src="./images/twitter-icon.png"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img
                  className="footer-links-social-media"
                  src="./images/youtube-icon.png"
                  alt="Youtube"
                />
              </a>
              <a href="#">
                <img
                  className="footer-links-social-media"
                  src="./images/linkedin-icon.png"
                  alt="Linkedin"
                />
              </a>
            </div>
            <span className="footer-links-social-media-link">
              www.loremipsum.com
            </span>
          </div>
        </div>
        <div className="footer-info-wrapper">
          <span className="footer-text footer-text-desktop">
            Lorem ipsum dolor sit amet, consectetur adipiscin <br /> elit, sed
            do eiusmod tempor
          </span>
          <div className="footer-cards">
            <img
              className="footer-card"
              src="./images/master-icon.png"
              alt="mastercard"
            />
            <img
              className="footer-card"
              src="./images/visa-icon.png"
              alt="visa"
            />
            <img
              className="footer-card"
              src="./images/american-express-icon.png"
              alt="american express"
            />
            <img
              className="footer-card"
              src="./images/elo-icon.png"
              alt="elo"
            />
            <img
              className="footer-card"
              src="./images/hiper-icon.png"
              alt="hipercard"
            />
            <img
              className="footer-card"
              src="./images/paypal-icon.png"
              alt="paypal"
            />
            <img
              className="footer-card"
              src="./images/boleto-icon.png"
              alt="boleto"
            />
            <img
              className="footer-vtex-certified"
              src="./images/vtex-certified-icon.png"
              alt=""
            />
          </div>
          <span className="footer-text footer-text-mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscin elit
          </span>
          <div>
            <img src="./images/m3-vtex-icon.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
