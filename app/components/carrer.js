"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Career = () => {
  const { t } = useTranslation();
  const experiences = t("career.experiences", { returnObjects: true });

  return (
    <div className="p-8 bg-transparent rounded-lg">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        {t("career.title")}
      </motion.h2>

      {/* List of Experiences */}
      <div className="grid gap-8 md:grid-cols-2">
        {Array.isArray(experiences) &&
          experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl bg-gradient-to-br from-[#202A31] via-[#3A4852] to-[#202A31] border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal-400 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-300 italic mb-4">
                  {exp.company} • {exp.duration}
                </p>
                <div className="border-t border-white/20 my-3"></div>
                <p className="text-white text-opacity-90">{exp.description}</p>
              </div>
            </motion.div>
          ))}
      </div>

     
    </div>
  );
};

export default Career;
