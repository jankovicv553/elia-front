import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery3.jpg";
import gallery5 from "../assets/images/gallery3.jpg";
import gallery6 from "../assets/images/gallery3.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const sliderWidth = sliderRef.current.scrollWidth;
        const maxDrag = containerWidth - sliderWidth;
        setDragWidth(maxDrag < 0 ? maxDrag : 0);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const disableScroll = () => {
      document.body.classList.add("no-scroll");
    };

    const enableScroll = () => {
      document.body.classList.remove("no-scroll");
    };

    if (selectedImage) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [selectedImage]);

  return (
    <motion.section
      className="py-20 px-6 bg-gray-50 touch-pan-y"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold text-center mb-10">
        {t("gallery.title")}
      </h2>
      {/* Drag area */}
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: dragWidth, right: 0 }}
          className="flex gap-6"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <motion.img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer select-none"
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.7 }}
                draggable="false"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Zoom overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-[90%] max-h-[80%] rounded-xl shadow-xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Gallery;
