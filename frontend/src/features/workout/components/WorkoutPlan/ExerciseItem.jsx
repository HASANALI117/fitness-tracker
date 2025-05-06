import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Award, Flame } from "lucide-react";

export default function ExerciseItem({ exercise, index }) {
  // Get appropriate icon based on exercise type
  const getExerciseIcon = (exerciseName) => {
    const name = exerciseName.toLowerCase();
    if (
      name.includes("push") ||
      name.includes("bench") ||
      name.includes("press")
    ) {
      return <Dumbbell className="text-purple-400" />;
    } else if (
      name.includes("squat") ||
      name.includes("lunge") ||
      name.includes("leg")
    ) {
      return <Flame className="text-orange-400" />;
    } else if (
      name.includes("pull") ||
      name.includes("row") ||
      name.includes("curl")
    ) {
      return <Award className="text-blue-400" />;
    } else {
      return <Dumbbell className="text-lime-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.1 * index,
      }}
      className="pb-3 mb-3 border-b border-gray-700/50 last:border-0"
    >
      <div className="flex items-center font-medium">
        <div className="flex-shrink-0 w-5 h-5 mr-2">
          {getExerciseIcon(exercise.name)}
        </div>
        <span className="flex-grow">{exercise.name}</span>
      </div>
      <div className="flex justify-between mt-1 text-gray-400">
        <span>
          {exercise.sets} sets × {exercise.reps} reps
        </span>
        {exercise.duration > 0 ? <span>{exercise.duration} min</span> : ""}
      </div>
      {exercise.equipment !== "None" && (
        <div className="mt-1 text-xs text-gray-500">
          Equipment: {exercise.equipment}
        </div>
      )}
    </motion.div>
  );
}
