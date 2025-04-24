import React from "react";

const FitnessStats = () => {
  return (
    <div className="bg-gray-900/80 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-6">Fitness Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-black/40 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-400">Workouts Completed</div>
          <div className="text-2xl font-bold text-lime-400">0</div>
        </div>
        <div className="bg-black/40 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-400">Total Hours</div>
          <div className="text-2xl font-bold text-lime-400">0</div>
        </div>
        <div className="bg-black/40 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-400">Avg. Calories Burned</div>
          <div className="text-2xl font-bold text-lime-400">0</div>
        </div>
        <div className="bg-black/40 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-400">Progress</div>
          <div className="text-2xl font-bold text-lime-400">0%</div>
        </div>
      </div>
    </div>
  );
};

export default FitnessStats;
