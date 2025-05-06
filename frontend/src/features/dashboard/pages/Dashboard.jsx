import { useState, useContext } from "react";
import { UserContext } from "../../../utils/ProtectedRoutes";
import { motion } from "framer-motion";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Plus } from "lucide-react";

// Import components
import StatCard from "../components/StatCard";
import ActivityChart from "../components/ActivityChart";
import WorkoutConsistencyChart from "../../workout/components/WorkoutStats/WorkoutConsistencyChart";
import UpcomingWorkouts from "../components/UpcomingWorkouts";
import Achievements from "../components/Achievements";

export default function DashboardPage() {
  const { user, loading } = useContext(UserContext);
  const [chartTimeframe, setChartTimeframe] = useState("weekly");

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
    upcomingWorkouts: [
      { id: 1, name: "HIIT Training", time: "Today, 5:30 PM", duration: 45 },
      { id: 2, name: "Yoga Session", time: "Tomorrow, 7:00 AM", duration: 60 },
    ],
    recentAchievements: [
      { id: 1, name: "5-Day Streak", icon: "🔥", date: "Today" },
      { id: 2, name: "10 Workouts", icon: "🏋️", date: "Yesterday" },
    ],
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-12 h-12 border-t-2 rounded-full animate-spin border-lime-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-20">
          <Header
            title={`Welcome, ${user.first_name}`}
            subtitle="Here's your fitness overview"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 space-y-8"
          >
            {/* Summary Stats */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <StatCard
                title="Workouts Completed"
                value={dashboardData.userStats.workoutsCompleted}
                icon="dumbbell"
                progress={dashboardData.userStats.workoutGoalProgress}
                progressText={`${dashboardData.userStats.workoutGoalProgress}% of weekly goal`}
                variants={itemVariants}
              />

              <StatCard
                title="Calories Burned"
                value={dashboardData.userStats.caloriesBurned}
                icon="flame"
                trend="+12% from last week"
                variants={itemVariants}
              />

              <StatCard
                title="Meals Tracked"
                value={dashboardData.userStats.mealsTracked}
                icon="apple"
                progress={dashboardData.userStats.nutritionGoalProgress}
                progressText={`${dashboardData.userStats.nutritionGoalProgress}% of nutrition goals`}
                variants={itemVariants}
              />

              <StatCard
                title="Active Days"
                value={`${dashboardData.userStats.activeDays.completed}/${dashboardData.userStats.activeDays.total}`}
                icon="calendar"
                daysCompleted={dashboardData.userStats.activeDays.completed}
                totalDays={dashboardData.userStats.activeDays.total}
                variants={itemVariants}
              />
            </div>

            {/* Mid Section - Two Charts */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Activity Chart */}
              <ActivityChart
                data={dashboardData.activityOverview.data}
                timeframe={chartTimeframe}
                setTimeframe={setChartTimeframe}
                variants={itemVariants}
              />

              {/* Workout Consistency Chart */}
              <WorkoutConsistencyChart variants={itemVariants} />
            </div>

            {/* Bottom Section - Two Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Upcoming Workouts */}
              <UpcomingWorkouts
                workouts={dashboardData.upcomingWorkouts}
                variants={itemVariants}
              />

              {/* Recent Achievements */}
              <Achievements
                achievements={dashboardData.recentAchievements}
                variants={itemVariants}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
