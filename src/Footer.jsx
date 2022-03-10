import React from "react";
import './Footer.css'

import Facebook from "./images/facebook-icon.png";
import Instagram from "./images/instagram-icon.png";
import Twitter from "./images/twitter-icon.png";
import Youtube from "./images/youtube-icon.png";
import Linkedin from "./images/linkedin-icon.png";
import Mastercard from "./images/mastercard-icon.png";
import Visa from "./images/visa-icon.png";
import American from "./images/american-icon.png";
import Elo from "./images/elo-icon.png";
import Hipercard from "./images/hipercard-icon.png";
import Paypal from "./images/paypal-icon.png";
import Boleto from "./images/boleto-icon.png";
import VtexPci from "./images/vtex-pci-200-icon.png";
import VtexIcon from "./images/vtex-icon.png";
import M3FooterIcon from "./images/m3-footer-icon.png";

const Footer = () => {
    return (
        <section>
            <section className="footer">
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
            <div className="footer-icons-bottom">
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
        </section>
    )
}

export {Footer};
