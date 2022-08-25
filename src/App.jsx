import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Personas from "./components/Personas";
import Quote from "./components/Quote.jsx";
import Skills from "./components/Skills.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <section>
        <Header />
        <StartPage />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Personas />
      </section>
      <section>
        <Quote />
      </section>
      <section>
        <Skills />
      </section>
      <section>
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
