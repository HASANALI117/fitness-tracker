import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";

// Import components
import WorkoutStats from "../components/WorkoutStats";
import WeekNavigator from "../components/WeekNavigator";
import WorkoutPlanSelector from "../components/WorkoutPlanSelector";
import DayCard from "../components/DayCard";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutPlanInfo from "../components/WorkoutPlanInfo";

export default function WorkoutTracker() {
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [currentPlanId, setCurrentPlanId] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  // Fetch user's workout plans on component mount
  useEffect(() => {
    fetchWorkoutPlans();
    // Load completed workouts from local storage
    const savedCompletedWorkouts = localStorage.getItem("completedWorkouts");
    if (savedCompletedWorkouts) {
      setCompletedWorkouts(JSON.parse(savedCompletedWorkouts));
    }
  }, []);

  // Fetch workout plans
  const fetchWorkoutPlans = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/workout/getAllPlans"
      );
      setWorkoutPlans(response.data.data);

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

  // Handle marking workout as complete
  const handleWorkoutComplete = (dayName) => {
    const updatedCompletedWorkouts = completedWorkouts.includes(dayName)
      ? completedWorkouts.filter((day) => day !== dayName)
      : [...completedWorkouts, dayName];

    setCompletedWorkouts(updatedCompletedWorkouts);
    localStorage.setItem(
      "completedWorkouts",
      JSON.stringify(updatedCompletedWorkouts)
    );
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
  };

  // Calculate stats from current plan and completed workouts
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

    // Calculate completion based on marked workouts
    const totalWorkouts = currentPlan.schedule.days_per_week;
    const workoutsDone = completedWorkouts.length;
    const completionPercentage = Math.round(
      (workoutsDone / totalWorkouts) * 100
    );

    // Estimate calories and minutes based on workout duration and completion
    const sessionDuration = currentPlan.schedule.session_duration;
    const totalMinutes = workoutsDone * sessionDuration;
    const caloriesBurned = workoutsDone * Math.round(sessionDuration * 8); // Rough estimate

    return {
      completionPercentage,
      workoutsDone,
      totalWorkouts,
      totalMinutes,
      caloriesBurned,
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
            <WorkoutStats stats={stats} />

            {/* Week Navigator and Plan Selector */}
            <div className="flex justify-between items-center">
              <WeekNavigator />

              <WorkoutPlanSelector
                workoutPlans={workoutPlans}
                currentPlanId={currentPlanId}
                onPlanChange={(id) => {
                  setCurrentPlanId(id);
                  fetchWorkoutPlanById(id);
                }}
              />
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
                  {/* Workout Plan Info */}
                  <WorkoutPlanInfo
                    plan={currentPlan}
                    activeWeekIndex={activeWeekIndex}
                    onWeekChange={setActiveWeekIndex}
                  />

                  {/* Weekly Plan Grid with component-based cards */}
                  <div className="grid grid-cols-7 gap-4 mt-6">
                    {currentPlan.result.weekly_plans[
                      activeWeekIndex
                    ].exercises.map((day, index) => (
                      <DayCard
                        key={index}
                        day={day}
                        onWorkoutComplete={handleWorkoutComplete}
                        completedWorkouts={completedWorkouts}
                      />
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Workout Plan Form Modal */}
      {showWorkoutForm && (
        <WorkoutForm
          formData={formData}
          handleInputChange={handleInputChange}
          generateWorkoutPlan={generateWorkoutPlan}
          isGenerating={isGenerating}
          onClose={() => setShowWorkoutForm(false)}
        />
      )}
    </div>
  );
}
