import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-purple-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-5xl font-bold text-purple-800">
        Dobrodošli u Elia Pilates Studio
      </h1>
    </motion.div>
  );
}

export default Hero;
