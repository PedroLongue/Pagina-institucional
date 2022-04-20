import React from "react";
import "./styles/NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="news-letter-page">
        <div className="news-letter-title-wrapper">
          <div className="news-letter-title-content">
            <h1 className="news-letter-title">ASSINE NOSSA NEWSLETTER</h1>
          </div>
        </div>
        <div className="news-letter-wrapper">
          <input
            className="news-letter-input"
            type="text"
            placeholder="E-mail"
          />
          <button className="news-letter-button">ENVIAR</button>
        </div>
      </div>
    </>
  );
};

export { NewsLetter };
