import Navigation from "components/Navigation.jsx";
import About from "./components/About.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Map from "./components/Map.jsx";
import Personas from "./components/Personas";
import Skills from "./components/Skills.jsx";
import StartPage from "./components/StartPage.jsx";
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
