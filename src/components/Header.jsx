import React, { useState } from "react";
import "../CSS/Header.css";
import burger from "../assets/Header/burgermenu.svg";
import { Link, Element } from "react-scroll";
import profile from "../assets/profile.png";

function Header({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };

  const [nav, setNav] = useState(false);

  const shownav = () => {
    if (nav == false) {
      setNav(true);
    } else {
      setNav(false);
    }
    console.log(nav);
  };

  return (
    <Element name="start">
      <div className="header">
        <div>
          <Link
            onClick={shownav}
            spy={true}
            smooth={true}
            duration={300}
            to="start"
          >
            <h2>Plajm</h2>
          </Link>
        </div>
        <div className="header-desktop">
          <ul>
            <li>
              <Link
                onClick={shownav}
                spy={true}
                smooth={true}
                duration={300}
                to="about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                onClick={shownav}
                spy={true}
                smooth={true}
                duration={300}
                to="competences"
              >
                Competences
              </Link>
            </li>
            <li>
              <Link
                onClick={shownav}
                spy={true}
                smooth={true}
                duration={300}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="burger">
          <img onClick={shownav} alt="burgericon" src={burger}></img>
        </div>
      </div>

      {nav ? (
        <div className="extended-nav">
          <ul>
            <Link
              onClick={shownav}
              spy={true}
              smooth={true}
              duration={300}
              to="about"
            >
              <li>About us</li>
            </Link>
            <Link
              onClick={shownav}
              spy={true}
              smooth={true}
              duration={300}
              to="competences"
            >
              <li>Competences</li>
            </Link>
            <Link
              onClick={shownav}
              spy={true}
              smooth={true}
              duration={300}
              to="contact"
            >
              <li>Contact</li>
            </Link>
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
      ) : (
        <></>
      )}
    </Element>
  );
}

export default Header;
