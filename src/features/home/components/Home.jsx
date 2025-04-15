import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Inspiration from "./Inspiration";
import Discover from "./Discover";
import Train from "./Train";
import Experience from "./Experience";
import Trainers from "./Trainers";
import Success from "./Success";
import News from "./News";

export default function FitnessWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Inspiration Section */}
      <Inspiration />

      {/* Discover Section */}
      <Discover />

      {/* Train Smarter Section */}
      <Train />

      {/* Experience Section */}
      <Experience />

      {/* Trainers Section */}
      <Trainers />

      {/* Success Stories */}
      <Success />

      {/* Newsletter */}
      <News />

      {/* Footer */}
      <Footer />
    </div>
  );
}
