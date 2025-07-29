import React from "react";
import { motion } from "framer-motion";

function VideoSection() {
  return (
    <motion.section
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold mb-6">
        Watch Our Training Session
      </h2>
      <div className="max-w-4xl mx-auto">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/videos/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  );
}

export default VideoSection;
