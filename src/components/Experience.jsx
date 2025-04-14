import React from "react";

export default function Experience() {
  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <h2 className="text-5xl font-bold mb-2">
        Experience
        <br />
        <span className="text-lime-400">Fitness Like Never Before</span>
      </h2>
      <p className="text-gray-400 mb-24 mt-6 text-sm">
        Transform The Way You Train With Innovative Workouts, Expert Guidance,
        And State-Of-The-Art Facilities
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="font-bold mb-3">Endurance Evolution</h3>
          <p className="text-gray-400 mb-4">
            Push your limits with our scientifically designed endurance programs
          </p>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md">
            Learn More
          </button>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="font-bold mb-3">Speed Surge</h3>
          <p className="text-gray-400 mb-4">
            Explosive training methods to increase your athletic performance
          </p>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
