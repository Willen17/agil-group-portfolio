import React from "react";
import Adam from "../assets/Pics/Adam.svg";
import William from "../assets/Pics/William.svg";
import Jannie from "../assets/Pics/Jannie.svg";
import Miranda from "../assets/Pics/Miranda.svg";
import Love from "../assets/Pics/Love.svg";
import Astack from "../assets/Stack/Astack.png";
import Wstack from "../assets/Stack/Wstack.png";
import Jstack from "../assets/Stack/Jstack.png";
import Mstack from "../assets/Stack/Mstack.png";
import Lstack from "../assets/Stack/Lstack.png";

function Personas() {
  return (
    <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img alt="profile" src={Adam}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "5rem",
          }}
        >
          <h3>Adam (Stefan Hawkins) Hepsever</h3>
          <span> Frontend Developer</span>
          <img alt="stack" src={Astack}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
        }}
      >
        <img alt="profile" src={William}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "5rem",
          }}
        >
          <h3>William Arthur Saar</h3>
          <span> Frontend Developer</span>
          <img alt="stack" src={Wstack}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img alt="profile" src={Jannie}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "5rem",
          }}
        >
          <h3>Jannie Bäckman Kuurne</h3>
          <span> Frontend Developer</span>
          <img alt="stack" src={Jstack}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
        }}
      >
        <img alt="profile" src={Miranda}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingRight: "5rem",
          }}
        >
          <h3>Miranda Nilhag</h3>
          <span> Frontend Developer</span>
          <img alt="stack" src={Mstack}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img alt="profile" src={Love}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "5rem",
          }}
        >
          <h3>Love Lanai</h3>
          <span> Super Senior Frontend Developer</span>
          <img alt="stack" src={Lstack}></img>
        </div>
      </div>
    </div>
  );
}

export default Personas;
