import { useState, useEffect } from "react";
import {
  getAllWorkoutPlans,
  generateWorkoutPlan,
  getWorkoutPlanById,
} from "../../../services/api/workoutService";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import WorkoutTabs from "../components/WorkoutTabs";
import WorkoutStats from "../components/WorkoutStats/WorkoutStats";
import WorkoutPlanDisplay from "../components/WorkoutPlan/WorkoutPlanDisplay";
import WeeklyNavigator from "../components/WorkoutPlan/WeeklyNavigator";
import WorkoutForm from "../components/WorkoutForm";
import StatsOverview from "../components/WorkoutStats/StatsOverview";

export default function WorkoutTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
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
      const plans = await getAllWorkoutPlans();
      setWorkoutPlans(plans);

      // Set current plan if available
      if (plans.length > 0) {
        setCurrentPlanId(plans[0]._id);
        fetchWorkoutPlanById(plans[0]._id);
      }
    } catch (error) {
      console.error("Failed to fetch workout plans:", error);
    }
  };

  // Fetch specific workout plan by ID
  const fetchWorkoutPlanById = async (id) => {
    try {
      const plan = await getWorkoutPlanById(id);
      setCurrentPlan(plan);
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
  const handleGenerateWorkout = async (formData) => {
    try {
      const newPlan = await generateWorkoutPlan(formData);

      // Add the new plan to the list
      setWorkoutPlans([newPlan, ...workoutPlans]);
      setCurrentPlanId(newPlan.id);
      fetchWorkoutPlanById(newPlan.id);
      setShowWorkoutForm(false);

      // Show success message
      alert("Workout plan generated successfully!");
      return true;
    } catch (error) {
      console.error("Failed to generate workout plan:", error);
      alert("Failed to generate workout plan. Please try again.");
      return false;
    }
  };

  // Navigate between weeks
  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    setCurrentDate(newDate);
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
    <div className="min-h-screen text-white bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-20">
          {/* Header */}
          <Header
            title="Workout Tracker"
            subtitle="Generate and track your workout plans"
            actionButton={
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowWorkoutForm(true)}
                className="px-6 py-2 font-medium text-black transition-all rounded-lg shadow-lg bg-lime-500 hover:shadow-lime-500/20"
              >
                Generate Workout Plan
              </motion.button>
            }
          />

          {/* Main Content */}
          <div className="p-6 space-y-8">
            <AnimatePresence>
              {/* Stats Overview */}
              <StatsOverview stats={stats} />

              {/* Week Navigator */}
              <WeeklyNavigator
                key="weekly-navigator"
                currentDate={currentDate}
                navigateWeek={navigateWeek}
                currentPlanId={currentPlanId}
                workoutPlans={workoutPlans}
                onPlanChange={(id) => {
                  setCurrentPlanId(id);
                  fetchWorkoutPlanById(id);
                }}
              />

              {/* Workout Plan Display */}
              <WorkoutPlanDisplay
                key="workout-plan-display"
                currentPlan={currentPlan}
                workoutPlans={workoutPlans}
                activeWeekIndex={activeWeekIndex}
                setActiveWeekIndex={setActiveWeekIndex}
                completedWorkouts={completedWorkouts}
                handleWorkoutComplete={handleWorkoutComplete}
                showWorkoutForm={() => setShowWorkoutForm(true)}
              />

              <WorkoutStats stats={stats} key="workout-stats" />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Workout Plan Form Modal */}
      <AnimatePresence>
        {showWorkoutForm && (
          <WorkoutForm
            onClose={() => setShowWorkoutForm(false)}
            onSubmit={handleGenerateWorkout}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
