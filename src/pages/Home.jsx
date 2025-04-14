import React from "react";
import { ChevronRight, Instagram, Facebook, Twitter } from "lucide-react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";
import Discover from "../components/Discover";
import Train from "../components/Train";

export default function FitnessWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <Hero></Hero>

      {/* Inspiration Section */}
      <Inspiration></Inspiration>

      {/* Discover Section */}
      <Discover />

      {/* Train Smarter Section */}
      <Train></Train>

      {/* Experience Section */}

      {/* Trainers Section */}

      {/* Success Stories */}

      {/* Newsletter */}

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
