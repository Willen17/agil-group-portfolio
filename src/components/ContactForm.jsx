import React, { useState } from "react";
import "../CSS/ContactForm.css";
import { Element } from "react-scroll";

function ContactForm() {
  const [developer, setDeveloper] = useState([]);
  return (
    <Element name="contact">
      <div className="contact-form">
        <h2>CONTACT US</h2>
        <form action="submit">
          <select
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            required
          >
            <option value="Choose a developer">Choose a developer</option>
            <option value="adam">Adam</option>
            <option value="william">William</option>
            <option value="jannie">Jannie</option>
            <option value="miranda">Miranda</option>
            <option value="love">Love</option>
          </select>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea cols="30" rows="10"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </Element>
  );
}

export default ContactForm;
