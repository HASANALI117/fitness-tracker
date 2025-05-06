import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Circle, Clock } from "lucide-react";
import ExerciseItem from "./ExerciseItem";

export default function WorkoutDayCard({
  day,
  index,
  isCompleted,
  handleWorkoutComplete,
}) {
  const isRestDay = day.focus === "Rest";
  const totalDuration = !isRestDay
    ? day.exercises.reduce((total, ex) => total + (ex.duration || 0), 0)
    : 0;
  const exerciseCount = !isRestDay ? day.exercises.length : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      className={`rounded-xl p-0 text-center h-full flex flex-col overflow-hidden shadow-lg ${
        isRestDay
          ? "bg-gray-800/40 border border-gray-700/30"
          : isCompleted
          ? "bg-gradient-to-br from-green-900/60 to-green-800/30 border border-green-700/50"
          : "bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-lime-900/30"
      } transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl`}
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleWorkoutComplete(day.day)}
            className="text-gray-400 transition-colors cursor-pointer hover:text-lime-400"
            aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
          >
            {isCompleted ? (
              <CheckCircle size={18} className="text-lime-400 fill-lime-400" />
            ) : (
              <Circle size={18} />
            )}
          </motion.button>
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
        <div className="flex flex-col justify-between flex-grow px-3 pt-1 pb-3 text-sm text-left">
          {/* Workout Stats */}
          {exerciseCount > 0 && (
            <div className="flex justify-center gap-3 mb-3 text-xs text-gray-400">
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
          <div className="px-1 overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-gray-700">
            {day.exercises.map((exercise, idx) => (
              <ExerciseItem key={idx} exercise={exercise} index={idx} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow my-12 text-sm text-gray-400">
          <span className="text-base">Rest Day</span>
          <p className="px-4 mt-2 text-xs text-gray-500">
            Recovery is an essential part of any fitness regime
          </p>
        </div>
      )}
    </motion.div>
  );
}
