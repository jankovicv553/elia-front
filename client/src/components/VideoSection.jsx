import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function VideoSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="video"
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">{t("video.title")}</h2>

      <div className="max-w-4xl mx-auto">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/videos/sample.mp4" type="video/mp4" />
          {t("video.fallback")}
        </video>
      </div>
    </motion.section>
  );
}

export default VideoSection;
