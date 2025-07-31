import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "sr" ? "en" : "sr";
    i18n.changeLanguage(newLang);
  };

  const handleScrollTo = (sectionId) => {
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

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
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

        <ul className="flex gap-6 items-center text-black font-medium">
          <li>
            <button
              onClick={() => handleScrollTo("hero")}
              className="cursor-pointer hover:text-gray-600"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("about")}
              className="cursor-pointer hover:text-gray-600"
            >
              {t("about.title")}
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("gallery")}
              className="cursor-pointer hover:text-gray-600"
            >
              {t("gallery.title")}
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollTo("contact")}
              className="cursor-pointer hover:text-gray-600"
            >
              {t("contact.title")}
            </button>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-600"
            >
              Info ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded text-left z-50">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                  onClick={() => setDropdownOpen(false)}
                >
                  {t("pricing.title")}
                </NavLink>
                <NavLink
                  to="/video"
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                  onClick={() => setDropdownOpen(false)}
                >
                  {t("video.title")}
                </NavLink>
                <NavLink
                  to="/location"
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 ${
                      isActive ? "text-blue-500 font-semibold" : ""
                    }`
                  }
                  onClick={() => setDropdownOpen(false)}
                >
                  {t("location.title")}
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <button
              onClick={toggleLanguage}
              className="border border-black text-sm px-3 py-1 rounded-full hover:bg-black hover:text-white transition"
            >
              {i18n.language === "sr" ? "EN" : "SR"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
