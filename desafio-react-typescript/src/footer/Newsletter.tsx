import React from "react";
import "./Newsletter.css";

const newsLetter = () => {
  return (
    <div className="Newsletter">
      <div className="Newsletter-Wrapper">
        <h3 className="Newsletter-title"> Assine nossa Newsletter</h3>
      </div>

      <div className="Newsletter-Account">
        <input className="Newsletter-Input" type="text" placeholder="E-mail" />
        <button className="Newsletter-Button" type="submit">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default newsLetter;
