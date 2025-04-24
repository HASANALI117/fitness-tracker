import React from "react";
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
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-gray-900/80 p-6 rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400 text-sm">Calories Today</p>
            <h3 className="text-2xl font-bold">
              {completedCalories}{" "}
              <span className="text-sm text-gray-400">/ {totalCalories}</span>
            </h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
            <Flame size={18} className="text-lime-400" />
          </div>
        </div>
        <div className="mt-4 bg-gray-800/50 rounded-full h-2">
          <div
            className="bg-lime-400 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">{progress}% of daily goal</p>
      </div>

      <div className="bg-gray-900/80 p-6 rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400 text-sm">Protein</p>
            <h3 className="text-2xl font-bold">{totalProtein}g</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
            <Beef size={18} className="text-lime-400" />
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          {calculatePercentage(totalProtein, completedCalories, 4)}% of calories
        </p>
      </div>

      <div className="bg-gray-900/80 p-6 rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400 text-sm">Carbohydrates</p>
            <h3 className="text-2xl font-bold">{totalCarbs}g</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
            <Wheat size={18} className="text-lime-400" />
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          {calculatePercentage(totalCarbs, completedCalories, 4)}% of calories
        </p>
      </div>

      <div className="bg-gray-900/80 p-6 rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400 text-sm">Fat</p>
            <h3 className="text-2xl font-bold">{totalFat}g</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
            <Droplets size={18} className="text-lime-400" />
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          {calculatePercentage(totalFat, completedCalories, 9)}% of calories
        </p>
      </div>
    </div>
  );
}
