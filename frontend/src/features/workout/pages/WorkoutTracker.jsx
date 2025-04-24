import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

import Sidebar from "../../../components/Sidebar";
import {
  Check,
  Clock,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2,
} from "lucide-react";
import Header from "../../../components/Header";

export default function WorkoutTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [currentPlanId, setCurrentPlanId] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    goal: "weight_loss",
    fitness_level: "beginner",
    preferences: [],
    health_conditions: [],
    schedule: {
      days_per_week: 3,
      session_duration: 45,
    },
    plan_duration_weeks: 1,
    use_equipment: false,
  });

  // Fetch user's workout plans on component mount
  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  // Fetch workout plans
  const fetchWorkoutPlans = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/workout/getAllPlans"
      );
      setWorkoutPlans(response.data.data);

      console.log(workoutPlans);

      // Set current plan if available
      if (response.data.data.length > 0) {
        setCurrentPlanId(response.data.data[0]._id);
        fetchWorkoutPlanById(response.data.data[0]._id);
      }
    } catch (error) {
      console.error("Failed to fetch workout plans:", error);
    }
  };

  // Fetch specific workout plan by ID
  const fetchWorkoutPlanById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/workout/getPlan/${id}`
      );
      setCurrentPlan(response.data.plan);
      setActiveWeekIndex(0); // Reset to first week when loading a new plan
    } catch (error) {
      console.error("Failed to fetch workout plan:", error);
    }
  };

  // Generate workout plan
  const generateWorkoutPlan = async (e) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/workout/generateWorkoutPlan",
        formData
      );

      console.log(response.data);

      // Add the new plan to the list
      setWorkoutPlans([response.data, ...workoutPlans]);
      setCurrentPlanId(response.data.id);
      fetchWorkoutPlanById(response.data.id);
      setShowWorkoutForm(false);

      // Show success message
      alert("Workout plan generated successfully!");
    } catch (error) {
      console.error("Failed to generate workout plan:", error);
      alert("Failed to generate workout plan. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "days_per_week" || name === "session_duration") {
      setFormData({
        ...formData,
        schedule: {
          ...formData.schedule,
          [name]: type === "number" ? parseInt(value) : value,
        },
      });
    } else if (name === "preferences" || name === "health_conditions") {
      // Handle multi-select inputs
      const currentValues = formData[name];
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: currentValues.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]:
          type === "checkbox"
            ? checked
            : type === "number"
            ? parseInt(value)
            : value,
      });
    }

    console.log(formData);
  };

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

  // Calculate stats from current plan if available
  const calculateStats = () => {
    if (
      !currentPlan ||
      !currentPlan.result ||
      !currentPlan.result.weekly_plans
    ) {
      return {
        completionPercentage: 0,
        workoutsDone: 0,
        totalWorkouts: 0,
        totalMinutes: 0,
        caloriesBurned: 0,
      };
    }

    // In a real app, you would track completion status
    // This is a placeholder calculation
    return {
      completionPercentage: 0,
      workoutsDone: 0,
      totalWorkouts: currentPlan.schedule.days_per_week,
      totalMinutes: 0,
      caloriesBurned: 0,
    };
  };

  const stats = calculateStats();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="ml-20 w-full">
          {/* Header */}
          <Header
            title="Workout Tracker"
            subtitle="Generate and track your workout plans"
            actionButton={
              <button
                onClick={() => setShowWorkoutForm(true)}
                className="bg-lime-500 hover:bg-lime-600 text-black font-medium py-2 px-4 rounded transition-colors"
              >
                Generate Workout Plan
              </button>
            }
          />

          {/* Main Content */}
          <div className="p-6 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Completion Rate</p>
                    <h3 className="text-2xl font-bold">
                      {stats.completionPercentage}%
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <TrendingUp size={18} className="text-lime-400" />
                  </div>
                </div>
                <div className="mt-4 bg-gray-800/50 rounded-full h-2">
                  <div
                    className="bg-lime-400 h-2 rounded-full"
                    style={{ width: `${stats.completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Workouts Done</p>
                    <h3 className="text-2xl font-bold">
                      {stats.workoutsDone} / {stats.totalWorkouts}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Check size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {stats.totalWorkouts - stats.workoutsDone} workouts remaining
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Minutes</p>
                    <h3 className="text-2xl font-bold">
                      {stats.totalMinutes} min
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Clock size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {stats.workoutsDone > 0
                    ? Math.round(stats.totalMinutes / stats.workoutsDone)
                    : 0}{" "}
                  min average
                </p>
              </div>

              <div className="bg-gray-900/80 p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Calories Burned</p>
                    <h3 className="text-2xl font-bold">
                      {stats.caloriesBurned}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                    <Zap size={18} className="text-lime-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  {stats.workoutsDone > 0
                    ? Math.round(stats.caloriesBurned / stats.workoutsDone)
                    : 0}{" "}
                  per workout
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
                {workoutPlans.length > 0 && (
                  <select
                    value={currentPlanId || ""}
                    onChange={(e) => {
                      setCurrentPlanId(e.target.value);
                      fetchWorkoutPlanById(e.target.value);
                    }}
                    className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
                  >
                    {workoutPlans.map((plan) => (
                      <option key={plan._id} value={plan._id}>
                        {plan.goal} Plan -{" "}
                        {new Date(plan.createdAt).toLocaleDateString()}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* AI Generated Plan Display */}
            {!currentPlan && workoutPlans.length === 0 && (
              <div className="bg-gray-900/80 rounded-lg p-8 text-center">
                <h3 className="text-lg mb-4">No Workout Plans Generated Yet</h3>
                <p className="text-gray-400 mb-6">
                  Generate your first personalized workout plan to get started!
                </p>
                <button
                  onClick={() => setShowWorkoutForm(true)}
                  className="bg-lime-500 hover:bg-lime-600 text-black font-medium py-2 px-6 rounded transition-colors"
                >
                  Create Workout Plan
                </button>
              </div>
            )}

            {currentPlan &&
              currentPlan.result &&
              currentPlan.result.weekly_plans && (
                <div className="bg-gray-900/80 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">
                      Your AI Generated Workout Plan: {currentPlan.goal}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <select
                        className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
                        value={activeWeekIndex}
                        onChange={(e) =>
                          setActiveWeekIndex(parseInt(e.target.value))
                        }
                      >
                        {currentPlan.result.weekly_plans.map((week, idx) => (
                          <option key={idx} value={idx}>
                            Week {week.week}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4 text-sm">
                    <div>
                      <span className="text-gray-400">Age:</span>
                      {currentPlan.age}
                    </div>
                    <div>
                      <span className="text-gray-400">Height:</span>
                      {currentPlan.height} cm
                    </div>
                    <div>
                      <span className="text-gray-400">Weight:</span>
                      {currentPlan.weight} kg
                    </div>
                    <div>
                      <span className="text-gray-400">Level:</span>
                      {currentPlan.fitness_level}
                    </div>
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      {currentPlan.plan_duration_weeks} weeks
                    </div>
                  </div>

                  {/* Weekly Plan Grid */}
                  <div className="grid grid-cols-7 gap-4 mt-6">
                    {currentPlan.result.weekly_plans[
                      activeWeekIndex
                    ].exercises.map((day, index) => (
                      <div
                        key={index}
                        className={`rounded-lg p-4 text-center ${
                          day.focus === "Rest"
                            ? "bg-gray-800/40"
                            : "bg-lime-400/10"
                        }`}
                      >
                        <div className="font-medium mb-2">{day.day}</div>
                        <div className="font-medium mb-1">{day.focus}</div>

                        {day.exercises && day.exercises.length > 0 ? (
                          <div className="text-left mt-3 text-sm">
                            <div className="max-h-40 overflow-y-auto">
                              {day.exercises.map((exercise, idx) => (
                                <div
                                  key={idx}
                                  className="mb-2 pb-2 border-b border-gray-700"
                                >
                                  <div className="font-medium">
                                    {exercise.name}
                                  </div>
                                  <div className="text-gray-400">
                                    {exercise.sets} sets × {exercise.reps} reps
                                  </div>
                                  {exercise.equipment !== "None" && (
                                    <div className="text-gray-400 text-xs">
                                      Equipment: {exercise.equipment}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            <button className="mt-2 w-full py-1 bg-lime-400/20 text-lime-400 rounded-md text-xs hover:bg-lime-400/30">
                              Start Workout
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-400 text-sm my-4">
                            Rest Day
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Generate Workout Plan Modal */}
      {showWorkoutForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                Generate Personalized Workout Plan
              </h2>
              <button
                onClick={() => setShowWorkoutForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={generateWorkoutPlan} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="16"
                    max="90"
                    required
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    min="120"
                    max="220"
                    required
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    min="30"
                    max="200"
                    required
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">
                    Fitness Goal
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  >
                    <option value="weight_loss">Weight Loss</option>
                    <option value="muscle_gain">Muscle Gain</option>
                    <option value="endurance">Endurance</option>
                    <option value="strength">Strength</option>
                    <option value="flexibility">Flexibility</option>
                    <option value="general_fitness">General Fitness</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">
                    Fitness Level
                  </label>
                  <select
                    name="fitness_level"
                    value={formData.fitness_level}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">
                    Plan Duration (weeks)
                  </label>
                  <select
                    name="plan_duration_weeks"
                    value={formData.plan_duration_weeks}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  >
                    <option value="1">1 week</option>
                    <option value="2">2 weeks</option>
                    <option value="3">3 weeks</option>
                    <option value="4">4 weeks</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">
                    Days Per Week
                  </label>
                  <select
                    name="days_per_week"
                    value={formData.schedule.days_per_week}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  >
                    <option value="3">3 days</option>
                    <option value="4">4 days</option>
                    <option value="5">5 days</option>
                    <option value="6">6 days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">
                    Session Duration (mins)
                  </label>
                  <select
                    name="session_duration"
                    value={formData.schedule.session_duration}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 rounded p-2 text-white"
                  >
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Exercise Preferences
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "HIIT",
                    "Cardio",
                    "Strength",
                    "Yoga",
                    "Pilates",
                    "Calisthenics",
                  ].map((preference) => (
                    <label
                      key={preference}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name="preferences"
                        value={preference.toLowerCase()}
                        checked={formData.preferences.includes(
                          preference.toLowerCase()
                        )}
                        onChange={handleInputChange}
                        className="rounded bg-gray-800"
                      />
                      <span>{preference}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Health Conditions
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Lower back pain",
                    "Knee issues",
                    "Shoulder injury",
                    "Wrist limitations",
                  ].map((condition) => (
                    <label
                      key={condition}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name="health_conditions"
                        value={condition.toLowerCase()}
                        checked={formData.health_conditions.includes(
                          condition.toLowerCase()
                        )}
                        onChange={handleInputChange}
                        className="rounded bg-gray-800"
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="use_equipment"
                    checked={formData.use_equipment}
                    onChange={handleInputChange}
                    className="rounded bg-gray-800"
                  />
                  <span>I have access to gym equipment</span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full bg-lime-500 hover:bg-lime-600 text-black font-medium py-3 px-4 rounded transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Generating Plan...
                    </>
                  ) : (
                    "Generate Workout Plan"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
