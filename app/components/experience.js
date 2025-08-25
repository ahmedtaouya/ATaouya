"use client";
import React from "react";
import { motion } from "framer-motion";
import Card3D from "./ui/3d-card";

const experiences = [
  {
    date: "05/07/2023 – 05/08/2023",
    title: "Fondation Hassan II / Ministère de l'intérieur",
    description:
      "Contribution au développement d'applications web innovantes en utilisant React.js.",
    tech: ["React.js"],
  },
  {
    date: "04/07/2024 – 09/07/2024",
    title:
      "Finaliste de la première édition du Hackathon (Syndiconnect – plateforme marocaine innovante)",
    description:
      "Développement d'une plateforme qui simplifie la gestion des copropriétés pour les syndics et copropriétaires.",
    tech: ["React.js", "Node.js"],
  },
  {
    date: "16/07/2025 – 16/08/2025",
    title: "Mission chez Alexsys Solution, Rabat – Dev. Full Stack – ACAPS",
    description:
      "Application web/mobile de gestion des réclamations.",
    tech: ["Angular", "Spring Boot", "MySQL"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.5
    }
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    rotateX: 90 
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const techVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 200
    }
  }),
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(94, 234, 212, 0.3)",
    transition: { duration: 0.2 }
  }
};

export default function Experience() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text"
      >
        💼 Expériences
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover="hover"
            custom={i}
          >
            <Card3D>
              <motion.div 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                whileHover={{ 
                  background: "linear-gradient(to bottom right, #1e293b, #0f172a)" 
                }}
              >
                <motion.p 
                  className="text-sm text-gray-400 mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {exp.date}
                </motion.p>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {exp.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-4 flex-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {exp.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mt-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.7 }}
                >
                  {exp.tech.map((t, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30"
                      variants={techVariants}
                      custom={idx}
                      whileHover="hover"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </Card3D>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}