import React from "react";
import { motion } from "framer-motion";
import { Flame, Beef, Wheat, Droplets } from "lucide-react";

export default function NutritionStats({ totals }) {
  const {
    totalCalories,
    completedCalories,
    progress,
    totalProtein,
    totalCarbs,
    totalFat,
  } = totals;

  const calculatePercentage = (nutrient, calories, multiplier) => {
    if (!calories) return 0;
    return Math.round(((nutrient * multiplier) / calories) * 100);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Calories */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
      >
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-400">Calories Today</p>
            <h3 className="mt-1 text-3xl font-bold transition-all duration-500">
              {completedCalories}{" "}
              <span className="text-sm text-gray-400">/ {totalCalories}</span>
            </h3>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/20">
            <Flame size={20} className="text-lime-400" />
          </div>
        </div>
        <div className="h-3 mt-4 overflow-hidden rounded-full bg-gray-800/50">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0 }}
            className="h-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500"
          ></motion.div>
        </div>
        <p className="mt-2 text-sm text-gray-400">{progress}% of daily goal</p>
      </motion.div>

      {/* Protein */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
      >
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-400">Protein</p>
            <h3 className="mt-1 text-3xl font-bold transition-all duration-500">
              {totalProtein}g
            </h3>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/20">
            <Beef size={20} className="text-lime-400" />
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          {calculatePercentage(totalProtein, completedCalories, 4)}% of calories
        </p>
      </motion.div>

      {/* Carbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
      >
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-400">Carbohydrates</p>
            <h3 className="mt-1 text-3xl font-bold transition-all duration-500">
              {totalCarbs}g
            </h3>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/20">
            <Wheat size={20} className="text-lime-400" />
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          {calculatePercentage(totalCarbs, completedCalories, 4)}% of calories
        </p>
      </motion.div>

      {/* Fat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
      >
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-400">Fat</p>
            <h3 className="mt-1 text-3xl font-bold transition-all duration-500">
              {totalFat}g
            </h3>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/20">
            <Droplets size={20} className="text-lime-400" />
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          {calculatePercentage(totalFat, completedCalories, 9)}% of calories
        </p>
      </motion.div>
    </div>
  );
}
