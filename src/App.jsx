import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Skills from "./components/Skills.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "./CSS/App.css";

function App() {
  return (
    <div>
      <Header />
      <StartPage />
      <About />
      <Quote />
      <Skills />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
