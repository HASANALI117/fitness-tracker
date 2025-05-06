import React from "react";

export default function WorkoutTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-2 border-b border-gray-800">
      <button
        onClick={() => setActiveTab("plan")}
        className={`px-4 py-2 font-medium transition-all ${
          activeTab === "plan"
            ? "text-lime-400 border-b-2 border-lime-400"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Workout Plan
      </button>
      <button
        onClick={() => setActiveTab("stats")}
        className={`px-4 py-2 font-medium transition-all ${
          activeTab === "stats"
            ? "text-lime-400 border-b-2 border-lime-400"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Statistics
      </button>
    </div>
  );
}
