import React, { useState } from "react";
import "../CSS/ContactForm.css";
import { Element } from "react-scroll";

function ContactForm() {
  const [developer, setDeveloper] = useState([]);

  const handleDeveloper = (e) => {
    setDeveloper(e.target.value);
  };
  return (
    <Element name="contact">
      <div className="contact-form">
        <h2>CONTACT US</h2>
        <form action="submit">
          <select
            value={developer}
            onChange={handleDeveloper}
            required
            multiple
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
          <textarea></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </Element>
  );
}

export default ContactForm;
