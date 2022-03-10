import React from "react";

import "./styles/Button.css";

import WhatsappIcon from "../../assets/images/whatsapp-icon.png";
import UpArrowIcon from "../../assets/images/up-arrow-icon.png";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Button = () => {
  return (
    <div className="buttons-wrapper">
      <div className="button-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5511994338825"
          target="_blank"
        >
          <img src={WhatsappIcon} alt="Whatsapp" />
        </a>
      </div>
      <div className="button-up" onClick={scrollTop}>
        <img src={UpArrowIcon} alt="Voltar ao topo" />
      </div>
    </div>
  );
};
export { Button };
