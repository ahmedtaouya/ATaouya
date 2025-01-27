import React from 'react'
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import nutri from "public/images/nutri.png";
import syndi from "public/images/syndi.png";
import tab from "public/images/TAB.jpg";
import fallbackImage from "public/images/default.png"; 
import NANA from "public/images/NANA.png";

const testimonials = [
    {
      quote:
        " NUTRIFORME est une entreprise qui aide à manger équilibré et est la base de la santé et du bien-être de chacun.",
      name: "Nutrition projet",
      designation: "REACT.JS / NODE JS",
      src: nutri,
    },
    {
      quote:
        "La solution ultime pour la gestion de copropriete de Maroc",
      name: "Syndinet",
      designation: "REACT.JS / NODE JS",
      src: syndi,
    },
    {
      quote:
        "Aide les etudiants a trouver leurs courses",
      name: "Tableau de bord",
      designation: "PHP NATIVE",
      src: tab,
    },
    {
      quote:
        "MultiQuiz de Questions avec un système de points et de chat",
      name: "Quiz",
      designation: "REACT.JS / NODE JS",
      src: fallbackImage,
    },
    {
      quote:
        "Portfolio pour decrire mon carrière",
      name: "PORFOLIO",
      designation: "NEXT.JS",
      src: NANA,
    },
  ];

function projet() {
  return (
    <div>
             <AnimatedTestimonials testimonials={testimonials} />
        
    </div>
  )
}

export default projet