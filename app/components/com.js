"use client";

import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import technologies from "../data/technologies";
import Card3D from "./ui/3d-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faDatabase, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const { languages, frameworks, databases, systems } = technologies;

const Competencies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollY } = useViewportScroll();

  const parallax1 = useTransform(scrollY, [0, 500], [0, 50]);
  const parallax2 = useTransform(scrollY, [0, 500], [0, -30]);
  const parallax3 = useTransform(scrollY, [0, 500], [0, 40]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100, 
        duration: 0.6 
      } 
    },
    hover: { 
      y: -15, 
      scale: 1.05, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 12 
      } 
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 12, 
        duration: 0.6 
      } 
    },
    hover: { 
      scale: 1.15, 
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 0.5,
      } 
    }
  };

  const cardConfig = [
    {
      title: "Front-end",
      description: "User Interface Development",
      tooltipItems: languages,
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: faCode,
      glowColor: "cyan",
    },
    {
      title: "Back-end",
      description: "Server & Application Logic",
      tooltipItems: frameworks,
      gradient: "from-violet-600 via-purple-600 to-pink-600",
      icon: faServer,
      glowColor: "purple",
    },
    {
      title: "Database",
      description: "Data Storage & Management",
      tooltipItems: databases,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: faDatabase,
      glowColor: "teal",
    },
    {
      title: "Graphic Design",
      description: "Visual Design & UX/UI",
      tooltipItems: systems,
      gradient: "from-orange-600 via-red-600 to-rose-600",
      icon: faPaintBrush,
      glowColor: "rose",
    },
  ];

  const TechCard = ({ title, description, tooltipItems, gradient, icon, index, glowColor }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      className="h-full group"
    >
      <div className="relative h-full">
        {/* Glow effect */}
        <motion.div
          className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500`}
        />

        {/* Card */}
        <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden h-full">
          {/* Animated gradient overlay */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ 
              x: "100%",
              transition: { duration: 1, ease: "easeInOut" }
            }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
            }}
          />

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Icon container */}
            <motion.div 
              className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-2xl`}
              variants={iconVariants}
            >
              {/* Pulsing glow */}
              <motion.div
                animate={hoveredCard === index ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} blur-xl`}
              />

              <Card3D>
                <FontAwesomeIcon
                  icon={icon}
                  className="text-4xl text-white relative z-10"
                />
              </Card3D>
            </motion.div>

            {/* Title */}
            <motion.h3 
              className="text-2xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-sm group-hover:text-gray-300 transition-colors">
              {description}
            </p>

            {/* Divider */}
            <motion.div 
              className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full mb-6`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />

            {/* Technologies section */}
            <div className="technologies w-full relative z-10">
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Technologies
              </h4>
              <div className="flex flex-row flex-wrap justify-center gap-3">
                <AnimatedTooltip items={tooltipItems} />
              </div>
            </div>
          </div>

          {/* Corner decoration */}
          <div className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500`} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
      

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technology Stack
          </h1>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hover over each technology to see details and expertise level
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardConfig.map((config, index) => (
            <TechCard key={index} {...config} index={index} />
          ))}
        </div>
      </div>

      {/* Enhanced Parallax floating backgrounds */}
      <motion.div 
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl -z-10" 
        style={{ y: parallax1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl -z-10" 
        style={{ y: parallax2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl -z-10" 
        style={{ y: parallax3 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Additional ambient orbs */}
      <motion.div 
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Competencies;