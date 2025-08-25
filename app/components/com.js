"use client";

import { useState, useEffect } from "react";
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

  // Parallax transforms
  const parallax1 = useTransform(scrollY, [0, 500], [0, 50]);
  const parallax2 = useTransform(scrollY, [0, 500], [0, -30]);
  const parallax3 = useTransform(scrollY, [0, 500], [0, 40]);

  // Animation variants
  const cardVariants = {
    
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 15, stiffness: 100, duration: 0.6 } },
    hover: { y: -10, scale: 1.05, rotateX: 10, rotateY: 10, transition: { type: "spring", stiffness: 400, damping: 12 } }
  };

  const iconVariants = {
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 12, duration: 0.6 } },
    hover: { scale: 1.2, rotate: [0, 360], transition: { duration: 0.8, repeat: Infinity, repeatType: "loop" } }
  };

  const TechCard = ({ title, description, tooltipItems, gradient, index }) => (
    <motion.div
      variants={cardVariants}
      
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      className="h-full"
    >
      <div className={`${gradient} rounded-2xl p-6 shadow-xl border border-gray-700 overflow-hidden relative transition-transform duration-400`}>
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-blue-500/20 opacity-0"
          animate={{ opacity: hoveredCard === index ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4" variants={iconVariants}>
            <Card3D>
              <FontAwesomeIcon
                icon={
                  title === "Front-end" ? faCode
                  : title === "Back-end" ? faServer
                  : title === "Database" ? faDatabase
                  : faPaintBrush
                }
                className="text-3xl text-white"
              />
            </Card3D>
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="opacity-80 mb-4 text-gray-300">{description}</p>

          <div className="technologies mt-6 relative z-10">
            <h4 className="font-semibold text-white mb-3 text-center">Technologies</h4>
            <div className="flex flex-row flex-wrap justify-center gap-3 p-0">
              <AnimatedTooltip items={tooltipItems} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-2">Technology Stack</h1>
        <p className="text-lg text-center text-gray-300 mb-12">Hover over each technology to see details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard title="Front-end" description="User Interface Development" tooltipItems={languages} gradient="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700" index={0} />
          <TechCard title="Back-end" description="Server & Application Logic" tooltipItems={frameworks} gradient="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700" index={1} />
          <TechCard title="Database" description="Data Storage & Management" tooltipItems={databases} gradient="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700" index={2} />
          <TechCard title="Graphic Design" description="Visual Design & UX/UI" tooltipItems={systems} gradient="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700" index={3} />
        </div>
      </div>

      {/* Parallax floating backgrounds */}
      <motion.div className="absolute -top-24 left-1/4 w-40 h-40 rounded-full bg-teal-500/20 blur-3xl -z-10" style={{ y: parallax1 }} />
      <motion.div className="absolute -bottom-24 right-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl -z-10" style={{ y: parallax2 }} />
      <motion.div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-purple-500/20 blur-2xl -z-10" style={{ y: parallax3 }} />
    </motion.div>
  );
};

export default Competencies;
