import React from "react";
import Adam from "../assets/Pics/Adam.svg";
import William from "../assets/Pics/William.svg";
import Jannie from "../assets/Pics/Jannie.svg";
import Miranda from "../assets/Pics/Miranda.svg";
import Love from "../assets/Pics/Love.svg";

function Personas() {
  return (
    <div>
      Personas
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="profile" src={Adam}></img>
        <h3>Adam (Stefan Hawkins) Hepsever</h3>
        <span> Frontend Developer</span>
        <span> Stack</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="profile" src={William}></img>
        <h3>William Arthur Saar</h3>
        <span> Frontend Developer</span>
        <span> Stack</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="profile" src={Jannie}></img>
        <h3>Jannie Bäckman Kuurne</h3>
        <span> Frontend Developer</span>
        <span> Stack</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="profile" src={Miranda}></img>
        <h3>Miranda Nilhag</h3>
        <span> Frontend Developer</span>
        <span> Stack</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="profile" src={Love}></img>
        <h3>Love Lanai</h3>
        <span> Super Senior Frontend Developer</span>
        <span> Stack</span>
      </div>
    </div>
  );
}

export default Personas;
