"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/ComputersCanvas";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative h-screen flex flex-col md:flex-row items-center justify-center p-10 md:p-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bghome.png')" }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-black z-0"
      />

      {/* Left Side - Text */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4"
        >
          {t("hero.greeting")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-md mb-6"
        >
          {t("hero.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed"
        >
          {t("button.descrption")}
        </motion.p>

        <motion.a
          href="/images/CV.pdf"
          download="Ahmed_TAOUYA_CV.pdf"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px #fff",
            boxShadow: "0px 0px 20px rgba(255,255,255,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block font-medium text-white border-2 border-white rounded-full px-8 py-3 bg-black/50 shadow-lg transition-colors duration-300"
        >
          {t("button.download")}
        </motion.a>
      </motion.div>

      {/* Right Side - 3D Developer Canvas */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px]"
      >
        {/* Floating effect */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <ComputersCanvas />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
