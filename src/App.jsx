import "./App.css";
import { Link } from "react-scroll";
import React from "react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-content bg-white shadow flex justify-around p-4">
        <Link to="home" smooth className="cursor-pointer">
          Home
        </Link>
        <Link to="about" smooth className="cursor-pointer">
          About
        </Link>
        <Link to="services" smooth className="cursor-pointer">
          Services
        </Link>
        <Link to="blog" smooth className="cursor-pointer">
          Blog
        </Link>
        <Link to="contact" smooth className="cursor-pointer">
          Contact
        </Link>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-blue-50"
      >
        <h1 className="text-4xl font-bold">Study & Work Abroad</h1>
        <p className="mt-2 text-lg">
          We help students and professionals achieve their goals abroad.
        </p>
        <a
          href="#contact"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Request Consultation
        </a>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen p-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          We are a licensed consulting firm helping students and professionals
          with education and job placements abroad.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="min-h-screen p-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <ul className="space-y-2">
          <li>🎓 Education Consulting</li>
          <li>💼 Job Consulting</li>
          <li>🌍 Visa & Document Assistance</li>
        </ul>
      </section>

      {/* Blog */}
      <section id="blog" className="min-h-screen p-12 bg-gray-100">
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
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen p-12 col-span-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-2 gap-4">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
          {/* Document Upload Form */}
          <form
            name="documents"
            method="POST"
            data-netlify="true"
            encType="multipart/form-data"
            netlify
          >
            <input type="hidden" name="form-name" value="documents" />

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input type="file" name="file" required />

            <button type="submit">Upload</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
