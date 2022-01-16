import React, { FC, useState } from "react";
import "./Footer.css";

const FooterMobile: FC = () => {
  const [selected, setselected] = useState(``);

  const dropdownChange = (e: any, element: string) => {
    const parentElement = e.target.parentNode;
    if (parentElement.className.includes("selected")) {
      setselected(``);
    } else {
      setselected(element);
    }
  };

  return (
    <section className="Footer">
      <div className="Footer-Wrapper">
        <div
          className={`Footer-Institucional Footer-Dropdown ${
            "institucional" === selected ? "selected" : ""
          }`}
        >
          <h4
            className="Footer-Institucional-links"
            onClick={(e) => dropdownChange(e, "institucional")}
          >
            Institucional
          </h4>
          <div>
            <a href="./quem-somos" className="Footer-links">
              Quem Somos
            </a>
            <a href="./política-de-privacidade" className="Footer-links">
              Política de Privacidade
            </a>
            <a href="./segurança" className="Footer-links">
              Segurança
            </a>
            <a href="./seja-um-revendedor" className="Footer-links">
              Seja um Revendedor
            </a>
          </div>
        </div>

        <div
          className={`Footer-Duvidas Footer-Dropdown ${
            "duvidas" === selected ? "selected" : ""
          }`}
        >
          <h4
            className="Dúvidas-title"
            onClick={(e) => dropdownChange(e, "duvidas")}
          >
            Dúvidas
          </h4>
          <div>
            <a className="Dúvidas-links" href="./entrega">
              Entrega
            </a>
            <a className="Dúvidas-links" href="./pagamentos">
              Pagamentos
            </a>
            <a className="Dúvidas-links" href="./trocas-e-devoluçoes">
              Trocas e Devoluções
            </a>
            <a className="Dúvidas-links" href="./dúvidas-frequentes">
              Dúvidas Frequentes
            </a>
          </div>
        </div>

        <div
          className={`Footer-Contato Footer-Dropdown ${
            "contato" === selected ? "selected" : ""
          }`}
        >
          <h4
            className="Contato-Title"
            onClick={(e) => dropdownChange(e, "contato")}
          >
            Fale Conosco
          </h4>
          <div>
            <span className="Contato-links">Atendimento ao Consumidor</span>
            <p className="Contato-link">(11) 4159 9504</p>

            <span className="Contato-links">Atendimento Online</span>
            <p className="Contato-link">(11) 99433-8825</p>
          </div>
        </div>

        <div className="Footer-Socials">
          <img
            className="Socials-icon"
            src={require("../imagens/facebook-icon.png")}
            alt="Facebook"
          />

          <img
            className="Socials-icon"
            src={require("../imagens/instagram-icon.png")}
            alt="Instagram"
          />

          <img
            className="Socials-icon"
            src={require("../imagens/twitter-icon.png")}
            alt="Twitter"
          />

          <img
            className="Socials-icon"
            src={require("../imagens/youtube-icon.png")}
            alt="Youtube"
          />

          <img
            className="Socials-icon"
            src={require("../imagens/linkedIn-icon.png")}
            alt=""
          />
        </div>
      </div>

      <div className="Final-Footer">
        <img
          className="Final-Footer-image"
          src={require("../imagens/métodosdepagamento.png")}
          alt="Formas de Pagamento"
        />
        <p className="Final-Footer-Name">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <p className="Final-Footer-Name">elit, sed doeiusmod tempor</p>
        </p>

        <img
          className="Final-Footer-Company"
          src={require("../imagens/vtexm3-icon.png")}
          alt="Vtex e M3"
        />
      </div>
    </section>
  );
};

export default FooterMobile;
