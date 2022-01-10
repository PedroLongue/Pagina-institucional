import React from "react";
import "./Footer.css";

//Responsivo do footer esta com overflow

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-wrapper">
          <div className="institucional">
            <h4 className="footer-links-title">Institucional</h4>
            <a href="./quem-somos" className="footer-links">
              Quem Somos
            </a>
            <a href="./politica-de-privacidade" className="footer-links">
              Política de Privacidade
            </a>
            <a href="./segurança" className="footer-links">
              Segurança
            </a>
            <a href="./seja-um-revendedor" className="footer-links">
              Seja um Revendedor
            </a>
          </div>
          <div className="dúvidas">
            <h4 className="footer-links-title">Dúvidas</h4>
            <a href="./entrega" className="footer-links">
              Entrega
            </a>
            <a href="./pagamento" className="footer-links">
              Pagamento
            </a>
            <a href="./trocas-e-devoluções" className="footer-links">
              Trocas e Devoluções
            </a>
            <a href="./dúvidas-frequentes" className="footer-links">
              Dúvidas Frequentes
            </a>
          </div>
          <div className="contato">
            <h4 className="footer-links-title">Fale Conosco</h4>
            <span className="footer-links">Atendimento ao Consumidor</span>
            <p className="footer-links">(11) 4159-9504</p>
            <span className="footer-links">Atendimento Online</span>
            <p className="footer-links">(11) 99433-8825</p>
          </div>
          <div className="social-media">
            <img
              className="social-media--icon"
              src={require("./img/facebook.png")}
            ></img>
            <img
              className="social-media--icon"
              src={require("./img/instagram.png")}
            ></img>
            <img
              className="social-media--icon"
              src={require("./img/linkedin.png")}
            ></img>
            <img
              className="social-media--icon"
              src={require("./img/twitter.png")}
            ></img>
            <img
              className="social-media--icon"
              src={require("./img/youtube.png")}
            ></img>
            <p>www.loremipsum.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <p className="footer-bar--name">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <p className="footer-bar--name">elit, sed doeiusmod tempor</p>
        </p>
        <img
          className="footer-bar-image"
          src={require("./img/credit-cards.png")}
        ></img>
        <img
          className="social-media--icon"
          src={require("./img/sponsors.png")}
        ></img>
      </div>
    </div>
  );
}

export default Footer;
