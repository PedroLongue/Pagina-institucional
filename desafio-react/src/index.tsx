import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
