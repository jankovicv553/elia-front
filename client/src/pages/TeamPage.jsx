import React from "react";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Team />
      </main>
    </>
  );
}

export default TeamPage;
