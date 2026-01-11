import { useState } from "react";
import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Compare } from "./ui/compare";

const AboutMe = () => {
  const { t } = useTranslation();
  const content = {
    description1: t("description1"),
    description2: t("description2"),
    description3: t("description3"),
    description4: t("description4")
  };
  
  const [hoveredParagraph, setHoveredParagraph] = useState(null);
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <div className="relative">
            
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
          <h1 className="text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-slate-400 text-lg">Get to know who I am & what I do</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {Object.values(content).map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredParagraph(index)}
                onMouseLeave={() => setHoveredParagraph(null)}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: hoveredParagraph === index ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl blur-xl"
                />

                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
                >
                  {/* Accent bar */}
                  <motion.div
                    animate={{
                      width: hoveredParagraph === index ? "100%" : "4px",
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-b from-cyan-400 to-violet-400 rounded-l-xl"
                  />

                  <p className="text-slate-300 leading-relaxed pl-4">
                    {text}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    animate={{
                      opacity: hoveredParagraph === index ? 1 : 0,
                      x: hoveredParagraph === index ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 mt-3 text-cyan-400 text-sm pl-4"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Paragraph {index + 1}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section with Compare Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center items-center"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            {/* Glow effect wrapper */}
            <div className="relative w-full">
              <motion.div
                animate={{
                  opacity: imageHovered ? 0.6 : 0.3,
                  scale: imageHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-3xl blur-2xl"
              />

              {/* Compare Component Container */}
              <div className="relative">
                <Compare
                  firstImage="/images/cv.jpg"
                  secondImage="/images/cv2.jpg"
                  firstImageClassName="object-cover object-left-top rounded-2xl"
                  secondImageClassname="object-cover object-left-top rounded-2xl"
                  className="h-64 w-full md:h-[500px] md:w-full rounded-2xl shadow-xl border border-gray-700"
                  slideMode="hover"
                />
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default AboutMe;