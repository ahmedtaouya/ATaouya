"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("home"), href: "#home" },
    { name: t("experiences"), href: "#experiences" },
    { name: t("projects"), href: "#projet" },
    { name: t("contact"), href: "#contact" },
  ];

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇲🇦" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-white/10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <div className="relative">
                <motion.div
                  animate={isScrolled ? {} : {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50"
                />
                <img 
                  src="/images/LogoAT.png" 
                  alt="Logo" 
                  className={`relative transition-all duration-300 ${
                    isScrolled ? "h-12 w-14" : "h-16 w-18"
                  }`}
                />
              </div>
            </motion.div>
          </a>

          {/* Navigation items - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group"
              >
                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

                <span className={`relative z-10 ${
                  activeSection === item.href
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    : "text-gray-300 group-hover:text-white"
                }`}>
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Language selector */}
            <div className="relative">
              <motion.button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <motion.div
                  animate={languageMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGlobe className="text-xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
              </motion.button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-48 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 py-2 z-50 overflow-hidden"
                  >
                    {languages.map((language, index) => (
                      <motion.button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                          i18n.language === language.code
                            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="text-2xl">{language.flag}</span>
                        <span className="font-medium">{language.name}</span>
                        {i18n.language === language.code && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                ) : (
                  <FaBars className="text-xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                )}
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 mx-6 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href);
                      setMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeSection === item.href
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-white/20"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Language selector for mobile */}
                <div className="pt-4 border-t border-white/10">
                  <p className="px-4 py-2 text-sm font-medium text-gray-400">
                    Language
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {languages.map((language, index) => (
                      <motion.button
                        key={language.code}
                        onClick={() => {
                          changeLanguage(language.code);
                          setMobileMenuOpen(false);
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          i18n.language === language.code
                            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-white/20"
                            : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-xl">{language.flag}</span>
                          <span className="text-xs">{language.code.toUpperCase()}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;