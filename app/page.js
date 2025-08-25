
"use client";
import Nav from "./components/nav";
import Home from "./components/home";
import Career from "./components/carrer";
import Com from "./components/com";
import Me from "./components/me";
import Cours from "./components/Cours";
import Projet from "./components/projet";
import Footer from "./components/Footer";
import Experience from "./components/experience";
export default function HomePage() {
  return (
    <div className=" text-white bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen"
>
      {/* Navbar */}
      <Nav />
     
      
            {/* Sections */}
      <section
        id="home"
      >
        <Home />
      </section>
        <Career />
        <Com />
       <Cours />
      <Me />
      <section
        id="experiences"
      >
      <Experience />
      </section>

      <section
        id="projet"
       
      >
        <Projet />
      </section>

      <section
        id="contact"
     
      >
       
        <Footer />
      </section>
    </div>
  );
}
