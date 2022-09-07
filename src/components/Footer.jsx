import { useEffect, useState } from "react";
import Facebook from "../assets/Footer-icons/Facebook.svg";
import Instagram from "../assets/Footer-icons/Instagram.svg";
import Linkedin from "../assets/Footer-icons/LinkedIn.svg";

function Footer() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img
            style={{ width: isMobile ? "45px" : "90px" }}
            alt="BillGates"
            src={Facebook}
          />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img
            style={{ width: isMobile ? "45px" : "90px" }}
            alt="BillGates"
            src={Instagram}
          />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img
            style={{ width: isMobile ? "45px" : "90px" }}
            alt="BillGates"
            src={Linkedin}
          />
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>©2022 All rights served</p>
      </div>
    </div>
  );
}

export default Footer;
