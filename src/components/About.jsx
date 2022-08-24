import React, { useEffect, useState } from "react";
import Blob from "../assets/whoweareBlobben.svg";
import DevelopmentPic from "../assets/development.svg";
import Design from "../assets/design.svg";
import Management from "../assets/management.svg";

export default function About() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "calc(100vh + 60px )",
        width: "calc(100%)",
        paddingLeft: "3rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ height: isMobile ? "20%" : "40%" }}>
        <img src={Blob} alt="Who we are" style={{ height: "100%" }} />
      </div>
      <div style={{ marginTop: "-5vw" }}>
        <p style={{ fontFamily: "Fredoka", fontWeight: "lighter" }}>
          We're a team of designers, strategists and storytellers
        </p>
        <p
          style={{
            fontFamily: "Fredoka",
            fontWeight: "lighter",
            fontSize: "1.2rem",
            width: isMobile ? "90%" : "70%",
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
          flexDirection: isMobile ? "column" : "initial",
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
            style={{ height: "10vw", minHeight: "10rem" }}
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
          <img
            src={Design}
            alt="Development"
            style={{ height: "10vw", minHeight: "10rem" }}
          />
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
          <img
            src={Management}
            alt="Development"
            style={{ height: "10vw", minHeight: "10rem" }}
          />
          <p style={{ fontFamily: "Fredoka" }}>Management</p>
        </div>
      </div>
    </div>
  );
}
