import React from "react";
import { motion } from "framer-motion";
import studioImage from "../assets/images/elia_home.jpeg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.4] z-0"
        style={{ backgroundImage: `url(${studioImage})` }}
      ></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
      </div>
    </motion.section>
  );
}

export default Hero;
