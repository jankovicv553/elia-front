import React from "react";
import { motion } from "framer-motion";

const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];

function Gallery() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-10">Galerija</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Pilates ${index + 1}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
