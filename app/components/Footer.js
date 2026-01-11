"use client";
import React, { useState } from "react";
import { FaSearchLocation, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Footer() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: FaSearchLocation, text: t("location"), color: "from-violet-400 to-purple-500" },
    { icon: FaPhone, text: t("phone"), color: "from-cyan-400 to-blue-500" },
    { icon: FaMailBulk, text: t("email"), color: "from-pink-400 to-rose-500" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ahmed-taouya", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/ahmed-taouya-3b3563252/", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];
const footerText = t ? t("ATaouya.AllRightsReserved") : "ATaouya. All Rights Reserved";
  return (
    <footer className="relative py-24 px-6 text-white overflow-hidden">
      {/* Animated Background */}
      

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {t("getInTouch")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's create something amazing together. Drop us a message and we'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Mailbox Card */}
            <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-8xl mb-4 cursor-pointer filter drop-shadow-2xl"
                >
                  📬
                </motion.div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("contactInfo")}
                </h3>
              </div>

              <ul className="space-y-5">
                {contactItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="relative group/item"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}>
                        <item.icon className="text-white text-xl" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">
                        {item.text}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4 text-center">Follow me</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-slate-800/50 border border-white/10 hover:border-violet-500/50 hover:bg-slate-700/50 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5 rounded-3xl" />
              
              <div className="relative">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  Send me a message
                </h3>

                <div className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("name")}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full p-4 pl-6 rounded-2xl bg-slate-900/80 border-2 border-white/10 focus:border-violet-500 text-white placeholder-gray-500 outline-none transition-all duration-300 hover:border-white/20"
                    />
                    {focusedInput === "name" && (
                      <motion.div
                        layoutId="inputHighlight"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 -z-10 blur-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("emailLabel")}
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full p-4 pl-6 rounded-2xl bg-slate-900/80 border-2 border-white/10 focus:border-cyan-500 text-white placeholder-gray-500 outline-none transition-all duration-300 hover:border-white/20"
                    />
                    {focusedInput === "email" && (
                      <motion.div
                        layoutId="inputHighlight"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 -z-10 blur-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      rows="6"
                      placeholder={t("message")}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full p-4 pl-6 rounded-2xl bg-slate-900/80 border-2 border-white/10 focus:border-pink-500 text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none hover:border-white/20"
                    />
                    {focusedInput === "message" && (
                      <motion.div
                        layoutId="inputHighlight"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-violet-500/20 -z-10 blur-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full py-4 rounded-2xl font-bold text-lg text-white shadow-2xl overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        ],
                        x: ["-100%", "100%"],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                          >
                            ⚡
                          </motion.span>
                          {t("sending")}
                        </>
                      ) : (
                        <>
                          {t("submit")}
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {success !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`p-4 rounded-2xl text-center font-semibold shadow-lg border-2 ${
                        success
                          ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-300"
                          : "bg-red-500/20 border-red-400/50 text-red-300"
                      }`}
                    >
                      <span className="text-2xl mr-2">{success ? "✓" : "✗"}</span>
                      {success ? t("messageSent") : t("messageError")}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500"
        >
           <p className="text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} —{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            {footerText}
          </span>
        </p>
        </motion.div>
      </div>
    </footer>
  );
}