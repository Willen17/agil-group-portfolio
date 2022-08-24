import React from "react";
import "../CSS/Header.css";
import burger from "../assets/Burger.png";

function Header() {
  return (
    <div className="header">
      <div>
        <h2>Plajm</h2>
      </div>
      <div className="header-desktop">
        <ul>
          <li>About us</li>
          <li>Competences</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="burger">
        <img alt="burgericon" src={burger}></img>
      </div>
    </div>
  );
}

export default Header;
