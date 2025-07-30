import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Pricing />
      <Gallery />
      <VideoSection />
      <Contact />
    </div>
  );
}

export default App;
