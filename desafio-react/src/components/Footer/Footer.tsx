import "./styles/Footer.css";

import paymentMethod from "../../assets/images/payment-method.png";
import copyRight from "../../assets/images/copy-right.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-page">
        <div className="footer-text-wrapper">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
          <span>elit, sed do eiusmod tempor</span>
          <img
            className="payment-method-mobile"
            src={paymentMethod}
            alt="Métodos de pagemento"
          />
        </div>
        <div>
          <span className="footer-text-mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </span>
          <img
            className="payment-method-desktop"
            src={paymentMethod}
            alt="Métodos de pagemento"
          />
        </div>
        <div>
          <img src={copyRight} alt="Copy right" />
        </div>
      </footer>
    </>
  );
};

export { Footer };
