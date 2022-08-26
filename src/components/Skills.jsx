import Fast from "../assets/Skills 3 icons/Blazing-fast.svg";
import MobileFirst from "../assets/Skills 3 icons/Mobile-first.svg";
import Learning from "../assets/Skills 3 icons/Learning.svg";
import "../CSS/Skills.css";

import React from "../assets/Skills-icons/React.svg";
import MongoDB from "../assets/Skills-icons/MongoDB.svg";
import TS from "../assets/Skills-icons/TS.svg";
import Html5 from "../assets/Skills-icons/Html5.svg";
import Adobe from "../assets/Skills-icons/Adobe.svg";
import Firebase from "../assets/Skills-icons/Firebase.svg";
import NodeJS from "../assets/Skills-icons/NodeJS.svg";
import Bootstrap from "../assets/Skills-icons/Bootstrap.svg";
import MUI from "../assets/Skills-icons/MUI.svg";
import Figma from "../assets/Skills-icons/Figma.svg";

import { useState, useEffect } from "react";

function Skills() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [isMedium, setIsMedium] = useState(
    window.matchMedia("(max-width: 1200px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));

    window
      .matchMedia("(max-width: 1200px)")
      .addEventListener("change", (e) => setIsMedium(e.matches));
  }, []);

  const imageStyling = {
    height: isMedium ? (isMobile ? "20vw" : "12vw") : "8vw",
    transition: " all .2s ease-in-out",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: isMedium
          ? isMobile
            ? "180vh"
            : "150vh"
          : "calc(100vh - 60px)",
        marginBottom: "10vw",
      }}
    >
      <p style={{ fontFamily: "Fredoka", fontSize: "3rem" }}>SKILLS</p>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "initial",
          alignItems: isMobile ? "center" : "initial",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", width: !isMobile ? "25%" : "90%" }}>
          <img src={Fast} alt="Blazing fast" />
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: "1.2rem",
            }}
          >
            Developing blazing fast web applications for seamless user
            interaction
          </p>
        </div>
        <div style={{ textAlign: "center", width: !isMobile ? "25%" : "90%" }}>
          <img src={MobileFirst} alt="Mobile first" />
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: "1.2rem",
            }}
          >
            Mobile-first responsive design layout for all devices is a top
            priority
          </p>
        </div>
        <div style={{ textAlign: "center", width: !isMobile ? "25%" : "90%" }}>
          <img src={Learning} alt="Always learning" />
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: "1.2rem",
            }}
          >
            Constantly continues to learn new technologies and keeping up to
            date with the freshest trends
          </p>
        </div>
      </div>
      <p style={{ fontFamily: "Fredoka", fontSize: "1.8rem" }}>
        Click a skill to learn more
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: !isMedium ? "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr",

          gap: "2rem 4rem",

          justifyItems: "center",
        }}
      >
        <img
          src={React}
          alt="React"
          style={imageStyling}
          className="skills-logo"
        />
        <img
          src={MongoDB}
          alt="MongoDB"
          style={imageStyling}
          className="skills-logo"
        />

        <img
          src={TS}
          alt="Typescript"
          style={imageStyling}
          className="skills-logo"
        />
        <img
          src={Html5}
          alt="Html5"
          style={imageStyling}
          className="skills-logo"
        />

        <img
          src={Adobe}
          alt="Adobe"
          style={imageStyling}
          className="skills-logo"
        />
        <img
          src={Firebase}
          alt="Firebase"
          style={imageStyling}
          className="skills-logo"
        />

        <img
          src={NodeJS}
          alt="NodeJS"
          style={imageStyling}
          className="skills-logo"
        />
        <img
          src={Bootstrap}
          alt="Bootstrap"
          style={imageStyling}
          className="skills-logo"
        />

        <img
          src={MUI}
          alt="Material UI"
          style={imageStyling}
          className="skills-logo"
        />
        <img
          src={Figma}
          alt="Figma"
          style={imageStyling}
          className="skills-logo"
        />
      </div>
    </div>
  );
}

export default Skills;
