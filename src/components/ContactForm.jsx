import { useRef, useState } from "react";
import swal from "sweetalert";
import "../CSS/ContactForm.css";
import { Mail } from "./Mail";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [developer, setDeveloper] = useState([]);
  const [submitButton, setSubmitButton] = useState(false);

  const handleDeveloper = (e) => {
    setDeveloper(e.target.value);
    setSubmitButton(true);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_plajm",
        "contact_form",
        form.current,
        "p7DrHIV-1wmfbGSKP"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Thanks for reaching out!",
            `Your message has been sent. ${developer} will reply as soon as possible. We wish you a great day!`,
            "success"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      <form ref={form} onSubmit={sendEmail}>
        <select
          style={{ fontFamily: "Fredoka" }}
          value={developer}
          onChange={handleDeveloper}
          required
          name="to_name"
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
          name="user_name"
          required
        />
        <input
          style={{ fontFamily: "Fredoka", fontSize: "1rem" }}
          type="email"
          placeholder="Email"
          name="user_email"
          required
        />
        <textarea
          rows={5}
          name="message"
          style={{ fontFamily: "Fredoka", padding: "1rem", fontSize: "1rem" }}
        ></textarea>

        <button value="Send" type="submit" disabled={submitButton === false}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
