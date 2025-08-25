"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    link: "https://nutriform.vercel.app/",
    quote: "NUTRIFORME est une entreprise qui aide à manger équilibré et est la base de la santé et du bien-être de chacun.",
    name: "Nutrition projet",
    designation: "REACT.JS / NODE JS",
    src: "/images/nutri.png",
  },
  {
    link: "https://syndinet.vercel.app/",
    quote: "La solution ultime pour la gestion de copropriete de Maroc",
    name: "Syndinet",
    designation: "REACT.JS / NODE JS",
    src: "/images/syndi.png",
  },
  {
    quote: "Aide les etudiants a trouver leurs courses",
    name: "Tableau de bord",
    designation: "PHP NATIVE",
    src: "/images/TAB.jpg",
  },
  {
    quote: "MultiQuiz de Questions avec un système de points et de chat en temps réel.",
    name: "Quiz",
    designation: "REACT.JS / NODE JS",
    src: "/images/default.png",
  },
  {
    link: "https://medtrack-vite.vercel.app/",
    quote: "MedTrack est une application de gestion de médicaments qui permet aux utilisateurs de suivre leur consommation de médicaments, de recevoir des rappels et de gérer leurs prescriptions.",
    name: "MEDTRACK",
    designation: "VITE.JS",
    src: "/images/GRR.png",
  },
];

function Projet() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Mes Projets
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-white mb-12 max-w-2xl mx-auto"
        >
          Découvrez une sélection de mes réalisations techniques et créatives.
        </motion.p>

        {/* Desktop/Tablet View - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-teal-400 mb-4">
                  {testimonial.designation}
                </p>
                <p className="mb-6">{testimonial.quote}</p>
                {testimonial.link && (
                  <a
                    href={testimonial.link}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-teal-400 mb-4">
                        {testimonial.designation}
                      </p>
                      <p className="mb-6">{testimonial.quote}</p>
                      {testimonial.link && (
                        <a
                          href={testimonial.link}
                          className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-md hover:shadow-xl transition-all"
                        >
                          Voir le projet
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6 px-6">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-gray-700/80 rounded-full text-white hover:bg-teal-500 transition"
            >
              ⬅
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-gray-700/80 rounded-full text-white hover:bg-teal-500 transition"
            >
              ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projet;
