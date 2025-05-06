import React from "react";
import { motion } from "framer-motion";
import MealItem from "./MealItem";

export default function MealTimeline({ meals, toggleMealComplete }) {
  if (!meals || Object.keys(meals).length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
      {Object.entries(meals).map(([key, meal], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <MealItem
            mealKey={key}
            meal={meal}
            toggleMealComplete={toggleMealComplete}
          />
        </motion.div>
      ))}
    </div>
  );
}
