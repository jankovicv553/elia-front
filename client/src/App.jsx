import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import MapSection from "./components/MapSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
