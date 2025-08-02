import React from "react";
import { useTranslation } from "react-i18next";

function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="py-20 px-6 bg-gray-50 text-center text-black">
      <h2 className="text-4xl font-semibold mb-10">{t("location.title")}</h2>
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Elia Pilates Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.372237738328!2d20.397204375764144!3d44.81398077658762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f07ed82a093%3A0x9942d0914cb9cb7!2sElia%20Boutique%20Pilates%20Studio!5e0!3m2!1ssr!2srs!4v1754132569979!5m2!1ssr!2srs"
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
