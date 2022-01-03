import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="Newsletter-wrapper"></div>
      <h3 className="Newsletter-title">Assine nossa Newsletter</h3>

      <div className="Newsletter-register">
        <input className="Newsletter-input" type="text" placeholder="E-mail" />
        <button className="Newsletter-submit" type="submit">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
