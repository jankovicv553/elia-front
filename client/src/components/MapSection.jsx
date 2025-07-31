import React from "react";
import { useTranslation } from "react-i18next";

function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="py-20 px-6 bg-white text-center text-black">
      <h2 className="text-4xl font-semibold mb-10">{t("location.title")}</h2>
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Elia Pilates Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.1872643415122!2d20.39874555328795!3d44.81393409841104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f803cac1c83%3A0x9c00f299f8ee2ebf!2zQnVsZXZhciBIZXJvamEgc2EgS2_FoWFyYSA4LCDQkdC10L7Qs9GA0LDQtA!5e0!3m2!1ssr!2srs!4v1753903199941!5m2!1ssr!2srs"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
