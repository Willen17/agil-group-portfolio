import React from "react";
import BillGates from "../assets/Bill-gates-quote.svg";

function Quote() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "50%", marginTop: "-15%" }}
        alt="BillGates"
        src={BillGates}
      />
    </div>
  );
}

export default Quote;
