import React from "react";
import { motion } from "framer-motion";
import { PieChart, Sparkles } from "lucide-react";

export default function NutritionBreakdown({ totals }) {
  const { completedCalories, totalProtein, totalCarbs, totalFat } = totals;

  const calculatePercentage = (nutrient, calories, multiplier) => {
    if (!calories) return 0;
    return Math.round(((nutrient * multiplier) / calories) * 100);
  };

  const proteinPercentage = calculatePercentage(
    totalProtein,
    completedCalories,
    4
  );
  const carbsPercentage = calculatePercentage(totalCarbs, completedCalories, 4);
  const fatPercentage = calculatePercentage(totalFat, completedCalories, 9);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
    >
      <h2 className="mb-4 text-xl font-bold">Nutrition Breakdown</h2>

      <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
        <div className="w-full mb-4 md:w-1/3 md:mb-0">
          <div className="h-4 mb-2 bg-gray-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${proteinPercentage}%` }}
              transition={{ duration: 1 }}
              className="h-4 rounded-full bg-gradient-to-r from-lime-400 to-lime-500"
            ></motion.div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Protein</span>
            <span>{proteinPercentage}%</span>
          </div>
        </div>

        <div className="w-full mx-0 mb-4 md:w-1/3 md:mx-4 md:mb-0">
          <div className="h-4 mb-2 bg-gray-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${carbsPercentage}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
            ></motion.div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Carbs</span>
            <span>{carbsPercentage}%</span>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="h-4 mb-2 bg-gray-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${fatPercentage}%` }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
            ></motion.div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Fat</span>
            <span>{fatPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Nutrition Metrics */}
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-4 shadow-md bg-gray-800/60 rounded-xl"
        >
          <div className="text-sm text-gray-400">Water Intake</div>
          <div className="text-2xl font-bold">1.8 L</div>
          <div className="text-xs text-gray-500">Goal: 2.5 L</div>
          <div className="mt-2 bg-gray-700 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-blue-400 to-blue-500 h-1.5 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="p-4 shadow-md bg-gray-800/60 rounded-xl"
        >
          <div className="text-sm text-gray-400">Fiber</div>
          <div className="text-2xl font-bold">18 g</div>
          <div className="text-xs text-gray-500">Goal: 25 g</div>
          <div className="mt-2 bg-gray-700 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="p-4 shadow-md bg-gray-800/60 rounded-xl"
        >
          <div className="text-sm text-gray-400">Sugar</div>
          <div className="text-2xl font-bold">24 g</div>
          <div className="text-xs text-gray-500">Limit: 36 g</div>
          <div className="mt-2 bg-gray-700 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "66%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gradient-to-r from-red-400 to-red-500 h-1.5 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="p-4 shadow-md bg-gray-800/60 rounded-xl"
        >
          <div className="text-sm text-gray-400">Sodium</div>
          <div className="text-2xl font-bold">1.2 g</div>
          <div className="text-xs text-gray-500">Limit: 2.3 g</div>
          <div className="mt-2 bg-gray-700 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "52%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Nutrition Insights */}
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        {/* Calorie Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-4 shadow-md bg-gray-800/60 rounded-xl"
        >
          <h3 className="flex items-center mb-4 text-lg font-bold">
            <PieChart size={18} className="mr-2 text-lime-400" />
            Weekly Calorie Trend
          </h3>
          <div className="flex items-end justify-between h-48">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 100}%` }}
                  transition={{ duration: 1, delay: 0.1 * i }}
                  className="w-6 bg-gradient-to-t from-lime-500 to-lime-300 rounded-t-md"
                ></motion.div>
                <span className="mt-2 text-xs text-gray-400">{day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nutrition Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-4 shadow-md bg-gray-800/60 rounded-xl"
        >
          <h3 className="flex items-center mb-4 text-lg font-bold">
            <Sparkles size={18} className="mr-2 text-lime-400" />
            Nutrition Tips
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gray-900/60">
              <p className="text-sm">
                Try to consume protein with every meal to support muscle
                recovery and growth.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-900/60">
              <p className="text-sm">
                Aim for at least 5 servings of fruits and vegetables daily for
                essential vitamins.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-900/60">
              <p className="text-sm">
                Stay hydrated! Drink water throughout the day, especially before
                and after workouts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
