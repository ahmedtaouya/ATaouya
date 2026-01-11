"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaLinkedin, FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Chef de Projet",
      company: "Alexsys Solution",
      image: "/images/testimonial1.jpg", // Replace with actual image
      quote: "Ahmed est un développeur Full Stack exceptionnel. Son expertise technique et sa capacité à résoudre des problèmes complexes ont été cruciales pour le succès de notre projet ACAPS.",
      rating: 5,
      linkedin: "https://linkedin.com",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Mohamed Alami",
      role: "Tech Lead",
      company: "Fondation Hassan II",
      image: "/images/testimonial2.jpg",
      quote: "Travailler avec Ahmed a été une expérience formidable. Sa maîtrise de React.js et son approche méthodique du développement ont grandement contribué à nos applications web.",
      rating: 5,
      linkedin: "https://linkedin.com",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      name: "Fatima Zahra",
      role: "Product Manager",
      company: "Syndiconnect",
      image: "/images/testimonial3.jpg",
      quote: "Ahmed a démontré une créativité exceptionnelle lors du hackathon. Son travail sur la plateforme de gestion de copropriété était innovant et parfaitement exécuté.",
      rating: 5,
      linkedin: "https://linkedin.com",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Karim Benali",
      role: "Senior Developer",
      company: "Tech Innovators",
      image: "/images/testimonial4.jpg",
      quote: "Un développeur talentueux avec une excellente compréhension des technologies modernes. Ahmed apporte toujours des solutions élégantes et efficaces à nos projets.",
      rating: 5,
      linkedin: "https://linkedin.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative py-24 px-6 overflow-hidden ">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
   

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ce qu'ils disent
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Retours et recommandations de collègues et clients avec qui j'ai collaboré
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${currentTestimonial.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5`} />

                {/* Quote icon decoration */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} opacity-20 flex items-center justify-center`}
                >
                  <FaQuoteLeft className="text-4xl text-white" />
                </motion.div>

                <div className="relative z-10">
                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                      >
                        <FaStar className={`text-2xl bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic"
                  >
                    "{currentTestimonial.quote}"
                  </motion.p>

                  {/* Author info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                        <FaUserCircle className="text-5xl text-gray-400" />
                        {/* Replace with: <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" /> */}
                      </div>
                    </div>

                    {/* Name and role */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {currentTestimonial.role} • {currentTestimonial.company}
                      </p>
                    </div>

                    {/* LinkedIn */}
                    <motion.a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      <FaLinkedin className="text-2xl text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br ${currentTestimonial.gradient} opacity-10 blur-3xl rounded-full`} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <FaChevronLeft className="text-xl group-hover:text-cyan-400 transition-colors" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `w-8 bg-gradient-to-r ${testimonials[index].gradient}`
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <FaChevronRight className="text-xl group-hover:text-purple-400 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group ${
                index === currentIndex ? "ring-2 ring-offset-2 ring-offset-slate-900" : ""
              }`}
              style={{
                ringColor: index === currentIndex ? testimonial.gradient : "transparent",
              }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${testimonial.gradient} p-0.5 transition-all duration-300`}>
                <div className={`w-full h-full rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden ${
                  index === currentIndex ? "opacity-100" : "opacity-50 group-hover:opacity-100"
                }`}>
                  <FaUserCircle className="text-4xl text-gray-400" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;