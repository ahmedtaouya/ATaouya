"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👉 Ancres au lieu des routes
  const navItems = [
    { name: t("home"), href: "#home" },
    { name: t("experiences"), href: "#experiences" },
    { name: t("projects"), href: "#projet" },
    { name: t("contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      href: "https://github.com/ahmedtaouya",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      href: "https://linkedin.com/in/ahmed-taouya-3b3563252/",
      label: "LinkedIn",
    },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "h-14 bg-gradient-to-b from-[#202A31] via-[#3A4852] to-[#202A31] shadow-lg" : "h-20 bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 h-full flex items-center justify-between transition-colors duration-300 ${
          isScrolled ? "bg-gradient-to-b from-[#202A31] via-[#3A4852] to-[#202A31]" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img src="/images/logoAT.png" alt="Logo" className="h-16 w-18" />
          </motion.div>
        </a>

        {/* Navigation items - Desktop */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-sm lg:text-base lg:px-4 font-medium rounded-xl transition-colors ${
                isScrolled
                  ? "text-white hover:text-black hover:bg-gray-100"
                  : "text-white hover:text-black hover:bg-white/80"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right section: Social links and language selector */}
        <div className="flex items-center space-x-3">
          {/* Social links */}
          <div className="hidden sm:flex items-center space-x-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isScrolled
                    ? "bg-gray-100 text-black hover:bg-white hover:text-black"
                    : "bg-white/20 text-white hover:bg-white hover:text-black"
                }`}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Language selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? "bg-gray-100 text-black hover:bg-white hover:text-black"
                  : "bg-white/20 text-white hover:bg-white hover:text-black"
              }`}
              aria-label="Change language"
            >
              <FaGlobe className="text-lg" />
            </button>

            <AnimatePresence>
              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language === language.code
                          ? "bg-gray-100 text-black"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-2">{language.flag}</span>
                      {language.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-9 h-9 rounded-md flex items-center justify-center transition-colors ${
              isScrolled
                ? "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                : "bg-white/20 text-white hover:bg-white hover:text-black"
            }`}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
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
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}

              {/* Language selector for mobile */}
              <div className="pt-2">
                <p className="px-3 py-2 text-sm font-medium text-gray-500">
                  Language
                </p>
                <div className="flex space-x-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded-md text-sm ${
                        i18n.language === language.code
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {language.flag} {language.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
