import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <div className="hero relative">
        <Navbar />
        <div className="container mx-auto py-16 px-6">
          <div className="flex flex-col-reverse md:flex-row items-center h-[60vh]">
            <div className="w-full md:w-1/2 z-10 md:pr-8">
              <h1 className="text-6xl font-bold mb-4">
                SORE <span className="text-lime-400">TODAY</span>
                <br />
                STRONG <span className="text-lime-400">TOMORROW</span>
              </h1>
              <p className="mb-8 text-gray-400">
                Join 10k+ members transforming their lives through fitness
              </p>
              <button className="bg-lime-400 text-black px-6 py-3 rounded-md font-medium cursor-pointer">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
