import { useState } from "react";
import "./styles/MainInformations.css";

import HomeIcon from "../../assets/images/home-icon.png";
import ArrowIcon from "../../assets/images/arrow-icon.png";

const MainInformations = (props) => {
  const [showInformationsAbout, setShowInformationsAbout] = useState(true);
  const [showInformationsPayment, setShowInformationsPayment] = useState(false);
  const [showInformationsDelivery, setShowInformationsDelivery] =
    useState(false);
  const [showInformationsDevolution, setShowInformationsDevolution] =
    useState(false);
  const [showInformationsSecurity, setShowInformationsSecurity] =
    useState(false);
  const [showInformationsContact, setShowInformationsContact] = useState(false);

  const toggleAbout = () => {
    setShowInformationsAbout(true);
    setShowInformationsContact(false);
    setShowInformationsDelivery(false);
    setShowInformationsDevolution(false);
    setShowInformationsPayment(false);
    setShowInformationsSecurity(false);
  };

  const togglePayment = () => {
    setShowInformationsPayment(true);
    setShowInformationsAbout(false);
    setShowInformationsContact(false);
    setShowInformationsDelivery(false);
    setShowInformationsDevolution(false);
    setShowInformationsSecurity(false);
  };

  const toggleDelivery = () => {
    setShowInformationsDelivery(true);
    setShowInformationsAbout(false);
    setShowInformationsContact(false);
    setShowInformationsDevolution(false);
    setShowInformationsPayment(false);
    setShowInformationsSecurity(false);
  };

  const toggleDevolution = () => {
    setShowInformationsDevolution(true);
    setShowInformationsAbout(false);
    setShowInformationsContact(false);
    setShowInformationsDelivery(false);
    setShowInformationsPayment(false);
    setShowInformationsSecurity(false);
  };

  const toggleSecurity = () => {
    setShowInformationsSecurity(true);
    setShowInformationsAbout(false);
    setShowInformationsContact(false);
    setShowInformationsDelivery(false);
    setShowInformationsDevolution(false);
    setShowInformationsPayment(false);
  };

  const toggleContact = () => {
    setShowInformationsContact(true);
    setShowInformationsAbout(false);
    setShowInformationsDelivery(false);
    setShowInformationsDevolution(false);
    setShowInformationsPayment(false);
    setShowInformationsSecurity(false);
  };

  return (
    <>
      <div className="main-informations-page">
        <div className="main-informations-icons-wrapper">
          <img
            className="home-icon"
            src={HomeIcon}
            alt="Icone da pádina principal"
          />
          <img className="arrow-icon" src={ArrowIcon} alt="Icone seta" />
          <span className="main-informations-icons-title">INSTITUCIONAL</span>
        </div>
        <div className="main-informations-title">
          <h1>INSTITUCIONAL</h1>
        </div>
        <div className="main-informations-wrapper">
          <div className="main-informations-title-wrapper">
            <button className="main-informations-title-style">Sobre</button>
            <button className="main-informations-title-style">
              Forma de Pagamento
            </button>
            <button className="main-informations-title-style">Entrega</button>
            <button className="main-informations-title-style">
              Troca e Devolução
            </button>
            <button className="main-informations-title-style">
              Segurança e Privacidade
            </button>
            <button className="main-informations-title-style">Contato</button>
          </div>
          <div className="main-informations-details-wrapper">
            <div className="main-informations-details">
              <h2 className="main-informations-details-title">Sobre</h2>
              <p className="main-informations-details-text">{props.text}</p>
            </div>
            <div className="main-informations-details">
              <h2 className="main-informations-details-title"></h2>
              <p className="main-informations-details-text"></p>
            </div>
            <div className="main-informations-details">
              <h2 className="main-informations-details-title"></h2>
              <p className="main-informations-details-text"></p>
            </div>
            <div className="main-informations-details">
              <h2 className="main-informations-details-title"></h2>
              <p className="main-informations-details-text"></p>
            </div>
            <div className="main-informations-details">
              <h2 className="main-informations-details-title"></h2>
              <p className="main-informations-details-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MainInformations };
