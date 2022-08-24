import React from "react";
import Blob from "../assets/whoweareBlobben.svg";
import DevelopmentPic from "../assets/development.svg";
import Design from "../assets/design.svg";
import Management from "../assets/management.svg";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "calc(100vh - 60px)",
        width: "calc(100% - 3rem)",
        paddingLeft: "3rem",
      }}
    >
      <div>
        <img src={Blob} alt="Who we are" style={{ height: "50vh" }} />
      </div>
      <div>
        <p style={{ fontFamily: "Fredoka", fontWeight: "lighter" }}>
          We're a team of designers, strategists and storytellers
        </p>
        <p
          style={{
            fontFamily: "Fredoka",
            fontWeight: "lighter",
            fontSize: "1rem",
          }}
        >
          Web design is not about making a website — it's about making an
          investment in your organization. Successful web design takes into
          account more than just aesthetics… It's a reflection of you, your
          company, and your vision
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={DevelopmentPic}
            alt="Development"
            style={{ height: "10vw" }}
          />
          <p style={{ fontFamily: "Fredoka" }}>Development</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Design} alt="Development" style={{ height: "10vw" }} />
          <p style={{ fontFamily: "Fredoka" }}>Design</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Management} alt="Development" style={{ height: "10vw" }} />
          <p style={{ fontFamily: "Fredoka" }}>Management</p>
        </div>
      </div>
    </div>
  );
}
