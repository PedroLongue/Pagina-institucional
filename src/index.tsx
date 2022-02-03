import React from "react";
import ReactDOM from "react-dom";
import "./global.css";

import { BrowserRouter, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PageNav } from "./components/pagenav";
import { Pages } from "./components/pageswitch";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <main>
      <div className="index-wrapper">
        <div className="page-name-wrapper">
          <a href="#">
            <img src="./images/home-icon.png" alt="Home" />
          </a>
          <img src="./images/arrow-right-icon.png" alt="arrow-right" />
          <span>INSTITUCIONAL</span>
        </div>
        <h1 className="page-title">INSTITUCIONAL</h1>
        <div className="page-wrapper">
          <PageNav />
          <div className="page-item-wrapper">
            <Pages />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
