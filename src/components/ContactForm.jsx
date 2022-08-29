import { useState } from "react";
import swal from "sweetalert";
import "../CSS/ContactForm.css";

function ContactForm() {
  const [developer, setDeveloper] = useState([]);
  const [submitButton, setSubmitButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    swal(
      "Thanks for reaching out!",
      `Your message has been sent. ${developer} will reply as soon as possible. We wish you a great day!`,
      "success"
    );
  };

  const handleDeveloper = (e) => {
    setDeveloper(e.target.value);
    setSubmitButton(true);
  };
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="contact-form"
    >
      <h2>CONTACT US</h2>
      <form>
        <select
          style={{ fontFamily: "Fredoka" }}
          value={developer}
          onChange={handleDeveloper}
          required
        >
          {submitButton === false ? (
            <option
              value="Choose a developer"
              style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
            >
              Choose a developer
            </option>
          ) : (
            <></>
          )}
          <option
            value="Adam Hepsever"
            style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          >
            Adam Hepsever
          </option>
          <option
            value="William Saar"
            style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          >
            William Saar
          </option>
          <option
            value="Jannie Bäckman Kuurne"
            style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          >
            Jannie Bäckman Kuurne
          </option>
          <option
            value="Miranda Nilhag"
            style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          >
            Miranda Nilhag
          </option>
          <option
            value="Love Lanai"
            style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          >
            Love Lanai
          </option>
        </select>
        <input
          style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          type="text"
          placeholder="Name"
          required
        />
        <input
          style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          rows={5}
          style={{ fontFamily: "Fredoka", padding: "1rem", fontSize: "1rem" }}
        ></textarea>

        <button disabled={submitButton === false} onClick={handleSubmit}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
