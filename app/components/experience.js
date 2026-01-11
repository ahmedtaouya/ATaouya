"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaTrophy, FaRocket, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
  {
    date: "2020 - 2021",
    title: "Baccalauréat",
    company: "Lycée HASSAN II - Rabat",
    description: "Obtention du baccalauréat avec mention bien, spécialité sciences physiques.",
    category: "education",
    icon: FaGraduationCap,
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Physics", "Mathematics"],
  },
  {
    date: "2021 - 2024",
    title: "Technicien spécialisé",
    company: "OFPPT HAY RIAD, RABAT",
    description: "Spécialisation en développement web et applications mobiles.",
    category: "education",
    icon: FaGraduationCap,
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Web Dev", "Conception", "Database"],
  },
  {
    date: "05/07/2023 – 05/08/2023",
    title: "Stage - Développeur Web",
    company: "Fondation Hassan II / Ministère de l'intérieur",
    description: "Contribution au développement d'applications web innovantes en utilisant React.js.",
    category: "work",
    icon: FaBriefcase,
    gradient: "from-orange-500 to-red-500",
    tags: ["React.js"],
  },
  {
    date: "04/07/2024 – 09/07/2024",
    title: "Hackathon Finalist - Syndiconnect",
    company: "Première édition",
    description: "Développement d'une plateforme qui simplifie la gestion des copropriétés pour les syndics et copropriétaires.",
    category: "achievement",
    icon: FaTrophy,
    gradient: "from-violet-500 to-purple-500",
    tags: ["React.js", "Node.js"],
  },
  {
    date: "2024 - 2027",
    title: "Ingénieur informatique et réseaux",
    company: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI) - RABAT",
    description: "Spécialisation en Systèmes d'Information et Réseaux.",
    category: "education",
    icon: FaGraduationCap,
    gradient: "from-emerald-500 to-teal-500",
    tags: ["CyberSecurite", "Networks", "Database"],
  },
  {
    date: "16/07/2025 – 16/08/2025",
    title: "Dev. Full Stack – ACAPS",
    company: "Alexsys Solution, Rabat",
    description: "Application web/mobile de gestion des réclamations.",
    category: "work",
    icon: FaBriefcase,
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Angular", "Spring Boot", "MySQL"],
  },
];


  const categories = [
    { id: "all", label: "Tout", icon: FaRocket },
    { id: "work", label: "Travail", icon: FaBriefcase },
    { id: "education", label: "Éducation", icon: FaGraduationCap },
    { id: "achievement", label: "Réalisations", icon: FaTrophy },
  ];

  const filteredData = selectedCategory === "all" 
    ? timelineData 
    : timelineData.filter(item => item.category === selectedCategory);

  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
       

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Timeline Interactive
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Une vue chronologique de mon parcours professionnel, académique et de mes accomplissements
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-white/10"
                }`}
              >
                <IconComponent className="text-lg" />
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 -translate-x-1/2 opacity-30" />

          <AnimatePresence mode="wait">
            <motion.div className="space-y-12">
              {filteredData.map((item, index) => {
                const IconComponent = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col gap-8`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="w-full md:w-5/12"
                    >
                      <div className="relative group">
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                        />

                        {/* Card */}
                        <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden">
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                          <div className="relative z-10">
                            {/* Icon Badge */}
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{ delay: index * 0.1, type: "spring" }}
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg`}
                            >
                              <IconComponent className="text-white text-xl" />
                            </motion.div>

                            {/* Date & Location */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-full border border-white/10 text-xs">
                                <FaCalendarAlt className="text-cyan-400" />
                                <span className="text-gray-300">{item.date}</span>
                              </div>
                              {item.company && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-full border border-white/10 text-xs">
                                  <FaMapMarkerAlt className="text-pink-400" />
                                  <span className="text-gray-300">{item.company}</span>
                                </div>
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-4 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className={`px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10 backdrop-blur-sm border border-white/20 text-white`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Corner decoration */}
                          <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500`} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg border-4 border-slate-950`}>
                        {hoveredIndex === index && (
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient}`}
                            animate={{
                              scale: [1, 2, 2],
                              opacity: [0.8, 0, 0],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
        />
      </div>
    </div>
  );
};

export default Timeline;