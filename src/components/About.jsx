import React, { useEffect, useState } from "react";
import Blob from "../assets/whoweareBlobben.svg";
import DevelopmentPic from "../assets/development.svg";
import Design from "../assets/design.svg";
import Management from "../assets/management.svg";

export default function About() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );
  const [isSmallMobile, setIsSmallMobile] = useState(
    window.matchMedia("(max-width: 450px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));

    window
      .matchMedia("(max-width: 450px)")
      .addEventListener("change", (e) => setIsSmallMobile(e.matches));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: isSmallMobile ? "center" : "initial",
        minHeight: "100vh",
        width: "calc(100%)",
        paddingLeft: isMobile ? "0" : "3rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ width: isMobile ? "50vw" : "30vw" }}>
        <img
          src={Blob}
          alt="Who we are"
          style={{ width: "100%", margin: "-1rem 0" }}
        />
      </div>
      <div style={{ marginTop: "-5vw" }}>
        <p
          style={{
            fontFamily: "Fredoka",
            fontWeight: "lighter",
            fontSize: isMobile ? "1.6rem" : "2.2rem",
          }}
        >
          We're a team of designers, strategists and storytellers
        </p>
        <p
          style={{
            fontFamily: "Fredoka",
            fontWeight: "lighter",
            fontSize: isMobile ? "1.2rem" : "1.8rem",
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
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: isMobile ? "1.4rem" : "2rem",
            }}
          >
            Development
          </p>
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
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: isMobile ? "1.4rem" : "2rem",
            }}
          >
            Design
          </p>
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
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: isMobile ? "1.4rem" : "2rem",
            }}
          >
            Management
          </p>
        </div>
      </div>
    </div>
  );
}
