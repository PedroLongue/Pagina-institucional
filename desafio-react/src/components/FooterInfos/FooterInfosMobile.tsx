import React, { useState } from "react";

import facebookIcon from "../../assets/images/facebook-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";
import youtubeIcon from "../../assets/images/youtube-icon.png";
import linkedinIcon from "../../assets/images/linkedin-icon.png";

const FooterInfosMobile = () => {
  const [showHideInstitutional, setShowHideInstitutional] = useState(false);
  const [showHideQuestions, setShowhideQuestions] = useState(false);
  const [showHideTelllUs, setShowhideTelllUs] = useState(false);

  const toggleInstitutional = () => {
    setShowHideInstitutional(!showHideInstitutional);
  };

  const toggleQuestions = () => {
    setShowhideQuestions(!showHideQuestions);
  };

  const toggleTellUs = () => {
    setShowhideTelllUs(!showHideTelllUs);
  };

  return (
    <>
      <div className="footer-infos-mobile-wrapper">
        <div className="footer-infos-institutional-wrapper">
          <button className="footer-infos-button" onClick={toggleInstitutional}>
            <h3 className="footer-infos-title">Institucional </h3>
            <span>+</span>
          </button>
          <div
            className={
              showHideInstitutional
                ? "opened-institutional"
                : "closed-institutional"
            }
          >
            <p className="footer-infos-text">Quem Somos</p>
            <p className="footer-infos-text">Política de Privacidade</p>
            <p className="footer-infos-text">Segurança</p>
            <p className="footer-infos-text">Seja um Revendedor</p>
          </div>
        </div>
        <div className="footer-infos-questions-wrapper">
          <button className="footer-infos-button" onClick={toggleQuestions}>
            <h3 className="footer-infos-title">Dúvidas </h3>
            <span>+</span>
          </button>
          <div
            className={
              showHideQuestions ? "opened-questions" : "closed-questions"
            }
          >
            <p className="footer-infos-text">Entrega</p>
            <p className="footer-infos-text">Pagamento</p>
            <p className="footer-infos-text">Trocas e Devoluções</p>
            <p className="footer-infos-text">Dúvidas Frequentes</p>
          </div>
        </div>
        <div className="footer-infos-tell-us-wrapper">
          <button className="footer-infos-button" onClick={toggleTellUs}>
            <h3 className="footer-infos-title">Fale Conosco </h3>
            <span>+</span>
          </button>
          <div
            className={showHideTelllUs ? "opened-tell-us" : "closed-tell-us"}
          >
            <p className="footer-infos-text">
              <strong>Atendimento ao Consumidor</strong>
            </p>
            <p className="footer-infos-text">(11)4159 9504</p>
            <p className="footer-infos-text">
              <strong>Atendimento Online</strong>
            </p>
            <p className="footer-infos-text">(11)99433-8825</p>
          </div>
        </div>
        <div className="footer-infos-links-wrapper">
          <div className="footer-infos-social-media">
            <li className="footer-infos-facebook">
              <a href="/">
                <img src={facebookIcon} alt="Icone do facebook" />
              </a>
            </li>
            <li className="footer-infos-instagram">
              <a href="/">
                <img src={instagramIcon} alt="Icone do instagram" />
              </a>
            </li>
            <li className="footer-infos-twitter">
              <a href="/">
                <img src={twitterIcon} alt="Icone do twitter" />
              </a>
            </li>
            <li className="footer-infos-youtube">
              <a href="/">
                <img src={youtubeIcon} alt="Icone do youtube" />
              </a>
            </li>
            <li className="footer-infos-linkedin">
              <a href="/">
                <img src={linkedinIcon} alt="Icone do linkedin" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export { FooterInfosMobile };
