"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialButtons({ t }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const buttons = [
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/ahmed-taouya-3b3563252/",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      glow: "shadow-blue-500/50",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ahmed-taouya",
      gradient: "from-gray-800 via-gray-700 to-slate-600",
      glow: "shadow-gray-500/50",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/0652954880",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      glow: "shadow-green-500/50",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:ahmad.taouya@gmail.com",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      glow: "shadow-red-500/50",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 15,
      } 
    },
  };

  const footerText = t ? t("ATaouya.AllRightsReserved") : "ATaouya. All Rights Reserved";

  return (
    <div className="flex flex-col items-center gap-12 py-8">
      {/* Social Buttons */}
      <motion.div
        className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {buttons.map((btn, idx) => (
          <motion.div
            key={idx}
            variants={buttonVariants}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip Label */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 z-50"
                >
                  <div className="relative">
                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm font-medium shadow-2xl border border-white/20 backdrop-blur-sm whitespace-nowrap">
                      {btn.label}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-white/20" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={btn.href}
              target="_blank"
              rel="noreferrer"
              className="relative block"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={hoveredIndex === idx ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                  rotate: [0, 180, 360],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-r ${btn.gradient} opacity-40 blur-xl`} />
              </motion.div>

              {/* Outer glow */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${btn.gradient} opacity-0 blur-2xl transition-opacity duration-500 ${hoveredIndex === idx ? 'opacity-60' : ''}`}
              />

              {/* Main button */}
              <motion.div
                className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${btn.gradient} text-white text-2xl md:text-3xl shadow-2xl ${btn.glow} border border-white/20 overflow-hidden`}
                animate={hoveredIndex === idx ? {
                  boxShadow: [
                    "0 20px 60px rgba(0,0,0,0.3)",
                    "0 25px 80px rgba(0,0,0,0.5)",
                    "0 20px 60px rgba(0,0,0,0.3)",
                  ],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={hoveredIndex === idx ? {
                    x: ["-100%", "200%"],
                  } : { x: "-100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Icon with rotation */}
                <motion.div
                  animate={hoveredIndex === idx ? {
                    rotate: [0, -15, 15, -15, 0],
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  {btn.icon}
                </motion.div>

                {/* Pulse ring on hover */}
                {hoveredIndex === idx && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </motion.a>

            {/* Bottom particle effect */}
            {hoveredIndex === idx && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-gradient-to-r ${btn.gradient}`}
                    initial={{ 
                      y: 0, 
                      x: -2, 
                      opacity: 1,
                      scale: 1,
                    }}
                    animate={{ 
                      y: [0, -30, -50],
                      x: [-2, (i - 1) * 15, (i - 1) * 20],
                      opacity: [1, 0.5, 0],
                      scale: [1, 1.5, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative divider */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
      />

      {/* Footer text with gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} —{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            {footerText}
          </span>
        </p>
        
      </motion.div>
    </div>
  );
}