import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import MapSection from "./components/MapSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <MapSection />
    </div>
  );
}

export default App;
