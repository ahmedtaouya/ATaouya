"use client";
import React from "react";
import { motion } from "framer-motion";
import { Compare } from "./ui/compare";
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, rotateX: 90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 10, stiffness: 100, duration: 0.8 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100, duration: 0.8 } },
    hover: { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2, type: "spring", damping: 12, stiffness: 100 } })
  };

  return (
    <motion.section 
      className="py-16 px-4 md:px-20 bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 max-w-6xl mx-auto relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
        variants={titleVariants}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <motion.div
          className="text-white text-base md:text-lg space-y-4 md:space-y-6 leading-relaxed w-full md:w-1/2"
          variants={containerVariants}
        >
          {[t("description1"), t("description2"), t("description3"), t("description4")].map((text, index) => (
            <motion.p
              key={index}
              variants={paragraphVariants}
              custom={index}
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Compare Images */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          variants={imageVariants}
          whileHover="hover"
        >
          <Compare
            firstImage="/images/cv.jpg"
            secondImage="/images/cv2.jpg"
            firstImageClassName="object-cover object-left-top rounded-2xl"
            secondImageClassname="object-cover object-left-top rounded-2xl"
            className="h-64 w-full md:h-[500px] md:w-[750px] rounded-2xl shadow-xl border border-gray-700"
            slideMode="hover"
          />
        </motion.div>
      </div>

      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-4 left-2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-500/10 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-4 right-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 blur-xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </motion.section>
  );
};

export default AboutMe;
