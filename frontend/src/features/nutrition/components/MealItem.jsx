import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Coffee,
  Apple,
  Utensils,
  Salad,
  Circle,
  Banana,
} from "lucide-react";

export default function MealItem({ mealKey, meal, toggleMealComplete }) {
  // Get appropriate icon based on meal title
  const getMealIcon = (mealTitle) => {
    const title = mealTitle.toLowerCase();
    if (title.includes("breakfast"))
      return <Coffee size={18} className="text-amber-400" />;
    if (title.includes("snack"))
      return <Apple size={18} className="text-green-400" />;
    if (title.includes("lunch"))
      return <Utensils size={18} className="text-blue-400" />;
    if (title.includes("dinner"))
      return <Salad size={18} className="text-purple-400" />;
    else return <Banana size={18} className="text-orange-400" />;
  };

  return (
    <div
      className={`bg-gray-900/80 rounded-xl overflow-hidden shadow-lg ${
        meal.completed ? "border-l-4 border-lime-400" : ""
      } transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gray-800/80">
              {getMealIcon(meal.title)}
            </div>

            <div>
              <h3 className="text-lg font-bold">{meal.title}</h3>
              <p className="flex items-center text-sm text-gray-400">
                <Clock size={14} className="mr-1" /> {meal.time}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-xl font-bold">{meal.calories} kcal</span>
            {meal.completed ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 rounded-full bg-gradient-to-r from-lime-400 to-green-400"
              >
                <Check size={18} className="text-black" />
              </motion.div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleMealComplete(mealKey)}
                className="text-gray-400 transition-colors cursor-pointer hover:text-lime-400"
              >
                <Circle size={18} />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-950/40">
        <div className="grid grid-cols-1 gap-4">
          {meal.foods.map((food, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * idx }}
              className="p-3 transition-colors rounded-lg bg-gray-800/60 hover:bg-gray-800/80"
            >
              <div className="font-medium">{food.name}</div>
              <div className="text-sm text-gray-400">{food.calories} kcal</div>
              <div className="mt-2 text-xs text-gray-500">
                Protein: {food.protein}g · Carbs: {food.carbs}g · Fats:{" "}
                {food.fat}g
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
