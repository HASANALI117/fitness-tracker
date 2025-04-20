import React from "react";
import Navbar from "./Navbar";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <>
      <div className="hero relative">
        <Navbar />
        <div className="py-16 px-6 container mx-auto">
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

          <div className="flex flex-wrap justify-between max-w-3xl">
            <AnimatedCounter end={120} suffix="+" label="EXPERT COACHES" />
            <AnimatedCounter end={27} suffix="K" label="MEMBERS JOINED" />
            <AnimatedCounter end={20} suffix="+" label="FITNESS PROGRAM" />
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="62"
                viewBox="0 0 41 62"
                fill="none"
                className="mx-6"
              >
                <rect
                  y="28"
                  width="5"
                  height="34"
                  rx="2.5"
                  fill="#D7FB00"
                ></rect>
                <rect
                  x="9"
                  y="12"
                  width="5"
                  height="50"
                  rx="2.5"
                  fill="#D7FB00"
                ></rect>
                <rect
                  x="18"
                  y="27.2769"
                  width="5"
                  height="34.7231"
                  rx="2.5"
                  fill="#D7FB00"
                ></rect>
                <rect
                  x="27"
                  y="45"
                  width="5"
                  height="17"
                  rx="2.5"
                  fill="#D7FB00"
                ></rect>
                <rect
                  x="36"
                  width="5"
                  height="62"
                  rx="2.5"
                  fill="#D7FB00"
                ></rect>
              </svg>
              <AnimatedCounter
                end={240}
                suffix="KCAL"
                label="CALORIES BURNED"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
