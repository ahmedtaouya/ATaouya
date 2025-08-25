"use client";
import React, { useState } from "react";
import { FaSearchLocation, FaPhone, FaMailBulk } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../i18n";

// Simple 3D postal box (envelope style)
const PostalBox = () => {
  return (
    <mesh rotation={[0.2, 0.5, 0]}>
      <boxGeometry args={[1.2, 0.8, 0.3]} />
      <meshStandardMaterial color="#38BDF8" metalness={0.6} roughness={0.3} />
      {/* Envelope flap */}
      <mesh position={[0, 0.1, 0.16]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.6, 0.3, 4]} />
        <meshStandardMaterial color="#0ea5e9" />
      </mesh>
    </mesh>
  );
};

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
    <footer className="py-16 px-6 text-white  relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info + 3D Mailbox */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700 flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl font-bold mb-6">{t("contactInfo")}</h3>
          {/* 3D Mailbox */}
          <div className="w-full h-40 mb-6">
            <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight position={[3, 3, 3]} intensity={1.5} />
              <PostalBox />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
            </Canvas>
          </div>
          <ul className="space-y-4 text-gray-300">
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mt-4 p-3 rounded-lg text-center font-medium shadow-md ${
                  success
                    ? "bg-green-500/20 border border-green-400 text-green-300"
                    : "bg-red-500/20 border border-red-400 text-red-300"
                }`}
              >
                {success ? t("messageSent") : t("messageError")}
              </motion.div>
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
