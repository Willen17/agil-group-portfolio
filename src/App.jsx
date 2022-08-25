import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Personas from "./components/Personas";

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

      <div>
        <section>
          <About />
        </section>
      </div>

      <section>
        <Personas />
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
