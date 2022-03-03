import React from "react";

import "./App.css";
import { Header } from "./components/Header";
import { SubMenu } from "./components/Submenu";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <div>
      <Header />
      <SubMenu />
      <Newsletter />
    </div>
  );
}

export default App;
