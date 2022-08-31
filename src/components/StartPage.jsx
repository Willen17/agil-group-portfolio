import React, { useEffect, useState } from "react";
import "../CSS/Startpage.css";
import team from "../assets/Pics/Team.svg";

function StartPage() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  return (
    <div>
      {!isMobile ? (
        <div className="startPageContainer">
          <div className="start-page-left">
            <ul>
              <h1 style={{ color: "#18112C" }}>Plajm</h1>
              <p>We create memorable digital experiences.</p>
              <p>OH YEAH!</p>
              <button>Read more</button>
            </ul>
          </div>
          <div className="start-page-right">
            <div className="team">
              <img alt="teampic" style={{ width: "100%" }} src={team}></img>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="startPageContainer-mobile">
            <div className="start-page-left-mobile">
              <ul>
                <h1 style={{ color: "#18112C" }}>Plajm</h1>
                <p>We create memorable digital experiences.</p>
                <p>OH YEAH!</p>
                <button>Read more</button>
              </ul>
            </div>
            <div className="start-page-right-mobile">
              <div className="team-mobile">
                <img alt="teampic" style={{ width: "100%" }} src={team}></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartPage;
