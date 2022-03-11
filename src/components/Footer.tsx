import React, {useState} from "react";
import './Footer.css'

import Facebook from "../images/facebook-icon.png";
import Instagram from "../images/instagram-icon.png";
import Twitter from "../images/twitter-icon.png";
import Youtube from "../images/youtube-icon.png";
import Linkedin from "../images/linkedin-icon.png";
import Mastercard from "../images/mastercard-icon.png";
import Visa from "../images/visa-icon.png";
import American from "../images/american-icon.png";
import Elo from "../images/elo-icon.png";
import Hipercard from "../images/hipercard-icon.png";
import Paypal from "../images/paypal-icon.png";
import Boleto from "../images/boleto-icon.png";
import VtexPci from "../images/vtex-pci-200-icon.png";
import VtexIcon from "../images/vtex-icon.png";
import M3FooterIcon from "../images/m3-footer-icon.png";
import MastercardMobile from "../images/mastercard-icon-mobile.png";
import VisaMobile from "../images/visa-icon-mobile.png";
import AmericanMobile from "../images/american-icon-mobile.png";
import EloMobile from "../images/elo-icon-mobile.png";
import HipercardMobile from "../images/hipercard-icon-mobile.png";
import PaypalMobile from "../images/paypal-icon-mobile.png";
import BoletoMobile from "../images/boleto-icon-mobile.png";
import VtexPciMobile from "../images/vtex-pci-200-mobile.png";

const Footer = () => {

    const [Institutional, setInstitutional] = useState(false);
    const [Query, setQuery] = useState(false);
    const [Questions, setQuestions] = useState(false);
        const openInstitutional = () => {
            Institutional ? setInstitutional(false) : setInstitutional(true);
        }
        const openQuery = () => {
            Query ? setQuery(false) : setQuery(true);
        }
        const openQuestions = () => {
            Questions ? setQuestions(false) : setQuestions(true);
        }
    return (
        <section>
            <section className="footer-desktop">
                <div className="footer-wrapper">
                    <div className="footer-wrapper-column ">
                            <h3 className="footer-wrapper-title">INSTITUCIONAL</h3>
                        <a className="footer-wrapper-info" href="/">
                            <span className="footer-wrapper-info-subtitle" >Quem Somos</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Política de Privacidade</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Segurança</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span className="footer-wrapper-info-line">Seja um Revendedor</span>
                        </a>
                    </div>
                    <div className="footer-wrapper-column footer-wrapper-column2">
                            <h3 className="footer-wrapper-title">DÚVIDAS</h3>
                        <a className="footer-wrapper-info" href="/">
                            <span>Entrega</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Pagamento</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Troca e Devoluções</span>
                            </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Dúvidas Frequentes</span>
                        </a>
                    </div>
                    <div className="footer-wrapper-column">

                        <h3 className="footer-wrapper-title">FALE CONOSCO</h3>

                        <span className="footer-wrapper-info-bold1" >Atendimento ao Consumidor</span>

                        <a className="footer-wrapper-info" href="/">
                            <span>(11) 4159 9504</span>
                        </a>

                            <span className="footer-wrapper-info-bold2">Atendimento Online</span>

                        <a className="footer-wrapper-info" href="/">
                            <span>(11) 99433-8825 </span>
                        </a>
                    </div>
                    <div className="footer-wrapper-column footer-wrapper-column4">
                        <div className="footer-wrapper-icons">
                            <a href="/">
                                <img className="footer-wrapper-icons-click" src={Facebook} alt="Facebook icon" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click footer-icon-instagram" src={Instagram} alt="" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click" src={Twitter} alt="" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click footer-icon-youtube" src={Youtube} alt="" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click" src={Linkedin} alt="" />
                            </a>
                        </div>
                            <a href="/">
                                <span className="footer-wrapper-icons-title">www.loremipsum.com</span>
                            </a>
                    </div>
                </div>
            </section>
            <div className="footer-icons-bottom-desktop">
                <p className="footer-icons-text">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing<br/>
                    Elit, Sed Do Eiusmod Tempor
                </p>
                <div className="footer-icons-wrapper">
                    <img className="footer-icons-payment" src={Mastercard} alt="Logo Mastercard" />
                    <img className="footer-icons-payment" src={Visa} alt="Logo Visa" />
                    <img className="footer-icons-payment" src={American} alt="Logo American Express" />
                    <img className="footer-icons-payment" src={Elo}alt="Logo Elo" />
                    <img className="footer-icons-payment" src={Hipercard} alt="Logo Hipercard" />
                    <img className="footer-icons-payment" src={Paypal} alt="Logo Paypal" />
                    <img className="footer-icons-payment" src={Boleto} alt="Logo Boleto" />
                    <div className="footer-icons-divider"/>
                    <img className="footer-icons-vtex-pci" src={VtexPci} alt="Logo Vtex Pci" />
                </div>
                <div className="footer-icons-wrapper">
                    <a className="footer-icons-wrapper-vtex" href="https://vtex.com/">
                        <p className="footer-icons-vtex-text">Powered by</p>
                        <img className="footer-icons-vtex-img" src={VtexIcon} alt="Logo Vtex" />
                    </a>
                    <a className="footer-icons-wrapper-logo" href="https://m3ecommerce.com/">
                        <p className="footer-icons-logo-text">Developed by</p>
                        <img className="footer-icons-logo-img" src={M3FooterIcon} alt="Logo M3" />
                    </a>

                </div>
            </div>
            <section className="footer-mobile">
                <div className="footer-button-mobile-institutional">
                    <h5 className="footer-button-title-mobile">Institucional</h5>
                    <button onClick={openInstitutional} className="footer-button-icon-mobile">
                        <div className={Institutional ? "footer-button-icon-mobile-no-add" : "footer-button-icon-mobile-add"}></div>
                        <div className="footer-button-icon-mobile-remove"></div>
                    </button>
                </div>
                    <div className={Institutional ? "footer-wrapper-infos" : "footer-wrapper-no-infos"}>
                         <a className="footer-wrapper-info" href="/">
                            <span className="footer-wrapper-info-subtitle" >Quem Somos</span>
                        </a>

                        <a className="footer-wrapper-info" href="/">
                            <span>Política de Privacidade</span>
                        </a>

                        <a className="footer-wrapper-info" href="/">
                            <span>Segurança</span>
                        </a>

                        <a className="footer-wrapper-info" href="/">
                            <span className="footer-wrapper-info-line">Seja um Revendedor</span>
                        </a>

                    </div>
                <div className="footer-button-mobile-institutional">
                    <h5 className="footer-button-title-mobile">Dúvidas</h5>
                    <button onClick={openQuery} className="footer-button-icon-mobile">
                    <div className={Query ? "footer-button-icon-mobile-no-add" : "footer-button-icon-mobile-add"}></div>
                        <div className="footer-button-icon-mobile-remove"></div>
                    </button>
                </div>
                <div className={Query ? "footer-wrapper-infos" : "footer-wrapper-no-infos"}>
                     <a className="footer-wrapper-info" href="/">
                            <span>Entrega</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Pagamento</span>
                        </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Troca e Devoluções</span>
                            </a>
                        <a className="footer-wrapper-info" href="/">
                            <span>Dúvidas Frequentes</span>
                    </a>
                </div>
                <div className="footer-button-mobile-institutional">
                    <h5 className="footer-button-title-mobile">Fale Conosco</h5>
                    <button onClick={openQuestions} className="footer-button-icon-mobile">
                    <div className={Questions ? "footer-button-icon-mobile-no-add" : "footer-button-icon-mobile-add"}></div>
                        <div className="footer-button-icon-mobile-remove"></div>
                    </button>
                </div>
                <div className={Questions ? "footer-wrapper-infos" : "footer-wrapper-no-infos"}>

                    <span className="footer-wrapper-info-bold1"> Atendimento ao Consumidor </span>

                    <a className="footer-wrapper-info" href="/">
                        <span>(11) 4159 9504</span>
                    </a>

                        <span className="footer-wrapper-info-bold2">Atendimento Online</span>

                    <a className="footer-wrapper-info" href="/">
                        <span> (11) 99433-8825 </span>
                    </a>
                </div>
                    <div className="footer-wrapper-icons">
                            <a href="/">
                                <img className="footer-wrapper-icons-click" src={Facebook} alt="Facebook icon" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click footer-icon-instagram" src={Instagram} alt="" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click" src={Twitter} alt="" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click footer-icon-youtube" src={Youtube} alt="" />
                            </a>
                            <a href="/">
                                <img className="footer-wrapper-icons-click" src={Linkedin} alt="" />
                            </a>
                        </div>
                        <div className="footer-mobile-icons">
                            <div className="footer-icons-wrapper">
                                <img className="footer-icons-payment" src={MastercardMobile} alt="Logo Mastercard" />
                                <img className="footer-icons-payment" src={VisaMobile} alt="Logo Visa" />
                                <img className="footer-icons-payment" src={AmericanMobile} alt="Logo American Express" />
                                <img className="footer-icons-payment" src={EloMobile}alt="Logo Elo" />
                                <img className="footer-icons-payment" src={HipercardMobile} alt="Logo Hipercard" />
                                <img className="footer-icons-payment" src={PaypalMobile} alt="Logo Paypal" />
                                <img className="footer-icons-payment" src={BoletoMobile} alt="Logo Boleto" />
                                <div className="footer-icons-divider"/>
                                <img className="footer-icons-vtex-pci" src={VtexPciMobile} alt="Logo Vtex Pci" />
                        </div>
                            <p className="footer-text-mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</p>
                        <div className="footer-icons-wrapper-mobile">
                            <a className="footer-icons-wrapper-vtex" href="https://vtex.com/">
                                <p className="footer-icons-vtex-text">Powered by</p>
                                <img className="footer-icons-vtex-img" src={VtexIcon} alt="Logo Vtex" />
                            </a>
                            <a className="footer-icons-wrapper-logo" href="https://m3ecommerce.com/">
                                <p className="footer-icons-logo-text">Developed by</p>
                                <img className="footer-icons-logo-img" src={M3FooterIcon} alt="Logo M3" />
                            </a>
                        </div>
                        </div>
            </section>
        </section>
    )
}

export {Footer};
