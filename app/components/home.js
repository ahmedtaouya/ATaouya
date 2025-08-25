"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// 1️⃣ Dynamic import of 3D canvas (disable SSR)
const ComputersCanvas = dynamic(() => import("./canvas/ComputersCanvas"), {
  ssr: false,
});

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center justify-center p-10 md:p-20 overflow-hidden bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/bghome.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Left Text Content */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-lg"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4">
          {t("hero.greeting")}
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-md mb-6">
          {t("hero.title")}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
          {t("button.descrption")}
        </p>
      </motion.div>

      {/* Right 3D Canvas */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96"
      >
        <ComputersCanvas />
      </motion.div>
    </div>
  );
};

export default Home;
