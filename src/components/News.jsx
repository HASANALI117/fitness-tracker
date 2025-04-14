import React from "react";

export default function News() {
  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <div className="bg-lime-400 text-black p-8 rounded-lg">
        <h2 className="text-5xl font-bold mb-2">Connect Engage Transform</h2>
        <p className="text-white mb-12 mt-6 text-sm">
          Join A Vibrant Community For Fuel Motivation, Engagement Drives
          Progress, And Transformation
        </p>
        <div className="max-w-lg mx-auto flex">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow p-3 rounded-lg focus:outline-none bg-white mr-4"
          />
          <button className="bg-black text-white py-3 px-6 rounded-lg">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
