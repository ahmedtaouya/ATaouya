"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

const testimonials = [
  {
    link: "https://nutriform.vercel.app/",
    github: "https://github.com/ahmedtaouya/projet1",
    quote:
      "NUTRIFORME est une entreprise qui aide à manger équilibré et est la base de la santé et du bien-être de chacun.",
    name: "Nutrition projet",
    designation: "REACT.JS / NODE JS",
    src: "/images/nutri.png",
    tags: ["React", "Node.js", "Health"],
    color: "from-green-500 to-emerald-600",
  },
  {
    link: "https://syndinet.vercel.app/",
    quote: "La solution ultime pour la gestion de copropriete de Maroc",
    name: "Syndinet",
    designation: "REACT.JS / NODE JS",
    src: "/images/syndi.png",
    tags: ["React", "Node.js", "Management"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    github: "https://github.com/ahmedtaouya/Dashboardcourse",
    quote: "Aide les etudiants a trouver leurs courses",
    name: "Tableau de bord",
    designation: "PHP NATIVE",
    src: "/images/TAB.jpg",
    tags: ["PHP", "Education"],
    color: "from-purple-500 to-pink-600",
  },
  {
    github: "https://github.com/ahmedtaouya/quizreact",
    quote:
      "MultiQuiz de Questions avec un système de points et de chat en temps réel.",
    name: "Quiz",
    designation: "REACT.JS / NODE JS",
    src: "/images/default.png",
    tags: ["React", "Node.js", "Real-time"],
    color: "from-orange-500 to-red-600",
  },
  {
    link: "https://medtrack-vite.vercel.app/",
    github: "https://github.com/ahmedtaouya/medtrack",
    quote:
      "MedTrack est une application de gestion de médicaments qui permet aux utilisateurs de suivre leur consommation de médicaments, de recevoir des rappels et de gérer leurs prescriptions.",
    name: "MEDTRACK",
    designation: "VITE.JS",
    src: "/images/GRR.png",
    tags: ["Vite", "Healthcare"],
    color: "from-teal-500 to-blue-600",
  },
];

function Projet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 " />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
       
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Découvrez une sélection de mes réalisations techniques et créatives.
            Chaque projet représente un défi unique et une opportunité d'innovation.
          </motion.p>
        </motion.div>

        {/* Desktop/Tablet View - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500`}
              />

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.src}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Floating tech badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-white text-xs font-semibold flex items-center gap-2">
                      <FaCode className="text-cyan-400" />
                      {project.designation.split(" / ")[0]}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.name}
                    </h3>
                  </div>

                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.designation}
                  </p>

                  <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
                    {project.quote}
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-slate-800/60 text-gray-300 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300`}
                      >
                        <FaExternalLinkAlt />
                        <span>Voir</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${project.link ? 'px-4' : 'flex-1'} flex items-center justify-center gap-2 py-3 bg-slate-800/80 rounded-xl text-white border border-white/10 hover:border-white/30 hover:bg-slate-700/80 transition-all duration-300 ${!project.link && 'font-semibold'}`}
                      >
                        <FaGithub className="text-xl" />
                        {!project.link && <span>Code</span>}
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-2xl rounded-full -translate-y-16 translate-x-16 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Enhanced Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="px-4"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonials[activeIndex].color} rounded-3xl blur-xl opacity-50`} />

                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={testimonials[activeIndex].src}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${testimonials[activeIndex].color} opacity-20`} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${testimonials[activeIndex].color} bg-clip-text text-transparent`}>
                      {testimonials[activeIndex].designation}
                    </p>
                    <p className="text-gray-400 mb-6">
                      {testimonials[activeIndex].quote}
                    </p>

                    {/* Tags */}
                    {testimonials[activeIndex].tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {testimonials[activeIndex].tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-slate-800/60 text-gray-300 rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3">
                      {testimonials[activeIndex].link && (
                        <a
                          href={testimonials[activeIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${testimonials[activeIndex].color} rounded-xl font-semibold text-white shadow-lg`}
                        >
                          <FaExternalLinkAlt />
                          Voir
                        </a>
                      )}
                      {testimonials[activeIndex].github && (
                        <a
                          href={testimonials[activeIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${testimonials[activeIndex].link ? 'px-4' : 'flex-1'} flex items-center justify-center gap-2 py-3 bg-slate-800/80 rounded-xl text-white border border-white/10`}
                        >
                          <FaGithub className="text-xl" />
                          {!testimonials[activeIndex].link && 'Code'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-white shadow-lg hover:shadow-2xl transition-all"
            >
              ←
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-gradient-to-r from-violet-500 to-cyan-500"
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-pink-600 rounded-full text-white shadow-lg hover:shadow-2xl transition-all"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projet;