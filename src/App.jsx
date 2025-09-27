import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnersCarousel from "./components/PartnersCarousel";
import Services from "./components/Services";
import ShortsSection from "./components/ShortsSection";
import Testimonials from "./components/Testimonials";
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
      {/* <ShortsSection /> */}
      {/* <Testimonials /> */}
      <InstagramSection />
      <ContactForm />
      <Footer />
      {/* Blog */}
      {/* <section id="blog" className="min-h-screen p-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
        <div className="space-y-4">
          <article className="p-4 shadow rounded bg-white">
            <h3 className="font-semibold">
              How to Apply for a German Student Visa
            </h3>
            <p className="text-sm text-gray-600">
              Step-by-step guidance for international students...
            </p>
          </article>
          <article className="p-4 shadow rounded bg-white">
            <h3 className="font-semibold">
              Top Part-Time Jobs for Students Abroad
            </h3>
            <p className="text-sm text-gray-600">
              Balancing studies and work is possible...
            </p>
          </article>
        </div>
      </section> */}
    </div>
  );
}

export default App;
