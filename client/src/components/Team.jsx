import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import team1 from "../assets/images/gallery1.jpg";
import team2 from "../assets/images/gallery2.jpg";
import team3 from "../assets/images/gallery3.jpg";

function TeamSection() {
  const { t, i18n } = useTranslation();

  const teamMembers = t("team.members", { returnObjects: true });
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const swipeConfidenceThreshold = 10000;

  const paginate = (newDirection) => {
    const newIndex =
      (currentIndex + newDirection + teamMembers.length) % teamMembers.length;
    setCurrentIndex([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const images = [team1, team2, team3];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-10">{t("team.title")}</h2>
      <div className="relative w-full max-w-md mx-auto h-[550px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
            className="absolute w-full h-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col"
          >
            <img
              src={images[currentIndex]}
              alt={teamMembers[currentIndex].name}
              className="h-64 w-full object-cover"
            />
            <div className="flex-1 p-6 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-1">
                {teamMembers[currentIndex].name}
              </h3>
              <p className="text-gray-500 italic mb-2">
                {teamMembers[currentIndex].role}
              </p>
              <p className="text-gray-700 text-center">
                {teamMembers[currentIndex].bio}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TeamSection;
