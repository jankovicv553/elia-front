import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./pages/PricingPage";
import VideoPage from "./pages/VideoPage";
import TeamPage from "./pages/TeamPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  </BrowserRouter>
);
