"use client";
import Nav from "./components/nav";
import Home from "./components/home";
import Me from "./components/me";
import Comp from "./components/com";
import Footer from "./components/Footer";
import Projet from "./components/projet";
import Career from "./components/carrer";
import Cours from "./components/Cours";
// import Ah  from "./components/ah";
export default function pages() {
  return (
    <>
      <div class="bg-mixed text-white p-4">
        <Nav />
        <Home />
        <Career/>
        <Comp/>
        {/* <Cours/> */}
        <Me />
        <Projet/>
        <Footer />
      </div>
    </>
  );
}
