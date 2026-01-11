"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaDownload,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const CallToAction = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ahmad.taouya@gmail.com",
      href: "mailto:ahmad.taouya@gmail.com",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: FaPhone,
      label: "Téléphone",
      value: "+212 652 954 880",
      href: "tel:+212652954880",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Ahmed Taouya",
      href: "https://linkedin.com/in/ahmed-taouya-3b3563252/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@ahmed-taouya",
      href: "https://github.com/ahmedtaouya",
      gradient: "from-gray-600 to-gray-800",
    },
  ];

  const features = [
    "Disponible pour des projets freelance",
    "Réponse rapide sous 24h",
    "Consultation gratuite de 30min",
    "Portfolio de projets réussis",
  ];

  return (
    <div className="relative py-32 px-6 overflow-hidden">
 
   

      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Mega Glow */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-50"
          />

          {/* Card */}
          <div className="relative  backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Top Gradient Bar */}
            <motion.div
              className="h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="p-10 md:p-16">
              {/* Floating Icon */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-2xl"
                >
                  <FaRocket className="text-5xl text-white" />
                </motion.div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-center mb-6 tracking-tight"
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Prêt à lancer
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  votre prochain projet ?
                </span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Transformons vos idées en réalité. Je suis disponible pour des collaborations, 
                des projets freelance, ou simplement pour discuter de vos besoins techniques.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <FaCheckCircle className="text-cyan-400 text-xl flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Primary Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredButton("contact")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group relative px-8 py-4 rounded-xl font-bold text-lg text-white overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                    animate={hoveredButton === "contact" ? {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  <span className="relative flex items-center gap-2">
                    <FaEnvelope />
                    Me contacter
                    <motion.span
                      animate={{ x: hoveredButton === "contact" ? 5 : 0 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                </motion.a>

                <motion.a
                  href="/public/cv.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredButton("cv")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group px-8 py-4 rounded-xl font-bold text-lg bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FaDownload />
                    Télécharger CV
                  </span>
                </motion.a>

                <motion.a
                  href="https://calendly.com/app/scheduled_events/user/me"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-xl font-bold text-lg bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt />
                    Planifier un appel
                  </span>
                </motion.a>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
              />

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="text-center text-gray-400 font-semibold mb-6 uppercase tracking-wider text-sm">
                  Ou contactez-moi directement
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        {/* Glow */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300`} />
                        
                        {/* Card */}
                        <div className="relative flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                            <IconComponent className="text-2xl text-white" />
                          </div>
                          <div className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">
                            {method.label}
                          </div>
                          <div className="text-sm text-white font-medium text-center">
                            {method.value}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          💡 N'hésitez pas à me contacter pour discuter de votre projet !
        </motion.p>
      </div>
    </div>
  );
};

export default CallToAction;