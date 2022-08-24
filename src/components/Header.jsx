import React from "react";
import "../CSS/Header.css";
import burger from "../assets/BeefBurger.png";

function Header() {
  return (
    <div className="header">
      <h2>Plajm</h2>
      <img alt="burgericon" src={burger}></img>
    </div>
  );
}

export default Header;
