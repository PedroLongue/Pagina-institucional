import React, { FC } from "react";
import Header from "./components/header/Header";
import Footer from "./footer/Footer";
import "./Global.css";

const App: FC = () => {
  return (
    <div className="Container">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
