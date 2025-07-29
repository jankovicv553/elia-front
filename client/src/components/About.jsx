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
      <h2 className="text-4xl font-semibold mb-6">About Our Studio</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700">
        Elia Pilates Studio is a space dedicated to health, balance, and
        strength. Our training sessions combine modern techniques with a calming
        environment, helping each client experience complete physical and mental
        well-being.
      </p>
    </motion.section>
  );
}

export default About;
