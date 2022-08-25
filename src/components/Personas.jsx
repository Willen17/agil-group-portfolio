import React from "react";
import Astack from "../assets/Stack/Astack.png";
import Jstack from "../assets/Stack/Jstack.png";
import Lstack from "../assets/Stack/Lstack.png";
import Mstack from "../assets/Stack/Mstack.png";
import Wstack from "../assets/Stack/Wstack.png";

import Adam from "../assets/Pics/Adam.png";
import Jannie from "../assets/Pics/Jannie.png";
import Love from "../assets/Pics/Love.png";
import Miranda from "../assets/Pics/Miranda.png";
import William from "../assets/Pics/William.png";

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
