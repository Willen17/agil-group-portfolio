import React, { useState } from "react";
import "../CSS/Header.css";
import burger from "../assets/Header/burgermenu.svg";

import profile from "../assets/profile.png";

export default function Header({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };

  const [nav, setNav] = useState(false);

  const shownav = () => {
    if (nav === false) {
      setNav(true);
    } else {
      setNav(false);
    }
    console.log(nav);
  };

  return (
    <>
      <div className="header">
        <div>
          <a
            onClick={() => document.getElementById("start").scrollIntoView()}
            href="/#start"
            style={{ textDecoration: "none", color: "#18112C" }}
          >
            <h2>Plajm</h2>
          </a>
        </div>
        <div className="header-desktop">
          <ul>
            <li>
              <a
                onClick={() =>
                  document.getElementById("about").scrollIntoView()
                }
                href="/#about"
                style={{ textDecoration: "none", color: "#18112C" }}
              >
                About us
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document.getElementById("competences").scrollIntoView()
                }
                href="/#competences"
                style={{ textDecoration: "none", color: "#18112C" }}
              >
                Competences
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
                href="/#contact"
                style={{ textDecoration: "none", color: "#18112C" }}
              >
                Contact
              </a>
            </li>
            <li>
              <img src={profile} alt="profileicon" style={{ width: "25px" }} />
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
            <li>
              <a
                onClick={() =>
                  document.getElementById("about").scrollIntoView()
                }
                href="/#about"
                style={{ textDecoration: "none", color: "#18112C" }}
              >
                About us
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  document.getElementById("competences").scrollIntoView()
                }
                href="/#competences"
                style={{ textDecoration: "none", color: "#18112C" }}
              >
                Competences
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
                href="/#contact"
                style={{ textDecoration: "none", color: "#18112C" }}
              >
                Contact
              </a>
            </li>
            <li>
              <img
                onClick={handleClick}
                src={profile}
                alt="profileicon"
                style={{ width: "25px" }}
              ></img>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
