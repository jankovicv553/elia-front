import React from "react";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Pricing />
      </main>
    </>
  );
}

export default PricingPage;
