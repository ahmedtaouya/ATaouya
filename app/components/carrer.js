"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const Career = () => {
  const { t } = useTranslation();
  const experiences = t("career.experiences", { returnObjects: true });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardGradients = [
    "from-cyan-600 via-blue-600 to-indigo-600",
    "from-violet-600 via-purple-600 to-pink-600",
    "from-emerald-600 via-teal-600 to-cyan-600",
    "from-orange-600 via-red-600 to-rose-600",
  ];

  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-20" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("career.title")}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Découvrez mon parcours professionnel et mes expériences marquantes
          </motion.p>
        </motion.div>

        {/* List of Experiences */}
        <div className="grid gap-8 md:grid-cols-2">
          {Array.isArray(experiences) &&
            experiences.map((exp, index) => {
              const gradient = cardGradients[index % cardGradients.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative h-full"
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500`}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      animate={hoveredIndex === index ? { x: "100%" } : { x: "-100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                      }}
                    />

                    <div className="relative p-8">
                      {/* Icon badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                        className={`absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                      >
                        <FaBriefcase className="text-white text-xl" />
                        <motion.div
                          animate={hoveredIndex === index ? {
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} blur-xl`}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 pr-16 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-white">
                        {exp.title}
                      </h3>

                      {/* Company and Duration */}
                      <div className="flex flex-col gap-2 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-20`}>
                            <FaBuilding className="text-sm" />
                          </div>
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-20`}>
                            <FaCalendarAlt className="text-sm" />
                          </div>
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>

                      {/* Divider with gradient */}
                      <motion.div 
                        className={`h-0.5 bg-gradient-to-r ${gradient} rounded-full mb-6`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                      />

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {exp.description}
                      </p>

                      {/* Corner decoration */}
                      <div className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500`} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
        />
      </div>
    </div>
  );
};

export default Career;