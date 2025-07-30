import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import studioImage from "../assets/images/elia_home.jpeg";

function Hero() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "sr" ? "en" : "sr";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      className="relative h-screen w-full flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4] z-0"
        style={{ backgroundImage: `url(${studioImage})` }}
      ></div>

      <motion.button
        onClick={toggleLanguage}
        className="absolute top-6 left-6 z-20 text-sm md:text-base text-white border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition duration-300 shadow-md backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {i18n.language === "sr" ? "EN" : "SR"}
      </motion.button>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
      </div>
    </motion.div>
  );
}

export default Hero;
