import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnersCarousel from "./components/PartnersCarousel";
import Services from "./components/Services";
import VisaResults from "./components/VisaResults";
import InstagramSection from "./components/InstagramSection";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Reveal>
        <PartnersCarousel />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Services />
      <Countries />
      <VisaResults />
      <Reveal>
        <InstagramSection />
      </Reveal>
      <Reveal>
        <ContactForm />
      </Reveal>
      <Footer />
    </div>
  );
}

export default App;
