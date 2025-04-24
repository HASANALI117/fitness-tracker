import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import NutritionStats from "../components/NutritionStats";
import DateNavigation from "../components/DateNavigation";
import MealTimeline from "../components/MealTimeline";
import NutritionBreakdown from "../components/NutritionBreakdown";
import NutritionPlanModal from "../components/NutritionPlanModal";

axios.defaults.withCredentials = true;

export default function DietTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeSection, setActiveSection] = useState("today");
  const [meals, setMeals] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [nutritionTotals, setNutritionTotals] = useState({
    totalCalories: 0,
    completedCalories: 0,
    progress: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
  });

  // Fetch nutrition plans on mount
  useEffect(() => {
    fetchNutritionPlans();
  }, []);

  // Fetch nutrition plans
  const fetchNutritionPlans = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/nutrition/latestPlan"
      );

      console.log("Latest nutrition plan:", response.data.data[0]);

      // Set current plan if available
      if (response.data.data.length > 0) {
        processPlanData(response.data.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch nutrition plans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Process plan data to create meals structure
  const processPlanData = (plan) => {
    console.log("Processing plan:", plan);

    // Check if there's valid data to process
    if (!plan || !plan.result) {
      console.error("Invalid plan data structure");
      return;
    }

    // The API response structure has changed - handle the new format
    const { result } = plan;

    // If daily_meals array is empty, we need to show a message
    if (!result.daily_meals || result.daily_meals.length === 0) {
      console.warn("No meals found in the plan data");

      // Set meals to empty but still set nutrition totals based on macros
      setMeals({ today: {} });

      // Calculate approximate macros from the percentages
      const { macronutrients, calories_per_day } = result;
      const totalCals = calories_per_day || 0;

      // Convert percentages to grams (4 cal per gram for protein/carbs, 9 for fat)
      const proteinPerc = macronutrients?.proteins / 100;
      const carbsPerc = macronutrients?.carbohydrates / 100;
      const fatsPerc = macronutrients?.fats / 100;

      const totalProtein = Math.round((totalCals * proteinPerc) / 4);
      const totalCarbs = Math.round((totalCals * carbsPerc) / 4);
      const totalFat = Math.round((totalCals * fatsPerc) / 9);

      setNutritionTotals({
        totalCalories: totalCals,
        completedCalories: 0,
        progress: 0,
        totalProtein,
        totalCarbs,
        totalFat,
      });

      return;
    }

    // If there are meal suggestions, process them
    const dailyMeals = {};

    result.daily_meals.forEach((mealItem) => {
      // Extract the meal name and format it as a key
      const mealKey = mealItem.meal.toLowerCase().replace(" ", "_");

      // Calculate total calories for the meal
      const mealCalories = calculateTotalMealCalories(mealItem);

      dailyMeals[mealKey] = {
        title: mealItem.meal,
        time: getDefaultMealTime(mealItem.meal),
        calories: mealCalories,
        completed: false,
        foods: mealItem.suggestions.map((item) => ({
          name: item.name,
          calories: item.calories,
          protein: item.protein || 0,
          carbs: item.carbs || 0,
          fat: item.fats || 0, // Note: field is 'fats' in the schema
        })),
      };
    });

    setMeals({ today: dailyMeals });
    calculateTotals(dailyMeals);
  };

  // Helper functions
  const getDefaultMealTime = (mealName) => {
    const times = {
      Breakfast: "07:30 AM",
      "Morning Snack": "10:30 AM",
      Lunch: "01:00 PM",
      "Afternoon Snack": "04:00 PM",
      Dinner: "07:30 PM",
      Snacks: "03:00 PM",
    };
    return times[mealName] || "12:00 PM";
  };

  const calculateTotalMealCalories = (meal) => {
    return meal.suggestions.reduce((total, item) => total + item.calories, 0);
  };

  // Calculate nutrition totals
  const calculateTotals = (mealData) => {
    if (!mealData) return;

    let totalCalories = 0;
    let completedCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    Object.values(mealData).forEach((meal) => {
      totalCalories += meal.calories;

      if (meal.completed) {
        completedCalories += meal.calories;

        meal.foods.forEach((food) => {
          totalProtein += food.protein;
          totalCarbs += food.carbs;
          totalFat += food.fat;
        });
      }
    });

    const totals = {
      totalCalories,
      completedCalories,
      progress: Math.round((completedCalories / totalCalories) * 100) || 0,
      totalProtein,
      totalCarbs,
      totalFat,
    };

    setNutritionTotals(totals);
  };

  // Toggle meal completion status
  const toggleMealComplete = (mealKey) => {
    const updatedMeals = { ...meals };
    updatedMeals.today[mealKey].completed =
      !updatedMeals.today[mealKey].completed;
    setMeals(updatedMeals);
    calculateTotals(updatedMeals.today);
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
          <Header
            title="Diet Tracker"
            subtitle="Monitor your nutrition intake"
            actionButton={
              <button
                onClick={() => setShowPlanModal(true)}
                className="bg-lime-500 hover:bg-lime-600 text-black font-medium py-2 px-4 rounded transition-colors"
              >
                Generate Nutrition Plan
              </button>
            }
          />

          <div className="p-6 space-y-8">
            {isLoading ? (
              <div className="text-center py-10">Loading nutrition data...</div>
            ) : (
              <>
                <NutritionStats totals={nutritionTotals} />

                <DateNavigation
                  currentDate={currentDate}
                  navigateDay={navigateDay}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />

                {Object.keys(meals.today || {}).length === 0 ? (
                  <div className="bg-gray-900/80 p-6 rounded-lg text-center">
                    <p className="text-gray-400 mb-4">
                      No meal data available.
                    </p>
                    <p>
                      Try generating a new nutrition plan with the button above.
                    </p>
                  </div>
                ) : (
                  <MealTimeline
                    meals={meals.today || {}}
                    toggleMealComplete={toggleMealComplete}
                  />
                )}

                <NutritionBreakdown totals={nutritionTotals} />
              </>
            )}
          </div>
        </div>
      </div>

      {showPlanModal && (
        <NutritionPlanModal
          onClose={() => setShowPlanModal(false)}
          onSuccess={fetchNutritionPlans}
        />
      )}
    </div>
  );
}
