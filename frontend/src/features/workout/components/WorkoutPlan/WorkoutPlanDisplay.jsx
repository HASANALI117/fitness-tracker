import React from "react";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import WorkoutDayCard from "./WorkoutDayCard";

export default function WorkoutPlanDisplay({
  currentPlan,
  workoutPlans,
  activeWeekIndex,
  setActiveWeekIndex,
  completedWorkouts,
  handleWorkoutComplete,
  showWorkoutForm,
}) {
  if (!currentPlan && workoutPlans.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 text-center shadow-lg bg-gray-900/80 rounded-xl"
      >
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800/80">
          <Dumbbell size={32} className="text-lime-400" />
        </div>
        <h3 className="mb-4 text-xl">No Workout Plans Generated Yet</h3>
        <p className="mb-8 text-gray-400">
          Generate your first personalized workout plan to get started!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={showWorkoutForm}
          className="px-8 py-3 font-medium text-black transition-all rounded-lg shadow-lg bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600"
        >
          Create Workout Plan
        </motion.button>
      </motion.div>
    );
  }

  if (!currentPlan || !currentPlan.result || !currentPlan.result.weekly_plans) {
    return <div className="py-10 text-center">Loading workout plan...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
    >
      {/* Workout Plan Info */}
      <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center">
        <div>
          <h3 className="text-lg font-bold">
            Your AI Generated Workout Plan:{" "}
            <span className="text-lime-400">{currentPlan.goal}</span>
          </h3>
          <div className="flex flex-wrap mt-2 text-sm gap-x-6 gap-y-2">
            <div>
              <span className="mr-1 text-gray-400">Age:</span>
              {currentPlan.age}
            </div>
            <div>
              <span className="mr-1 text-gray-400">Height:</span>
              {currentPlan.height} cm
            </div>
            <div>
              <span className="mr-1 text-gray-400">Weight:</span>
              {currentPlan.weight} kg
            </div>
            <div>
              <span className="mr-1 text-gray-400">Level:</span>
              <span className="capitalize">{currentPlan.fitness_level}</span>
            </div>
            <div>
              <span className="mr-1 text-gray-400">Duration:</span>
              {currentPlan.plan_duration_weeks} weeks
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <select
            className="px-3 py-2 text-gray-200 border-0 rounded-lg cursor-pointer bg-gray-800/80 focus:outline-none"
            value={activeWeekIndex}
            onChange={(e) =>
              setActiveWeekIndex(Number.parseInt(e.target.value))
            }
          >
            {currentPlan.result.weekly_plans.map((week, idx) => (
              <option key={idx} value={idx}>
                Week {week.week}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Weekly Plan Grid */}
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-7">
        {currentPlan.result.weekly_plans[activeWeekIndex].exercises.map(
          (day, index) => {
            const isCompleted = completedWorkouts?.includes(day.day);

            return (
              <WorkoutDayCard
                key={index}
                day={day}
                index={index}
                isCompleted={isCompleted}
                handleWorkoutComplete={handleWorkoutComplete}
              />
            );
          }
        )}
      </div>
    </motion.div>
  );
}
