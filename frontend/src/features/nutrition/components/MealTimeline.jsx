import React from "react";
import MealItem from "./MealItem";

export default function MealTimeline({ meals, toggleMealComplete }) {
  if (!meals || Object.keys(meals).length === 0) {
    return (
      <div className="text-center py-10 bg-gray-900/80 rounded-lg">
        No meal data available. Generate a nutrition plan to get started!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {Object.entries(meals).map(([key, meal]) => (
        <MealItem
          key={key}
          mealKey={key}
          meal={meal}
          toggleMealComplete={toggleMealComplete}
        />
      ))}
    </div>
  );
}
