"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  { title: "The Unix Workbench", image: "/images/unix.png" },
  { title: "C++ Mastery", image: "/images/c++.png" },
  { title: "JavaScript Proficiency", image: "/images/js.png" },
  { title: "UI/UX Expertise", image: "/images/ui ux.png" },
  { title: "React Developer", image: "/images/react2.png" },
  { title: "Software Engineering", image: "/images/soft.png" },
  { title: "Python for Data Science", image: "/images/phython.png" },
];

function Cours() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  // Close modal with ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text ">
        📜 Certificates
      </h2>

      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="p-4 cursor-pointer"
            onClick={() => handleOpen(cert.image)}
            whileHover={{ scale: 1.05, rotateX: 7, rotateY: -7 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <motion.div
              className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700 overflow-hidden perspective-1000"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="h-72 w-full object-contain rounded-xl mb-4 shadow-inner"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3
                className="text-lg font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                {cert.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </Slider>

      {/* Full-screen modal */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-5xl mx-auto px-4">
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 bg-white/90 text-gray-900 rounded-full px-3 py-1 shadow-md hover:bg-white transition"
            >
              ✕
            </button>
            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl border border-white/20"
              initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Cours;
