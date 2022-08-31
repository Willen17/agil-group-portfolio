import { useEffect, useState } from "react";

function Map() {
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
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: isMobile ? "95%" : "70%",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
        }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8525.578559256055!2d11.9945328!3d57.709754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1661347035939!5m2!1ssv!2sse"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
