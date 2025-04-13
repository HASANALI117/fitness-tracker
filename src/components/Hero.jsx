import React from "react";

export default function Hero() {
  return (
    <div className="container mx-auto py-16 px-6 relative">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 z-10 md:pr-8">
          <h1 className="text-5xl font-bold mb-4">
            Sculpt <span className="text-lime-400">Your</span> Body,
            <br />
            Elevate <span className="text-lime-400">Your</span> Spirit
          </h1>
          <p className="mb-8 text-gray-400">
            Join 10k+ members transforming their lives through fitness
          </p>
          <button className="bg-lime-400 text-black px-6 py-3 rounded-md font-medium cursor-pointer">
            Join Now
          </button>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

          <img
            src="https://img.goodfon.com/wallpaper/big/d/5a/bodybuilding-bodibilder-weight-training-muscles-bodybuilder.webp"
            alt="Hero img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
