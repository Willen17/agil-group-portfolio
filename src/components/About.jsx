import React from "react";
import Blob from "../assets/whoweareBlob.svg";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 60px)",
        width: "100%",
      }}
    >
      <div style={{}}>
        <img src={Blob} style={{ height: "30vh" }} alt="A graphical touch" />
        <h1 style={{ fontSize: "2rem" }}>who we are</h1>
      </div>
      <div>
        <p>We're a team of designers, strategists and storytellers</p>
      </div>
      <div style={{}}>
        <div>
          <p>Development</p>
        </div>
        <div>
          <p>Design</p>
        </div>
        <div>
          <p>Management</p>
        </div>
      </div>
    </div>
  );
}
