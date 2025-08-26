"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialButtons({ t }) {
  const buttons = [
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/ahmed-taouya-3b3563252/",
      color: "bg-blue-700 border-blue-700",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ahmed-taouya",
      color: "bg-gray-800 border-gray-800",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/0652954880",
      color: "bg-green-500 border-green-500",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:ahmad.taouya@gmail.com",
      color: "bg-red-500 border-red-500",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 10
      } 
    },
    hover: { 
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  // Handle potential missing translation function
  const footerText = t ? t("ATaouya.AllRightsReserved") : "ATaouya. All Rights Reserved";

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        className="flex flex-row items-center justify-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {buttons.map((btn, idx) => (
          <motion.a
            key={idx}
            href={btn.href}
            target="_blank"
            rel="noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative group w-14 flex flex-col items-center"
          >
            {/* Label on top */}
            <motion.span 
              className="mb-2 whitespace-nowrap px-3 py-1 rounded bg-black text-white text-sm opacity-0"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.3 }
              }}
            >
              {btn.label}
            </motion.span>

            {/* Floating background circles */}
            <motion.span
              className={`absolute w-14 h-14 rounded-full ${btn.color} opacity-20 blur-xl`}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.4 }
              }}
            ></motion.span>
            <motion.span
              className={`absolute w-14 h-14 rounded-full ${btn.color} opacity-30 blur-lg`}
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.4, delay: 0.1 }
              }}
            ></motion.span>

            {/* Icon button */}
            <motion.div
              className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full border-2 ${btn.color} text-white text-2xl shadow-lg`}
              whileHover={{ 
                rotate: [0, -5, 0, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              {btn.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer text - positioned slightly higher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-gray-400 text-sm -mt-2"
      >
        © {new Date().getFullYear()} — {footerText}
      </motion.div>
    </div>
  );
}