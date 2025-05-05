import React from "react";

const ExerciseItem = ({ exercise }) => {
  return (
    <div className="mb-2 pb-2 border-b border-gray-700">
      <div className="font-medium flex items-center">
        <span className="flex-grow">{exercise.name}</span>
      </div>
      <div className="text-gray-400 flex justify-between">
        <span>
          {exercise.sets} sets × {exercise.reps} reps
        </span>
        {exercise.duration > 0 ? <span>{exercise.duration} min</span> : ""}
      </div>
      {exercise.equipment !== "None" && (
        <div className="text-gray-400 text-xs mt-1">
          Equipment: {exercise.equipment}
        </div>
      )}
    </div>
  );
};

export default ExerciseItem;
