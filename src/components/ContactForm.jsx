import React from "react";
import "../CSS/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>CONTACT US</h2>
      <form action="submit">
        <select value={""}>
          <option value="Choose a developer">Choose a developer</option>
          <option value="adam">Adam</option>
          <option value="william">William</option>
          <option value="jannie">Jannie</option>
          <option value="miranda">Miranda</option>
          <option value="love">Love</option>
        </select>
        <input type="text" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
