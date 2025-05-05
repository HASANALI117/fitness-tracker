import React from "react";
import { TrendingUp, Check, Clock, Zap } from "lucide-react";
import StatCard from "./StatCard";

const WorkoutStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard
        title="Completion Rate"
        value={`${stats.completionPercentage}%`}
        icon={<TrendingUp size={18} className="text-lime-400" />}
        progressBar={stats.completionPercentage}
      />

      <StatCard
        title="Workouts Done"
        value={`${stats.workoutsDone} / ${stats.totalWorkouts}`}
        icon={<Check size={18} className="text-lime-400" />}
        subtext={`${
          stats.totalWorkouts - stats.workoutsDone
        } workouts remaining`}
      />

      <StatCard
        title="Total Minutes"
        value={`${stats.totalMinutes} min`}
        icon={<Clock size={18} className="text-lime-400" />}
        subtext={`${
          stats.workoutsDone > 0
            ? Math.round(stats.totalMinutes / stats.workoutsDone)
            : 0
        } min average`}
      />

      <StatCard
        title="Calories Burned"
        value={stats.caloriesBurned}
        icon={<Zap size={18} className="text-lime-400" />}
        subtext={`${
          stats.workoutsDone > 0
            ? Math.round(stats.caloriesBurned / stats.workoutsDone)
            : 0
        } per workout`}
      />
    </div>
  );
};

export default WorkoutStats;
