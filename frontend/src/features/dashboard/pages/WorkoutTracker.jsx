import React, { useState } from "react";
import Sidebar from "../../dashboard/components/Sidebar";
import {
  Calendar,
  Check,
  Clock,
  BarChart2,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function WorkoutTracker() {
  const [activeWeek, setActiveWeek] = useState("current");
  const [currentDate, setCurrentDate] = useState(new Date());

  // Sample data - replace with your actual workout tracking data
  const workoutData = {
    current: [
      {
        day: "Mon",
        completed: true,
        duration: "45 min",
        type: "Strength",
        calories: 320,
      },
      {
        day: "Tue",
        completed: true,
        duration: "30 min",
        type: "Cardio",
        calories: 280,
      },
      {
        day: "Wed",
        completed: false,
        duration: "Rest day",
        type: "Rest",
        calories: 0,
      },
      {
        day: "Thu",
        completed: true,
        duration: "60 min",
        type: "HIIT",
        calories: 450,
      },
      {
        day: "Fri",
        completed: false,
        duration: "40 min",
        type: "Yoga",
        calories: 180,
      },
      {
        day: "Sat",
        completed: false,
        duration: "45 min",
        type: "Strength",
        calories: 320,
      },
      {
        day: "Sun",
        completed: false,
        duration: "Rest day",
        type: "Rest",
        calories: 0,
      },
    ],
    previous: [
      {
        day: "Mon",
        completed: true,
        duration: "40 min",
        type: "HIIT",
        calories: 380,
      },
      {
        day: "Tue",
        completed: true,
        duration: "30 min",
        type: "Strength",
        calories: 250,
      },
      {
        day: "Wed",
        completed: true,
        duration: "45 min",
        type: "Cardio",
        calories: 310,
      },
      {
        day: "Thu",
        completed: false,
        duration: "Rest day",
        type: "Rest",
        calories: 0,
      },
      {
        day: "Fri",
        completed: true,
        duration: "55 min",
        type: "Strength",
        calories: 420,
      },
      {
        day: "Sat",
        completed: true,
        duration: "30 min",
        type: "Yoga",
        calories: 160,
      },
      {
        day: "Sun",
        completed: false,
        duration: "Rest day",
        type: "Rest",
        calories: 0,
      },
    ],
  };

  // Calculate statistics
  const currentWeekCompleted = workoutData[activeWeek].filter(
    (day) => day.completed
  ).length;
  const totalWorkoutDays = workoutData[activeWeek].filter(
    (day) => day.type !== "Rest"
  ).length;
  const completionPercentage = Math.round(
    (currentWeekCompleted / totalWorkoutDays) * 100
  );

  const totalCaloriesBurned = workoutData[activeWeek]
    .filter((day) => day.completed)
    .reduce((total, day) => total + day.calories, 0);

  const totalWorkoutMinutes = workoutData[activeWeek]
    .filter((day) => day.completed && day.type !== "Rest")
    .reduce((total, day) => {
      const minutes = parseInt(day.duration);
      return isNaN(minutes) ? total : total + minutes;
    }, 0);

  // Format date for header
  const formatDateRange = (date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const startMonth = startOfWeek.toLocaleString("default", {
      month: "short",
    });
    const endMonth = endOfWeek.toLocaleString("default", { month: "short" });

    return `${startOfWeek.getDate()} ${startMonth} - ${endOfWeek.getDate()} ${endMonth}`;
  };

  // Navigate between weeks
  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
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
              <h1 className="text-2xl font-bold">Workout Tracker</h1>
              <p className="text-gray-400">
                Track and manage your weekly workout schedule
              </p>
            </div>
          </header>

          {/* Main Content */}
          <div className="p-6 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Completion Rate</p>
                    <h3 className="text-2xl font-bold">
                      {completionPercentage}%
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <TrendingUp size={18} className="text-lime-400" />
                  </div>
                </div>
                <div className="mt-4 bg-gray-800/50 rounded-full h-2">
                  <div
                    className="bg-lime-400 h-2 rounded-full"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Workouts Done</p>
                    <h3 className="text-2xl font-bold">
                      {currentWeekCompleted} / {totalWorkoutDays}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Check size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {totalWorkoutDays - currentWeekCompleted} workouts remaining
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Minutes</p>
                    <h3 className="text-2xl font-bold">
                      {totalWorkoutMinutes} min
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Clock size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {Math.round(totalWorkoutMinutes / currentWeekCompleted)} min
                  average
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Calories Burned</p>
                    <h3 className="text-2xl font-bold">
                      {totalCaloriesBurned}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Zap size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {Math.round(totalCaloriesBurned / currentWeekCompleted)} per
                  workout
                </p>
              </div>
            </div>

            {/* Week Navigator */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-bold">Weekly Schedule</h2>
                <div className="bg-gray-800/80 rounded-lg px-4 py-1 flex items-center">
                  <button
                    onClick={() => navigateWeek("prev")}
                    className="p-1 hover:text-lime-400"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="mx-3 text-sm">
                    {formatDateRange(currentDate)}
                  </span>
                  <button
                    onClick={() => navigateWeek("next")}
                    className="p-1 hover:text-lime-400"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <select
                  value={activeWeek}
                  onChange={(e) => setActiveWeek(e.target.value)}
                  className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
                >
                  <option value="current">This Week</option>
                  <option value="previous">Last Week</option>
                </select>
              </div>
            </div>

            {/* Weekly Calendar */}
            <div className="bg-gray-900/80 rounded-lg p-6">
              <div className="grid grid-cols-7 gap-4">
                {workoutData[activeWeek].map((day, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-5 text-center transition-all ${
                      day.completed
                        ? "bg-lime-400/20 border border-lime-400/40"
                        : day.type === "Rest"
                        ? "bg-gray-800/40"
                        : "bg-gray-800/90"
                    }`}
                  >
                    <div className="font-medium mb-3">{day.day}</div>
                    {day.completed ? (
                      <div className="w-12 h-12 mx-auto bg-lime-400 rounded-full flex items-center justify-center mb-3">
                        <Check size={24} className="text-black" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 mx-auto border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center mb-3">
                        {day.type === "Rest" ? "REST" : ""}
                      </div>
                    )}
                    <div className="font-medium mt-2">{day.type}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      {day.duration}
                    </div>

                    {day.type !== "Rest" && (
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <div className="text-xs text-gray-400">Calories</div>
                        <div className="font-medium">{day.calories}</div>
                      </div>
                    )}

                    {day.type !== "Rest" && !day.completed && (
                      <button className="mt-3 px-3 py-1 bg-lime-400/20 text-lime-400 rounded-md text-sm w-full hover:bg-lime-400/30 transition-colors">
                        Start
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Workout History */}
            <div>
              <h2 className="text-xl font-bold mb-4">Recent Workouts</h2>
              <div className="bg-gray-900/80 rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left border-b border-gray-800">
                      <th className="p-4 text-gray-400">Date</th>
                      <th className="p-4 text-gray-400">Workout Type</th>
                      <th className="p-4 text-gray-400">Duration</th>
                      <th className="p-4 text-gray-400">Calories</th>
                      <th className="p-4 text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        date: "17 Apr",
                        type: "HIIT",
                        duration: "60 min",
                        calories: 450,
                        status: "Completed",
                      },
                      {
                        date: "16 Apr",
                        type: "Cardio",
                        duration: "30 min",
                        calories: 280,
                        status: "Completed",
                      },
                      {
                        date: "15 Apr",
                        type: "Strength",
                        duration: "45 min",
                        calories: 320,
                        status: "Completed",
                      },
                      {
                        date: "13 Apr",
                        type: "Yoga",
                        duration: "30 min",
                        calories: 160,
                        status: "Completed",
                      },
                      {
                        date: "12 Apr",
                        type: "Strength",
                        duration: "55 min",
                        calories: 420,
                        status: "Completed",
                      },
                    ].map((workout, index) => (
                      <tr key={index} className="border-b border-gray-800">
                        <td className="p-4">{workout.date}</td>
                        <td className="p-4 font-medium">{workout.type}</td>
                        <td className="p-4">{workout.duration}</td>
                        <td className="p-4">{workout.calories}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-lime-400/20 text-lime-400 rounded-md text-sm">
                            {workout.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
