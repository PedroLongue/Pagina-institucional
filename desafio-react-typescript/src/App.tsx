import React, { FC } from "react";
import Header from "./components/header/Header";
import Footer from "./footer/Footer";
import NewsLetter from "./footer/Newsletter";
import "./Global.css";

const App: FC = () => {
  return (
    <div className="Container">
      <Header />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
