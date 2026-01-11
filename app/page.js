"use client";
import Nav from "./components/nav";
import Home from "./components/home";
import Me from "./components/me";
import Com from "./components/com";
import Experience from "./components/experience";
import Testimonials from "./components/Testimonials"; 
import CallToAction from "./components/CallToAction";
import Cours from "./components/Cours";
import Projet from "./components/projet";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Nav />

      {/* Hero/Landing */}
      <section id="home">
        <Home />
      </section>

      {/* About Me */}
      <section id="about">
        <Me />
      </section>

      {/* Skills & Competencies */}
      <section id="skills">
        <Com />
      </section>

      {/* Professional Experience */}
      <section id="experiences">
        <Experience />
        {/* or Career - merge these if they're similar */}
      </section>

   <section id="education">
        <Cours />
      </section>

      {/* Portfolio Projects */}
      <section id="projet">
        <Projet />
      </section>
       {/* <section id="testimonials"><Testimonials /></section> */}
      <section id="cta"><CallToAction /></section>

      {/* Contact & Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}