import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import {
  Apple,
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Clock,
  Coffee,
  Utensils,
  Salad,
  Flame,
  Droplets,
  Beef,
  Wheat,
} from "lucide-react";

export default function DietTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeSection, setActiveSection] = useState("today");

  // Example meal data
  const mealData = {
    today: {
      breakfast: {
        title: "Breakfast",
        time: "07:30 AM",
        calories: 420,
        completed: true,
        foods: [
          {
            name: "Greek Yogurt",
            calories: 150,
            protein: 15,
            carbs: 6,
            fat: 5,
          },
          { name: "Blueberries", calories: 85, protein: 1, carbs: 21, fat: 0 },
          { name: "Granola", calories: 120, protein: 3, carbs: 18, fat: 6 },
          { name: "Honey", calories: 65, protein: 0, carbs: 17, fat: 0 },
        ],
      },
      snack1: {
        title: "Morning Snack",
        time: "10:30 AM",
        calories: 210,
        completed: true,
        foods: [
          {
            name: "Protein Shake",
            calories: 160,
            protein: 24,
            carbs: 8,
            fat: 2,
          },
          { name: "Almonds", calories: 50, protein: 2, carbs: 2, fat: 4 },
        ],
      },
      lunch: {
        title: "Lunch",
        time: "01:00 PM",
        calories: 580,
        completed: true,
        foods: [
          {
            name: "Grilled Chicken Salad",
            calories: 320,
            protein: 28,
            carbs: 12,
            fat: 16,
          },
          { name: "Quinoa", calories: 120, protein: 4, carbs: 21, fat: 2 },
          {
            name: "Olive Oil Dressing",
            calories: 140,
            protein: 0,
            carbs: 0,
            fat: 14,
          },
        ],
      },
      snack2: {
        title: "Afternoon Snack",
        time: "04:00 PM",
        calories: 150,
        completed: false,
        foods: [
          { name: "Apple", calories: 95, protein: 0, carbs: 25, fat: 0 },
          { name: "Peanut Butter", calories: 55, protein: 2, carbs: 2, fat: 4 },
        ],
      },
      dinner: {
        title: "Dinner",
        time: "07:30 PM",
        calories: 620,
        completed: false,
        foods: [
          { name: "Salmon", calories: 280, protein: 30, carbs: 0, fat: 18 },
          { name: "Brown Rice", calories: 180, protein: 4, carbs: 37, fat: 1 },
          {
            name: "Steamed Broccoli",
            calories: 80,
            protein: 5,
            carbs: 10,
            fat: 1,
          },
          { name: "Olive Oil", calories: 80, protein: 0, carbs: 0, fat: 9 },
        ],
      },
    },
  };

  // Calculate totals
  const calculateTotals = () => {
    const meals = mealData.today;
    let totalCalories = 0;
    let completedCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    // Loop through each meal
    Object.values(meals).forEach((meal) => {
      // Add total calories for the meal
      totalCalories += meal.calories;

      // For completed meals, add to completed calories
      if (meal.completed) {
        completedCalories += meal.calories;
      }

      // Calculate macronutrients from individual foods
      meal.foods.forEach((food) => {
        if (meal.completed) {
          totalProtein += food.protein;
          totalCarbs += food.carbs;
          totalFat += food.fat;
        }
      });
    });

    return {
      totalCalories,
      completedCalories,
      progress: Math.round((completedCalories / totalCalories) * 100),
      totalProtein,
      totalCarbs,
      totalFat,
    };
  };

  const totals = calculateTotals();

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  // Navigate through days
  const navigateDay = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="ml-20 w-full">
          {/* Header */}
          <header className="flex justify-between items-center p-6 border-b border-gray-800">
            <div>
              <h1 className="text-2xl font-bold">Meal Planner</h1>
              <p className="text-gray-400">
                Track your nutrition and meal plans
              </p>
            </div>
            <button className="px-4 py-2 bg-lime-400 text-black rounded-md font-medium flex items-center">
              <CirclePlus size={18} className="mr-2" /> Add Food
            </button>
          </header>

          {/* Main Content */}
          <div className="p-6 space-y-8">
            {/* Nutrition Stats */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Calories Today</p>
                    <h3 className="text-2xl font-bold">
                      {totals.completedCalories}{" "}
                      <span className="text-sm text-gray-400">
                        / {totals.totalCalories}
                      </span>
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Flame size={18} className="text-lime-400" />
                  </div>
                </div>
                <div className="mt-4 bg-gray-800/50 rounded-full h-2">
                  <div
                    className="bg-lime-400 h-2 rounded-full"
                    style={{ width: `${totals.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {totals.progress}% of daily goal
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Protein</p>
                    <h3 className="text-2xl font-bold">
                      {totals.totalProtein}g
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Beef size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {Math.round(
                    ((totals.totalProtein * 4) / totals.completedCalories) * 100
                  )}
                  % of calories
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Carbohydrates</p>
                    <h3 className="text-2xl font-bold">{totals.totalCarbs}g</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Wheat size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {Math.round(
                    ((totals.totalCarbs * 4) / totals.completedCalories) * 100
                  )}
                  % of calories
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Fat</p>
                    <h3 className="text-2xl font-bold">{totals.totalFat}g</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Droplets size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {Math.round(
                    ((totals.totalFat * 9) / totals.completedCalories) * 100
                  )}
                  % of calories
                </p>
              </div>
            </div>

            {/* Date Navigator */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-bold">Meal Schedule</h2>
                <div className="bg-gray-800/80 rounded-lg px-4 py-1 flex items-center">
                  <button
                    onClick={() => navigateDay("prev")}
                    className="p-1 hover:text-lime-400"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="mx-3 text-sm">
                    {formatDate(currentDate)}
                  </span>
                  <button
                    onClick={() => navigateDay("next")}
                    className="p-1 hover:text-lime-400"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <select
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
                >
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="custom">Custom Plan</option>
                </select>
              </div>
            </div>

            {/* Meal Timeline */}
            <div className="space-y-4">
              {/* Breakfast */}
              <div
                className={`bg-gray-900/80 rounded-lg overflow-hidden ${
                  mealData.today.breakfast.completed
                    ? "border-l-4 border-lime-400"
                    : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-4">
                        <Coffee size={18} className="text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {mealData.today.breakfast.title}
                        </h3>
                        <p className="text-gray-400 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />{" "}
                          {mealData.today.breakfast.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-4">
                        {mealData.today.breakfast.calories} kcal
                      </span>
                      {mealData.today.breakfast.completed ? (
                        <div className="bg-lime-400 rounded-full p-1">
                          <Check size={18} className="text-black" />
                        </div>
                      ) : (
                        <button className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm">
                          Mark as eaten
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950/40 p-4">
                  <div className="grid grid-cols-4 gap-4">
                    {mealData.today.breakfast.foods.map((food, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/60 rounded-lg p-3"
                      >
                        <div className="font-medium">{food.name}</div>
                        <div className="text-gray-400 text-sm">
                          {food.calories} kcal
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          P: {food.protein}g · C: {food.carbs}g · F: {food.fat}g
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Morning Snack */}
              <div
                className={`bg-gray-900/80 rounded-lg overflow-hidden ${
                  mealData.today.snack1.completed
                    ? "border-l-4 border-lime-400"
                    : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-400/20 flex items-center justify-center mr-4">
                        <Apple size={18} className="text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {mealData.today.snack1.title}
                        </h3>
                        <p className="text-gray-400 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />{" "}
                          {mealData.today.snack1.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-4">
                        {mealData.today.snack1.calories} kcal
                      </span>
                      {mealData.today.snack1.completed ? (
                        <div className="bg-lime-400 rounded-full p-1">
                          <Check size={18} className="text-black" />
                        </div>
                      ) : (
                        <button className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm">
                          Mark as eaten
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950/40 p-4">
                  <div className="grid grid-cols-4 gap-4">
                    {mealData.today.snack1.foods.map((food, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/60 rounded-lg p-3"
                      >
                        <div className="font-medium">{food.name}</div>
                        <div className="text-gray-400 text-sm">
                          {food.calories} kcal
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          P: {food.protein}g · C: {food.carbs}g · F: {food.fat}g
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lunch */}
              <div
                className={`bg-gray-900/80 rounded-lg overflow-hidden ${
                  mealData.today.lunch.completed
                    ? "border-l-4 border-lime-400"
                    : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-4">
                        <Utensils size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {mealData.today.lunch.title}
                        </h3>
                        <p className="text-gray-400 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />{" "}
                          {mealData.today.lunch.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-4">
                        {mealData.today.lunch.calories} kcal
                      </span>
                      {mealData.today.lunch.completed ? (
                        <div className="bg-lime-400 rounded-full p-1">
                          <Check size={18} className="text-black" />
                        </div>
                      ) : (
                        <button className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm">
                          Mark as eaten
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950/40 p-4">
                  <div className="grid grid-cols-4 gap-4">
                    {mealData.today.lunch.foods.map((food, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/60 rounded-lg p-3"
                      >
                        <div className="font-medium">{food.name}</div>
                        <div className="text-gray-400 text-sm">
                          {food.calories} kcal
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          P: {food.protein}g · C: {food.carbs}g · F: {food.fat}g
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Afternoon Snack */}
              <div
                className={`bg-gray-900/80 rounded-lg overflow-hidden ${
                  mealData.today.snack2.completed
                    ? "border-l-4 border-lime-400"
                    : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-orange-400/20 flex items-center justify-center mr-4">
                        <Apple size={18} className="text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {mealData.today.snack2.title}
                        </h3>
                        <p className="text-gray-400 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />{" "}
                          {mealData.today.snack2.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-4">
                        {mealData.today.snack2.calories} kcal
                      </span>
                      {mealData.today.snack2.completed ? (
                        <div className="bg-lime-400 rounded-full p-1">
                          <Check size={18} className="text-black" />
                        </div>
                      ) : (
                        <button className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm">
                          Mark as eaten
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950/40 p-4">
                  <div className="grid grid-cols-4 gap-4">
                    {mealData.today.snack2.foods.map((food, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/60 rounded-lg p-3"
                      >
                        <div className="font-medium">{food.name}</div>
                        <div className="text-gray-400 text-sm">
                          {food.calories} kcal
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          P: {food.protein}g · C: {food.carbs}g · F: {food.fat}g
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dinner */}
              <div
                className={`bg-gray-900/80 rounded-lg overflow-hidden ${
                  mealData.today.dinner.completed
                    ? "border-l-4 border-lime-400"
                    : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-purple-400/20 flex items-center justify-center mr-4">
                        <Salad size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {mealData.today.dinner.title}
                        </h3>
                        <p className="text-gray-400 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />{" "}
                          {mealData.today.dinner.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-4">
                        {mealData.today.dinner.calories} kcal
                      </span>
                      {mealData.today.dinner.completed ? (
                        <div className="bg-lime-400 rounded-full p-1">
                          <Check size={18} className="text-black" />
                        </div>
                      ) : (
                        <button className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm">
                          Mark as eaten
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-950/40 p-4">
                  <div className="grid grid-cols-4 gap-4">
                    {mealData.today.dinner.foods.map((food, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/60 rounded-lg p-3"
                      >
                        <div className="font-medium">{food.name}</div>
                        <div className="text-gray-400 text-sm">
                          {food.calories} kcal
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          P: {food.protein}g · C: {food.carbs}g · F: {food.fat}g
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition Summary */}
            <div>
              <h2 className="text-xl font-bold mb-4">Nutrition Breakdown</h2>
              <div className="bg-gray-900/80 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-1/3">
                    <div className="bg-gray-800 rounded-full h-4 mb-2">
                      <div
                        className="bg-lime-400 h-4 rounded-full"
                        style={{
                          width: `${
                            ((totals.totalProtein * 4) /
                              totals.completedCalories) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Protein</span>
                      <span>
                        {Math.round(
                          ((totals.totalProtein * 4) /
                            totals.completedCalories) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  </div>

                  <div className="w-1/3 mx-4">
                    <div className="bg-gray-800 rounded-full h-4 mb-2">
                      <div
                        className="bg-blue-400 h-4 rounded-full"
                        style={{
                          width: `${
                            ((totals.totalCarbs * 4) /
                              totals.completedCalories) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Carbs</span>
                      <span>
                        {Math.round(
                          ((totals.totalCarbs * 4) / totals.completedCalories) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  </div>

                  <div className="w-1/3">
                    <div className="bg-gray-800 rounded-full h-4 mb-2">
                      <div
                        className="bg-yellow-400 h-4 rounded-full"
                        style={{
                          width: `${
                            ((totals.totalFat * 9) / totals.completedCalories) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Fat</span>
                      <span>
                        {Math.round(
                          ((totals.totalFat * 9) / totals.completedCalories) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 mt-8">
                  <div className="bg-gray-800/60 rounded-lg p-4">
                    <div className="text-sm text-gray-400">Water Intake</div>
                    <div className="text-2xl font-bold">1.8 L</div>
                    <div className="text-xs text-gray-500">Goal: 2.5 L</div>
                    <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-400 h-1.5 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-800/60 rounded-lg p-4">
                    <div className="text-sm text-gray-400">Fiber</div>
                    <div className="text-2xl font-bold">18 g</div>
                    <div className="text-xs text-gray-500">Goal: 25 g</div>
                    <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-green-400 h-1.5 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-800/60 rounded-lg p-4">
                    <div className="text-sm text-gray-400">Sugar</div>
                    <div className="text-2xl font-bold">24 g</div>
                    <div className="text-xs text-gray-500">Limit: 36 g</div>
                    <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-red-400 h-1.5 rounded-full"
                        style={{ width: "66%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-800/60 rounded-lg p-4">
                    <div className="text-sm text-gray-400">Sodium</div>
                    <div className="text-2xl font-bold">1.2 g</div>
                    <div className="text-xs text-gray-500">Limit: 2.3 g</div>
                    <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-yellow-400 h-1.5 rounded-full"
                        style={{ width: "52%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
