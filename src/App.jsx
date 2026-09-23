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

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <PartnersCarousel />
      <About />
      <Services />
      <Countries />
      <VisaResults />
      <InstagramSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
