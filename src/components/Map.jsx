import React from "react";

function Map() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8525.578559256055!2d11.9945328!3d57.709754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1661347035939!5m2!1ssv!2sse"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h3>Medieinstitutet Anders Personsgatan 18, 416 64 Göteborg</h3>
      </div>
    </div>
  );
}

export default Map;
