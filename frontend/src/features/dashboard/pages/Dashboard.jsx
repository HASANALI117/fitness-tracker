import React, { useState, useEffect } from "react";
// import axios from "axios";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import {
  Activity as ActivityIcon,
  Dumbbell,
  Apple,
  Flame,
  TrendingUp,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const [dashboardData] = useState({
    userStats: {
      workoutsCompleted: 12,
      caloriesBurned: 4850,
      mealsTracked: 18,
      nutritionGoalProgress: 75,
      workoutGoalProgress: 80,
      activeDays: {
        completed: 5,
        total: 7,
      },
    },
    workoutProgress: {
      weeklyGoal: 4,
      completed: 3,
      progress: 75,
      recentWorkouts: [
        { day: 1, name: "Upper Body", completed: true, duration: 45 },
        { day: 2, name: "Lower Body", completed: true, duration: 50 },
        { day: 3, name: "Cardio", completed: true, duration: 30 },
        { day: 4, name: "Full Body", completed: false, duration: 0 },
      ],
    },
    nutritionProgress: {
      dailyCalories: {
        goal: 2200,
        consumed: 1650,
        progress: 75,
      },
      macros: {
        protein: { amount: 120, goal: 140, percentage: 5 },
        carbs: { amount: 180, goal: 220, percentage: -3 },
        fats: { amount: 60, goal: 58, percentage: 2 },
      },
    },
    activityOverview: {
      timeframe: "weekly",
      data: [
        { day: "Mon", calories: 520, active: true },
        { day: "Tue", calories: 740, active: true },
        { day: "Wed", calories: 650, active: true },
        { day: "Thu", calories: 890, active: true },
        { day: "Fri", calories: 720, active: true },
        { day: "Sat", calories: 430, active: false },
        { day: "Sun", calories: 320, active: false },
      ],
    },
  });

  // Fetch user stats when component mounts
  useEffect(() => {
    // This would be replaced with actual API calls
    // fetchUserStats();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="ml-20 w-full">
          <Header
            title="Dashboard"
            subtitle="Your fitness journey at a glance"
          />

          <div className="p-6 space-y-8">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Workouts Completed */}
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Workouts Completed</p>
                    <h3 className="text-2xl font-bold">
                      {dashboardData.userStats.workoutsCompleted}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Dumbbell size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">This week</p>
              </div>

              {/* Calories Burned */}
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Calories Burned</p>
                    <h3 className="text-2xl font-bold">
                      {dashboardData.userStats.caloriesBurned}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Flame size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">Daily average</p>
              </div>

              {/* Meals Tracked */}
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Meals Tracked</p>
                    <h3 className="text-2xl font-bold">
                      {dashboardData.userStats.mealsTracked}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Apple size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">This week</p>
              </div>

              {/* Active Days */}
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Days</p>
                    <h3 className="text-2xl font-bold">
                      {dashboardData.userStats.activeDays.completed}/
                      {dashboardData.userStats.activeDays.total}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Calendar size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">This week</p>
              </div>
            </div>

            {/* Progress Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Workout Progress */}
              <div className="bg-gray-900/80 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Workout Progress</h2>
                  <div className="text-sm text-lime-400 flex items-center cursor-pointer">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Weekly Goal</span>
                    <span className="text-sm font-medium">
                      {dashboardData.workoutProgress.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-lime-400 h-2 rounded-full"
                      style={{
                        width: `${dashboardData.workoutProgress.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {dashboardData.workoutProgress.recentWorkouts.map(
                    (workout) => (
                      <div
                        key={workout.day}
                        className="bg-gray-800 p-3 rounded-lg text-center"
                      >
                        <div className="text-xs text-gray-400">
                          Day {workout.day}
                        </div>
                        <div className="text-sm font-medium mt-1">
                          {workout.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {workout.duration} min
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Nutrition Progress */}
              <div className="bg-gray-900/80 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Nutrition Progress</h2>
                  <div className="text-sm text-lime-400 flex items-center cursor-pointer">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Daily Calories</span>
                    <span className="text-sm font-medium">
                      {dashboardData.nutritionProgress.dailyCalories.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-lime-400 h-2 rounded-full"
                      style={{
                        width: `${dashboardData.nutritionProgress.dailyCalories.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-400">Protein</div>
                    <div className="text-sm font-medium mt-1">
                      {dashboardData.nutritionProgress.macros.protein.amount}g
                    </div>
                    <div
                      className={`text-xs ${
                        dashboardData.nutritionProgress.macros.protein
                          .percentage > 0
                          ? "text-lime-400"
                          : "text-red-400"
                      } mt-1`}
                    >
                      {dashboardData.nutritionProgress.macros.protein
                        .percentage > 0
                        ? "+"
                        : ""}
                      {
                        dashboardData.nutritionProgress.macros.protein
                          .percentage
                      }
                      %
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-400">Carbs</div>
                    <div className="text-sm font-medium mt-1">
                      {dashboardData.nutritionProgress.macros.carbs.amount}g
                    </div>
                    <div
                      className={`text-xs ${
                        dashboardData.nutritionProgress.macros.carbs
                          .percentage > 0
                          ? "text-lime-400"
                          : "text-red-400"
                      } mt-1`}
                    >
                      {dashboardData.nutritionProgress.macros.carbs.percentage >
                      0
                        ? "+"
                        : ""}
                      {dashboardData.nutritionProgress.macros.carbs.percentage}%
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-400">Fats</div>
                    <div className="text-sm font-medium mt-1">
                      {dashboardData.nutritionProgress.macros.fats.amount}g
                    </div>
                    <div
                      className={`text-xs ${
                        dashboardData.nutritionProgress.macros.fats.percentage >
                        0
                          ? "text-lime-400"
                          : "text-red-400"
                      } mt-1`}
                    >
                      {dashboardData.nutritionProgress.macros.fats.percentage >
                      0
                        ? "+"
                        : ""}
                      {dashboardData.nutritionProgress.macros.fats.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Graph */}
            {/* Activity Graph */}
            <div className="bg-gray-900/80 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Activity Overview</h2>
                <div className="flex items-center space-x-3">
                  <select className="bg-gray-800 border-0 rounded text-sm text-gray-300 px-2 py-1">
                    <option>{dashboardData.activityOverview.timeframe}</option>
                    <option>monthly</option>
                    <option>yearly</option>
                  </select>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between px-2">
                {dashboardData.activityOverview.data.map((item) => {
                  // Find the max calories value to normalize the heights
                  const maxCalories = Math.max(
                    ...dashboardData.activityOverview.data.map(
                      (d) => d.calories
                    )
                  );

                  // Calculate percentage height (50-90% range to ensure visibility)
                  const heightPercentage =
                    50 + (item.calories / maxCalories) * 40;

                  return (
                    <div key={item.day} className="flex flex-col items-center">
                      <div
                        className={`w-10 ${
                          item.active ? "bg-lime-400" : "bg-gray-700"
                        } rounded-t-sm relative group`}
                        style={{ height: `${heightPercentage}%` }}
                      >
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.calories} cal
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        {item.day}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end mt-4 space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-lime-400 rounded-sm mr-2"></div>
                  <span className="text-xs text-gray-400">Active Days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-700 rounded-sm mr-2"></div>
                  <span className="text-xs text-gray-400">Rest Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
