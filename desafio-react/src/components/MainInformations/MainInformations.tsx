import { useState } from "react";
import { MainInformationsContacts } from "./MainInformationsContacts";
import "./styles/MainInformations.css";

import HomeIcon from "../../assets/images/home-icon.png";
import ArrowIcon from "../../assets/images/arrow-icon.png";

interface Iprops {
  text: string;
  text2: string;
  text3: string;
}

const MainInformations = (props: Iprops) => {
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
            <button
              onClick={toggleAbout}
              className={
                showInformationsAbout
                  ? "main-informations-title-active"
                  : "main-informations-title-style"
              }
            >
              Sobre
            </button>
            <button
              onClick={togglePayment}
              className={
                showInformationsPayment
                  ? "main-informations-title-active"
                  : "main-informations-title-style"
              }
            >
              Forma de Pagamento
            </button>
            <button
              onClick={toggleDelivery}
              className={
                showInformationsDelivery
                  ? "main-informations-title-active"
                  : "main-informations-title-style"
              }
            >
              Entrega
            </button>
            <button
              onClick={toggleDevolution}
              className={
                showInformationsDevolution
                  ? "main-informations-title-active"
                  : "main-informations-title-style"
              }
            >
              Troca e Devolução
            </button>
            <button
              onClick={toggleSecurity}
              className={
                showInformationsSecurity
                  ? "main-informations-title-active"
                  : "main-informations-title-style"
              }
            >
              Segurança e Privacidade
            </button>
            <button
              className={
                showInformationsContact
                  ? "main-informations-title-active"
                  : "main-informations-title-style"
              }
              onClick={toggleContact}
            >
              Contato
            </button>
          </div>
          <div className="main-informations-details-wrapper">
            <div
              className={
                showInformationsAbout ? "main-informations-details" : "closed"
              }
            >
              <h2 className="main-informations-details-title">Sobre</h2>
              <span className="main-informations-details-text">
                {props.text}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text">
                {props.text2}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text main-informations-details-mobile">
                {props.text3}
              </span>
            </div>
            <div
              className={
                showInformationsPayment ? "main-informations-details" : "closed"
              }
            >
              <h2 className="main-informations-details-title">
                Forma de Pagamento
              </h2>
              <span className="main-informations-details-text">
                {props.text}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text">
                {props.text2}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text main-informations-details-mobile">
                {props.text3}
              </span>
            </div>
            <div
              className={
                showInformationsDelivery
                  ? "main-informations-details"
                  : "closed"
              }
            >
              <h2 className="main-informations-details-title">Entrega</h2>
              <span className="main-informations-details-text">
                {props.text}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text">
                {props.text2}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text main-informations-details-mobile">
                {props.text3}
              </span>
            </div>
            <div
              className={
                showInformationsDevolution
                  ? "main-informations-details"
                  : "closed"
              }
            >
              <h2 className="main-informations-details-title">
                Troca e Devolução
              </h2>
              <span className="main-informations-details-text">
                {props.text}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text">
                {props.text2}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text main-informations-details-mobile">
                {props.text3}
              </span>
            </div>
            <div
              className={
                showInformationsSecurity
                  ? "main-informations-details"
                  : "closed"
              }
            >
              <h2 className="main-informations-details-title">
                Segurança e Privacidade
              </h2>
              <span className="main-informations-details-text">
                {props.text}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text">
                {props.text2}
              </span>
              <br />
              <br />
              <span className="main-informations-details-text">
                {props.text3}
              </span>
            </div>
            <div
              className={
                showInformationsContact
                  ? "main-informations-details-contacts"
                  : "closed"
              }
            >
              <MainInformationsContacts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MainInformations };
