import React from "react";
import "../CSS/Personas.css";
import Adam from "../assets/Pics/Adam.svg";
import William from "../assets/Pics/William.svg";
import Jannie from "../assets/Pics/Jannie.svg";
import Miranda from "../assets/Pics/Miranda.svg";
import Love from "../assets/Pics/Love.svg";
import BillGates from "../assets/Bill gates.svg";

import adobe from "../assets/Skills-icons/Adobe.svg";
import bootstrap from "../assets/Skills-icons/Bootstrap.svg";
import firebase from "../assets/Skills-icons/Firebase.svg";
import figma from "../assets/Skills-icons/Figma.svg";
import css from "../assets/Skills-icons/Css.svg";
import html5 from "../assets/Skills-icons/Html 5.svg";
import mongodb from "../assets/Skills-icons/MongoDB.svg";
import mui from "../assets/Skills-icons/MUI.svg";
import nodejs from "../assets/Skills-icons/NODE JS.svg";
import react from "../assets/Skills-icons/React.svg";
import typescript from "../assets/Skills-icons/TS.svg";
import javascript from "../assets/Skills-icons/JS.svg";

function Personas() {
  return (
    <div>
      <section>
        <div className="personas-containers">
          <div className="persona">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={Adam}></img>
            </div>
            <ul className="persona-content">
              <h3>Adam (Stefan Hawkins) Hepsever</h3>
              <span> Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={typescript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={javascript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={html5}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={adobe}></img>
                </li>
              </ul>
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
                  <img style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={typescript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={mui}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={figma}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={adobe}></img>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="personas-containers">
          <div className="persona">
            <div className="persona-image">
              <img style={{ height: "100%" }} alt="profile" src={Jannie}></img>
            </div>
            <ul className="persona-content">
              <h3>Jannie Bäckman Kuurne</h3>
              <span> Frontend Developer</span>
              <span> Stack</span>
              <ul>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={typescript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={html5}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={css}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={figma}></img>
                </li>
              </ul>
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
                  <img style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={typescript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={javascript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={firebase}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={bootstrap}></img>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      <section>
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
                  <img style={{ height: "100%" }} src={react}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={typescript}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={mongodb}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={css}></img>
                </li>
                <li style={{ height: "3rem" }}>
                  <img style={{ height: "100%" }} src={adobe}></img>
                </li>
              </ul>
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
