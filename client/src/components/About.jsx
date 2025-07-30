import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Dodaj na početku

function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">{t("about.title")}</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700">
        {t("about.description")}
      </p>
    </motion.section>
  );
}

export default About;
