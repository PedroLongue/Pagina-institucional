import { log } from "console";
import React, { useState } from "react";
import "../../App.css";
import "../conteudo/Content.css";

import Contato from "./Contato";
import Sobre from "./Sobre";

function Content() {
  return (
    <div>
      <Sobre />
      <Contato />
    </div>
  );
}

export { Content };
