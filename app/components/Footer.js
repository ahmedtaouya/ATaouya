"use client";
import React, { useState } from "react";
import { FaSearchLocation, FaPhone, FaMailBulk } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Footer() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

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

  return (
    <footer className="  py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6">{t("contactInfo")}</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaSearchLocation className="text-teal-400 text-xl" />
              <span>{t("location")}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-teal-400 text-xl" />
              <span>{t("phone")}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMailBulk className="text-teal-400 text-xl" />
              <span>{t("email")}</span>
            </li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6">{t("getInTouch")}</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder={t("name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-500 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder={t("emailLabel")}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-500 outline-none transition"
            />
            <textarea
              name="message"
              rows="4"
              placeholder={t("message")}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-500 outline-none transition"
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 font-semibold text-white shadow-lg hover:shadow-2xl transition-all"
            >
              {loading ? t("sending") : t("submit")}
            </motion.button>

            {success !== null && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-2 text-sm ${
                  success ? "text-green-400" : "text-red-400"
                }`}
              >
                {success ? t("messageSent") : t("messageError")}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-12 text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} — {t("allRightsReserved")}
      </motion.div>
    </footer>
  );
}
