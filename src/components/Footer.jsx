import React from "react";
import Facebook from "../assets/Footer-icons/Facebook.svg";
import Instagram from "../assets/Footer-icons/Instagram.svg";
import Linkedin from "../assets/Footer-icons/LinkedIn.svg";

function Footer() {
  return (
    <div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img style={{ width: "90px" }} alt="BillGates" src={Facebook} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img style={{ width: "90px" }} alt="BillGates" src={Instagram} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img style={{ width: "94px" }} alt="BillGates" src={Linkedin} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
