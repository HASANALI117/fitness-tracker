import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import ExerciseItem from "./ExerciseItem";

const DayCard = ({ day, onWorkoutComplete, completedWorkouts }) => {
  const isCompleted = completedWorkouts?.includes(day.day);
  const isRestDay = day.focus === "Rest";

  return (
    <div
      className={`rounded-lg p-4 text-center h-full flex flex-col ${
        isRestDay
          ? "bg-gray-800/40"
          : isCompleted
          ? "bg-green-900/30"
          : "bg-lime-400/10"
      } transition-colors duration-200`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{day.day}</span>
        {!isRestDay && (
          <button
            onClick={() => onWorkoutComplete(day.day)}
            className="text-gray-400 hover:text-lime-400 transition-colors"
          >
            {isCompleted ? (
              <CheckCircle size={18} className="text-lime-400 fill-lime-400" />
            ) : (
              <Circle size={18} />
            )}
          </button>
        )}
      </div>

      <div className="font-medium mb-2 text-sm px-2 py-1 rounded-full bg-gray-800/60 inline-block mx-auto">
        {day.focus}
      </div>

      {day.exercises && day.exercises.length > 0 ? (
        <div className="text-left mt-3 text-sm flex-grow flex flex-col justify-between">
          <div className="max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
            {day.exercises.map((exercise, idx) => (
              <ExerciseItem key={idx} exercise={exercise} />
            ))}
          </div>
          <button
            className={`mt-3 w-full py-2 rounded-md text-xs transition-colors ${
              isCompleted
                ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                : "bg-lime-400/20 text-lime-400 hover:bg-lime-400/30"
            }`}
          >
            {isCompleted ? "View Workout" : "Start Workout"}
          </button>
        </div>
      ) : (
        <div className="text-gray-400 text-sm my-8 flex-grow flex items-center justify-center">
          Rest Day
        </div>
      )}
    </div>
  );
};

export default DayCard;
