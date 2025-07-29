import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">O našem studiju</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700">
        Elia Pilates Studio je prostor posvećen zdravlju, ravnoteži i snazi.
        Naši treninzi kombinuju modernu tehniku i umirujuće okruženje kako bi
        svaki klijent osetio celokupno fizičko i mentalno poboljšanje.
      </p>
    </motion.section>
  );
}

export default About;
