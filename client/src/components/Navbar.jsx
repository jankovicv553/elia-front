import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();

  const toggleLanguage = () => {
    const newLang = i18n.language === "sr" ? "en" : "sr";
    i18n.changeLanguage(newLang);
  };

  const handleScrollTo = (sectionId) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      !event.target.closest(".md\\:hidden")
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* LOGO LEFT */}
        <button
          onClick={() => handleScrollTo("hero")}
          className="cursor-pointer hover:text-gray-600"
        >
          <img
            src={logo}
            alt="Elia Logo"
            className="h-full max-h-12 object-contain"
            style={{ transform: "scale(2.5)", paddingTop: "2px" }}
          />
        </button>

        <ul className="hidden md:flex gap-6 items-center text-black font-medium">
          <li>
            <button onClick={() => handleScrollTo("hero")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScrollTo("about")}>
              {t("about.title")}
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollTo("gallery")}>
              {t("gallery.title")}
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollTo("contact")}>
              {t("contact.title")}
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollTo("map")}>
              {t("location.title")}
            </button>
          </li>
          <li className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              Info ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded text-left z-50">
                <NavLink
                  to="/team"
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                >
                  {t("team.title")}
                </NavLink>
                <NavLink
                  to="/pricing"
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                >
                  {t("pricing.title")}
                </NavLink>
                <NavLink
                  to="/video"
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                >
                  {t("video.title")}
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="border border-black text-sm px-2 py-0.5 rounded-full hover:bg-black hover:text-white transition"
            >
              {i18n.language === "sr" ? "EN" : "SR"}
            </button>
          </li>
        </ul>

        {/* BURGER MENU RIGHT (MOBILE ONLY) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu slide-in from left */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-md px-6 py-8 text-black z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 left-4 text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col items-start space-y-4 mt-10">
              <button
                onClick={() => handleScrollTo("hero")}
                className="text-left w-full"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollTo("about")}
                className="text-left w-full"
              >
                {t("about.title")}
              </button>
              <button
                onClick={() => handleScrollTo("gallery")}
                className="text-left w-full"
              >
                {t("gallery.title")}
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="text-left w-full"
              >
                {t("contact.title")}
              </button>
              <button
                onClick={() => handleScrollTo("map")}
                className="text-left w-full"
              >
                {t("location.title")}
              </button>
              <NavLink
                to="/team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left w-full"
              >
                {t("team.title")}
              </NavLink>
              <NavLink
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left w-full"
              >
                {t("pricing.title")}
              </NavLink>
              <NavLink
                to="/video"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left w-full"
              >
                {t("video.title")}
              </NavLink>

              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="border border-black px-2 py-0.5 rounded-full hover:bg-black hover:text-white transition"
              >
                {i18n.language === "sr" ? "EN" : "SR"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
