import React from "react";
import { ChevronRight, Instagram, Facebook, Twitter } from "lucide-react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";
import Discover from "../components/Discover";
import Train from "../components/Train";
import Experience from "../components/Experience";
import Trainers from "../components/Trainers";

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

      {/* Newsletter */}

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
