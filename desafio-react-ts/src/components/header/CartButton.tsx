import React from "react";
import "./Header.css";

function CartButton() {
  return (
    <div>
      <img
        className="Header-Cart-Icon"
        src={require("../../components/header/img/cart.png")}
      ></img>
    </div>
  );
}

export default CartButton;
