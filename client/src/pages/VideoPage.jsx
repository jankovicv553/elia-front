import React from "react";
import VideoSection from "../components/VideoSection";
import Navbar from "../components/Navbar";

function VideoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <VideoSection />
      </main>
    </>
  );
}

export default VideoPage;
