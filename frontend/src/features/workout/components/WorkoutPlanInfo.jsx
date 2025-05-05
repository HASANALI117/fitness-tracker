import React from "react";

const WorkoutPlanInfo = ({ plan, activeWeekIndex, onWeekChange }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">
          Your AI Generated Workout Plan: {plan.goal}
        </h3>

        <div className="flex items-center space-x-2">
          <select
            className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
            value={activeWeekIndex}
            onChange={(e) => onWeekChange(parseInt(e.target.value))}
          >
            {plan.result.weekly_plans.map((week, idx) => (
              <option key={idx} value={idx}>
                Week {week.week}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between mb-4 text-sm">
        <div>
          <span className="text-gray-400 mr-1">Age:</span>
          {plan.age}
        </div>
        <div>
          <span className="text-gray-400 mr-1">Height:</span>
          {plan.height} cm
        </div>
        <div>
          <span className="text-gray-400 mr-1">Weight:</span>
          {plan.weight} kg
        </div>
        <div>
          <span className="text-gray-400 mr-1">Level:</span>
          {plan.fitness_level}
        </div>
        <div>
          <span className="text-gray-400 mr-1">Duration:</span>
          {plan.plan_duration_weeks} weeks
        </div>
      </div>
    </>
  );
};

export default WorkoutPlanInfo;
