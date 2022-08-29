import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Personas from "./components/Personas";
import React, { useState, useEffect } from "react";

import Skills from "./components/Skills.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Login from "./components/Login.jsx";

import "./CSS/App.css";
import "./CSS/Login.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isOpen]);

  return (
    <div className="App">
      <section id="start">
        <Header handleLoginClick={handleLoginClick}></Header>
        <Login isOpen={isOpen} />
        <StartPage />
      </section>

      <section id="about">
        <About />
      </section>

      <section>
        <Personas />
      </section>

      <section id="competences">
        <Skills />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section>
        <Map />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
