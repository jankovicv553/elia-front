import React from "react";
import { motion } from "framer-motion";
import studioImage from "../assets/images/heroPage.jpg";

function Hero() {
  return (
    <motion.div
      className="relative h-screen w-full flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.4] z-0"
        style={{ backgroundImage: `url(${studioImage})` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to Elia Pilates Studio
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          The art of movement, strength, and balance. Discover your full
          potential through our guided Pilates sessions.
        </p>
      </div>
    </motion.div>
  );
}

export default Hero;
