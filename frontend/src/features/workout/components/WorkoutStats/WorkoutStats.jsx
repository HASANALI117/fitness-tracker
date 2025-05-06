import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Check, Clock, Zap } from "lucide-react";
import StatCard from "./StatCard";
import WeeklyProgressChart from "./WeeklyProgressChart";
import WorkoutConsistencyChart from "./WorkoutConsistencyChart";

export default function WorkoutStats({ stats }) {
  return (
    <motion.div
      key="stats"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Completion Rate */}
        <StatCard
          title="Completion Rate"
          value={`${stats.completionPercentage}%`}
          icon={<TrendingUp size={20} className="text-lime-400" />}
          iconClass="bg-lime-400/20"
          progressValue={stats.completionPercentage}
          delay={0.1}
        />

        {/* Workouts Done */}
        <StatCard
          title="Workouts Done"
          value={
            <>
              {stats.workoutsDone}{" "}
              <span className="text-sm text-gray-400">
                / {stats.totalWorkouts}
              </span>
            </>
          }
          icon={<Check size={20} className="text-green-400" />}
          iconClass="bg-green-400/20"
          subtext={`${
            stats.totalWorkouts - stats.workoutsDone
          } workouts remaining`}
          delay={0.2}
        />

        {/* Total Minutes */}
        <StatCard
          title="Total Minutes"
          value={stats.totalMinutes}
          icon={<Clock size={20} className="text-blue-400" />}
          iconClass="bg-blue-400/20"
          subtext={`${
            stats.workoutsDone > 0
              ? Math.round(stats.totalMinutes / stats.workoutsDone)
              : 0
          } min average`}
          delay={0.3}
        />

        {/* Calories Burned */}
        <StatCard
          title="Calories Burned"
          value={stats.caloriesBurned}
          icon={<Zap size={20} className="text-orange-400" />}
          iconClass="bg-orange-400/20"
          subtext={`${
            stats.workoutsDone > 0
              ? Math.round(stats.caloriesBurned / stats.workoutsDone)
              : 0
          } per workout`}
          delay={0.4}
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <WeeklyProgressChart />
        <WorkoutConsistencyChart />
      </div>
    </motion.div>
  );
}
