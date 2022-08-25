import React from "react";
import "../CSS/Startpage.css";
import team from "../assets/Pics/Team.svg";

function StartPage() {
  return (
    <div className="startPageContainer">
      <div className="start-page-left">
        <h1>Plajm</h1>
        <p>We create memorable digital experiences.</p>
        <p>OH YEAH!</p>
        <button>Read more</button>
      </div>
      <div className="start-page-right">
        <img style={{ width: "100%" }} src={team}></img>
      </div>
    </div>
  );
}

export default StartPage;
