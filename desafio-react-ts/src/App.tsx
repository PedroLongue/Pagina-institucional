import { log } from "console";
import React from "react";
import "./App.css";

import { Header } from "./components/header/Header";
import { Content } from "./components/conteudo/Content";
import Newsletter from "./Pages/Newsletter";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="Container">
      <Header />
      <Content />
      <Newsletter />
      <Footer />
    </div>
  );
}

export { App };
