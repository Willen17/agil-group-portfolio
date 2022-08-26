import React, { useState } from "react";
import "../CSS/ContactForm.css";

function ContactForm() {
  const [developer, setDeveloper] = useState([]);

  const handleDeveloper = (e) => {
    setDeveloper(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
      }}
      className="contact-form"
    >
      <h2>CONTACT US</h2>
      <form action="submit">
        <select value={developer} onChange={handleDeveloper} required>
          <option value="Choose a developer">Choose a developer</option>
          <option value="adam">Adam</option>
          <option value="william">William</option>
          <option value="jannie">Jannie</option>
          <option value="miranda">Miranda</option>
          <option value="love">Love</option>
        </select>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea
          rows={5}
          style={{ fontFamily: "Fredoka", padding: "1rem", fontSize: "1rem" }}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
