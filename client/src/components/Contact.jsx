import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const phoneNumber = "381659477115";
  const message = "Zdravo, interesuje me više o vašim pilates treninzima!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.section
      className="py-20 px-6 bg-white-700 text-center text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">{t("contact.title")}</h2>
      <p className="text-lg mb-8">{t("contact.subtitle")}</p>

      {/* WhatsApp Button */}
      <div className="flex justify-center">
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition text-lg shadow-lg"
        >
          <FaWhatsapp className="text-2xl" />
          {t("contact.whatsapp")}
        </a>
      </div>

      {/* Social links */}
      <div className="flex justify-center mt-10 gap-6 text-2xl">
        <a
          href="https://www.instagram.com/elia_social_club/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@elia.socialclub"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-500 transition"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@eliasocialclub"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-500 transition"
        >
          <FaYoutube />
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
