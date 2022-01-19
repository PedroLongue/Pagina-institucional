import React, { FC } from "react";
import TabLayout from "./components/conteudo/TabLayout";
import Header from "./components/header/Header";
import Footer from "./footer/Footer";
import "./Global.css";

const App: FC = () => {
  return (
    <div className="Container">
      <Header />
      <TabLayout />
      <Footer />
    </div>
  );
};

export default App;
