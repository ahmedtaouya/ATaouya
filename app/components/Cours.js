import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  { title: "The Unix Workbench", image: "/images/unix.png", org: "Johns Hopkins University", year: "2024" },
  { title: "C++ Mastery", image: "/images/c++.png", org: "Udemy", year: "2024" },
  { title: "JavaScript Proficiency", image: "/images/js.png", org: "freeCodeCamp", year: "2023" },
  { title: "UI/UX Expertise", image: "/images/ui ux.png", org: "Google", year: "2023" },
  { title: "React Developer", image: "/images/react2.png", org: "Meta", year: "2024" },
  { title: "Software Engineering", image: "/images/soft.png", org: "MIT", year: "2023" },
  { title: "Python for Data Science", image: "/images/phython.png", org: "IBM", year: "2024" },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getVisibleCerts = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + certificates.length) % certificates.length;
      visible.push({ ...certificates[index], position: i });
    }
    return visible;
  };

  return (
    <div className=" py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96  rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-9 rounded-full blur-3xl"
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
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
       
          </motion.div>
          <h1 className="text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Certificates</span>
          </h1>
          <p className="text-slate-400 text-lg">Professional certifications & achievements</p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-semibold">{certificates.length} Certificates</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[600px] flex items-center justify-center mb-12">
          <AnimatePresence mode="popLayout">
            {getVisibleCerts().map((cert, i) => {
              const isCenter = cert.position === 0;
              const zIndex = isCenter ? 30 : 20 - Math.abs(cert.position);
              
              return (
                <motion.div
                  key={`${cert.title}-${currentIndex}`}
                  initial={{ 
                    x: cert.position * 400,
                    scale: 0.8,
                    opacity: 0,
                    rotateY: cert.position * 25
                  }}
                  animate={{
                    x: cert.position * 380,
                    scale: isCenter ? 1 : 0.75,
                    opacity: isCenter ? 1 : 0.4,
                    rotateY: cert.position * 25,
                    z: isCenter ? 0 : -100,
                  }}
                  exit={{
                    x: cert.position * 400,
                    scale: 0.7,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                  }}
                  style={{
                    position: 'absolute',
                    zIndex,
                  }}
                  className={`${isCenter ? 'cursor-pointer' : 'pointer-events-none'}`}
                  onClick={() => isCenter && setSelectedCert(cert)}
                >
                  <motion.div
                    whileHover={isCenter ? { y: -10, scale: 1.02 } : {}}
                    className="relative group"
                  >
                    {/* Glow effect */}
                    {isCenter && (
                      <motion.div
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-3xl blur-xl"
                      />
                    )}

                    {/* Card */}
                    <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 w-[400px]">
                      {/* Certificate image */}
                      <div className="relative rounded-xl overflow-hidden mb-4 bg-slate-800/50">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-[280px] object-cover"
                        />
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                              Click to view
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-cyan-400">{cert.org}</span>
                          <span className="text-slate-400">{cert.year}</span>
                        </div>
                      </div>

                      {/* Badge */}
                      {isCenter && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full p-2">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-40 bg-slate-900/80 backdrop-blur-xl border border-slate-700 text-white p-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-40 bg-slate-900/80 backdrop-blur-xl border border-slate-700 text-white p-3 rounded-full hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative"
            >
              <motion.div
                animate={{
                  scale: index === currentIndex ? 1 : 0.8,
                  opacity: index === currentIndex ? 1 : 0.4,
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-cyan-400 to-violet-400' 
                    : 'bg-slate-600'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Full screen modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: -10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate info */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-t-2xl p-4 mb-2">
                <h2 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h2>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <span>{selectedCert.org}</span>
                  <span>•</span>
                  <span>{selectedCert.year}</span>
                </div>
              </div>

              {/* Image */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-b-2xl border border-slate-700"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;