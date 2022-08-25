import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Personas from "./components/Personas";
import Quote from "./components/Quote.jsx";
import Skills from "./components/Skills.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Login from "./components/Login.jsx";
import "./CSS/App.css";
import "./CSS/Login.css";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isShowLogin]);

  return (
    <div className="App">
      <Header handleLoginClick={handleLoginClick} />
      <Login isShowLogin={isShowLogin} />
      <StartPage />
      <Quote />
      <About />
      <Personas />
      <Skills />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
