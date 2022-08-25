import React from "react";
import "../CSS/Header.css";
import burger from "../assets/Burger.png";
import profile from "../assets/profile.png";

function Header({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };

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
          <li>
            <img
              onClick={handleClick}
              src={profile}
              alt="profileicon"
              style={{ width: "25px" }}
            />
          </li>
        </ul>
      </div>
      <div className="burger">
        <img alt="burgericon" src={burger}></img>
      </div>
    </div>
  );
}

export default Header;
