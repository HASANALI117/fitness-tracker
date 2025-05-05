import React from "react";
import {
  CheckCircle,
  Circle,
  Calendar,
  ChevronRight,
  Clock,
} from "lucide-react";
import ExerciseItem from "./ExerciseItem";

const DayCard = ({ day, onWorkoutComplete, completedWorkouts }) => {
  const isCompleted = completedWorkouts?.includes(day.day);
  const isRestDay = day.focus === "Rest";

  // Calculate total workout duration if not a rest day
  const totalDuration = !isRestDay
    ? day.exercises.reduce((total, ex) => total + (ex.duration || 0), 0)
    : 0;

  // Count exercises
  const exerciseCount = !isRestDay ? day.exercises.length : 0;

  return (
    <div
      className={`rounded-xl p-0 text-center h-full flex flex-col overflow-hidden shadow-lg ${
        isRestDay
          ? "bg-gray-800/40 border border-gray-700/30"
          : isCompleted
          ? "bg-green-950 border border-green-800/50"
          : "bg-gray-900 border border-lime-900/30"
      } transition-all duration-200 hover:translate-y-[-2px]`}
    >
      {/* Header Section */}
      <div
        className={`p-3 flex justify-between items-center ${
          isRestDay
            ? "bg-gray-800/60"
            : isCompleted
            ? "bg-green-900/40"
            : "bg-lime-950/60"
        }`}
      >
        <div className="flex items-center">
          <Calendar size={14} className="mr-1.5 opacity-70" />
          <span className="font-medium">{day.day}</span>
        </div>
        {!isRestDay && (
          <button
            onClick={() => onWorkoutComplete(day.day)}
            className="text-gray-400 hover:text-lime-400 transition-colors"
            aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
          >
            {isCompleted ? (
              <CheckCircle size={18} className="text-lime-400 fill-lime-400" />
            ) : (
              <Circle size={18} />
            )}
          </button>
        )}
      </div>

      {/* Focus Badge */}
      <div className="font-medium text-sm px-3 py-1.5 mx-auto mt-3 mb-1">
        <span
          className={`px-2.5 py-1 rounded-full ${
            isRestDay
              ? "bg-gray-800/80 text-gray-400"
              : isCompleted
              ? "bg-green-800/40 text-green-300"
              : "bg-lime-900/40 text-lime-300"
          }`}
        >
          {day.focus}
        </span>
      </div>

      {/* Content Section */}
      {!isRestDay ? (
        <div className="text-left px-3 pt-1 pb-3 text-sm flex-grow flex flex-col justify-between">
          {/* Workout Stats */}
          {exerciseCount > 0 && (
            <div className="flex gap-3 justify-center text-xs text-gray-400 mb-3">
              <div className="flex items-center">
                <span className="mr-1.5">{exerciseCount}</span>
                exercises
              </div>
              {totalDuration > 0 && (
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>{totalDuration} min</span>
                </div>
              )}
            </div>
          )}

          {/* Exercises List */}
          <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 px-1">
            {day.exercises.map((exercise, idx) => (
              <ExerciseItem key={idx} exercise={exercise} />
            ))}
          </div>

          {/* Action Button */}
          {/* <button
            className={`mt-4 w-full py-2.5 rounded-md text-xs font-medium flex items-center justify-center transition-colors ${
              isCompleted
                ? "bg-green-800/30 text-green-400 hover:bg-green-800/50"
                : "bg-lime-900/30 text-lime-400 hover:bg-lime-900/50"
            }`}
          >
            {isCompleted ? "View Workout" : "Start Workout"}
            <ChevronRight size={14} className="ml-1" />
          </button> */}
        </div>
      ) : (
        <div className="text-gray-400 text-sm my-12 flex-grow flex items-center justify-center flex-col">
          <span className="text-base">Rest Day</span>
          <p className="text-xs mt-2 px-4 text-gray-500">
            Recovery is an essential part of any fitness regime
          </p>
        </div>
      )}
    </div>
  );
};

export default DayCard;
