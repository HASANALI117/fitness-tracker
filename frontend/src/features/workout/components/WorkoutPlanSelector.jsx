import React from "react";

const WorkoutPlanSelector = ({ workoutPlans, currentPlanId, onPlanChange }) => {
  if (workoutPlans.length === 0) return null;

  return (
    <div className="flex items-center space-x-2 text-sm">
      <select
        value={currentPlanId || ""}
        onChange={(e) => onPlanChange(e.target.value)}
        className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
      >
        {workoutPlans.map((plan) => (
          <option key={plan._id} value={plan._id}>
            {plan.goal} Plan - {new Date(plan.createdAt).toLocaleDateString()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkoutPlanSelector;
