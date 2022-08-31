import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Personas from "./components/Personas";
import React from "react";
import Navigation from "components/Navigation.jsx";
import Skills from "./components/Skills.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="start">
        <Header />

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
      <section id="contact" style={{ marginTop: "2rem" }}>
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
