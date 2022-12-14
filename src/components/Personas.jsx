import { useState } from "react";
import BillGates from "../assets/Bill gates.svg";
import Adam from "../assets/Pics/Adam.png";
import Jannie from "../assets/Pics/Jannie.png";
import Love from "../assets/Pics/Love.png";
import Miranda from "../assets/Pics/Miranda.png";
import William from "../assets/Pics/William.png";
import "../CSS/Personas.css";

import adobe from "../assets/Skills-icons/Adobe.svg";
import bootstrap from "../assets/Skills-icons/Bootstrap.svg";
import css from "../assets/Skills-icons/Css.svg";
import figma from "../assets/Skills-icons/Figma.svg";
import firebase from "../assets/Skills-icons/Firebase.svg";
import html5 from "../assets/Skills-icons/Html5.svg";
import javascript from "../assets/Skills-icons/JS.svg";
import mongodb from "../assets/Skills-icons/MongoDB.svg";
import mui from "../assets/Skills-icons/MUI.svg";
import react from "../assets/Skills-icons/React.svg";
import typescript from "../assets/Skills-icons/TS.svg";
import { PersonalModal } from "./PersonaModal";

function Personas() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");

  const handleOpenDialog = (e) => {
    setDialogTitle(e.target.className);

    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PersonalModal
        isOpen={isOpen}
        handleClose={handleCloseDialog}
        title={dialogTitle}
      ></PersonalModal>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="personas-containers">
          <div className="persona" style={{ marginTop: "1rem" }}>
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={Adam}></img>
            </div>
            <ul className="persona-content">
              <h3>Adam Hepsever</h3>
              <span> Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img alt="react" style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="typescript"
                    style={{ height: "100%" }}
                    src={typescript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="javascript"
                    style={{ height: "100%" }}
                    src={javascript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="html5" style={{ height: "100%" }} src={html5}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="adobe" style={{ height: "100%" }} src={adobe}></img>
                </li>
              </ul>
              <p
                onClick={handleOpenDialog}
                className="Adam"
                style={{
                  margin: "1rem 0",
                  cursor: "pointer",
                  transition: " all .2s ease-in-out",
                  fontSize: "15px",
                }}
              >
                Read more about Adam
              </p>
            </ul>
          </div>
          <div className="persona-flipped">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={William}></img>
            </div>
            <ul className="persona-content">
              <h3>William Arthur Saar</h3>
              <span> Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img alt="react" style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="typescript"
                    style={{ height: "100%" }}
                    src={typescript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="mui" style={{ height: "100%" }} src={mui}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="figma" style={{ height: "100%" }} src={figma}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="adobe" style={{ height: "100%" }} src={adobe}></img>
                </li>
              </ul>
              <p
                onClick={handleOpenDialog}
                className="William"
                style={{
                  margin: "1rem 0",
                  cursor: "pointer",
                  transition: " all .2s ease-in-out",
                  fontSize: "15px",
                }}
              >
                Read more about William
              </p>
            </ul>
          </div>
        </div>
      </section>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="personas-containers">
          <div className="persona">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={Jannie}></img>
            </div>
            <ul className="persona-content">
              <h3>Jannie B??ckman Kuurne</h3>
              <span> Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img alt="react" style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="typescript"
                    style={{ height: "100%" }}
                    src={typescript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="html5" style={{ height: "100%" }} src={html5}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="css" style={{ height: "100%" }} src={css}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="figma" style={{ height: "100%" }} src={figma}></img>
                </li>
              </ul>
              <p
                onClick={handleOpenDialog}
                className="Jannie"
                style={{
                  margin: "1rem 0",
                  cursor: "pointer",
                  transition: " all .2s ease-in-out",
                  fontSize: "15px",
                }}
              >
                Read more about Jannie
              </p>
            </ul>
          </div>
          <div className="persona-flipped">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={Miranda}></img>
            </div>
            <ul className="persona-content">
              <h3>Miranda Nilhag</h3>
              <span> Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img alt="react" style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="typescript"
                    style={{ height: "100%" }}
                    src={typescript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="javascript"
                    style={{ height: "100%" }}
                    src={javascript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="firebase"
                    style={{ height: "100%" }}
                    src={firebase}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="bootstrap"
                    style={{ height: "100%" }}
                    src={bootstrap}
                  ></img>
                </li>
              </ul>
              <p
                onClick={handleOpenDialog}
                className="Miranda"
                style={{
                  margin: "1rem 0",
                  cursor: "pointer",
                  transition: " all .2s ease-in-out",
                  fontSize: "15px",
                }}
              >
                Read more about Miranda
              </p>
            </ul>
          </div>
        </div>
      </section>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="personas-containers">
          <div className="persona">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={Love}></img>
            </div>
            <ul className="persona-content">
              <h3>Love Lanai</h3>
              <span> Super Senior Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img alt="react" style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="typescript"
                    style={{ height: "100%" }}
                    src={typescript}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img
                    alt="mongodb"
                    style={{ height: "100%" }}
                    src={mongodb}
                  ></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="css" style={{ height: "100%" }} src={css}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img alt="adobe" style={{ height: "100%" }} src={adobe}></img>
                </li>
              </ul>
              <p
                onClick={handleOpenDialog}
                className="Love"
                style={{
                  margin: "1rem 0",
                  cursor: "pointer",
                  transition: " all .2s ease-in-out",
                  fontSize: "15px",
                }}
              >
                What is Love
              </p>
            </ul>
          </div>
          <div className="billgates">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="BillGates" src={BillGates} />
            </div>
            <ul>
              <ul></ul>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Personas;
