"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="   bg-[url('/images/bghome.png')] bg-cover bg-center  flex flex-col md:flex-row justify-center items-center p-20 gap-1 h-screen relative">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Right Side - Image Container */}
      <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-2 border-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] overflow-hidden">
        <img
          src="images/ahmed.jpg"
          alt="Ahmed TAOUYA"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Left Side - Text Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          {t("hero.greeting")}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white drop-shadow-lg">
          {t("hero.title")}
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white drop-shadow-lg max-w-2xl">
          {t("button.descrption")}
        </p>
        <a
          href="/images/CV.pdf"
          download="Ahmed_TAOUYA_CV.pdf"
          className="no-underline text-white font-sans font-semibold rounded-full border-2 border-white py-3 px-10 bg-black/50 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg animate-bounce "
        >
          {t("button.download")}
        </a>
      </div>
    </div>
  );
}

export default Home;