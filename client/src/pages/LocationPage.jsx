import React from "react";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";

function LocationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <MapSection />
      </main>
    </>
  );
}

export default LocationPage;
