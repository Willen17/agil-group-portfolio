import React, { useState } from "react";
import "../CSS/Header.css";
import burger from "../assets/Header/burgermenu.svg";
import { Link } from "react-scroll";
function Header() {
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
              <a
                onClick={() =>
                  document.getElementById("about").scrollIntoView()
                }
              >
                About us
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Competences
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Contact
              </a>
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
              >
                About us
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  document.getElementById("competences").scrollIntoView()
                }
              >
                Competences
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
