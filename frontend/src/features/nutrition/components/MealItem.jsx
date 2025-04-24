import React from "react";
import { Check, Clock, Coffee, Apple, Utensils, Salad } from "lucide-react";

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
    return <Apple size={18} className="text-orange-400" />;
  };

  // Get background color for icon container
  const getIconBgColor = (mealTitle) => {
    const title = mealTitle.toLowerCase();
    if (title.includes("breakfast")) return "bg-amber-400/20";
    if (title.includes("morning snack")) return "bg-green-400/20";
    if (title.includes("lunch")) return "bg-blue-400/20";
    if (title.includes("afternoon snack")) return "bg-orange-400/20";
    if (title.includes("dinner")) return "bg-purple-400/20";
    return "bg-green-400/20";
  };

  return (
    <div
      className={`bg-gray-900/80 rounded-lg overflow-hidden ${
        meal.completed ? "border-l-4 border-lime-400" : ""
      }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`h-10 w-10 rounded-full ${getIconBgColor(
                meal.title
              )} flex items-center justify-center mr-4`}
            >
              {getMealIcon(meal.title)}
            </div>
            <div>
              <h3 className="font-bold text-lg">{meal.title}</h3>
              <p className="text-gray-400 text-sm flex items-center">
                <Clock size={14} className="mr-1" /> {meal.time}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold mr-4">{meal.calories} kcal</span>
            {meal.completed ? (
              <div className="bg-lime-400 rounded-full p-1">
                <Check size={18} className="text-black" />
              </div>
            ) : (
              <button
                onClick={() => toggleMealComplete(mealKey)}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm"
              >
                Mark as eaten
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-950/40 p-4">
        <div className="grid grid-cols-4 gap-4">
          {meal.foods.map((food, index) => (
            <div key={index} className="bg-gray-800/60 rounded-lg p-3">
              <div className="font-medium">{food.name}</div>
              <div className="text-gray-400 text-sm">{food.calories} kcal</div>
              <div className="text-xs text-gray-500 mt-2">
                Protein: {food.protein}g · Carbohydrates: {food.carbs}g · Fats:{" "}
                {food.fat}g
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
