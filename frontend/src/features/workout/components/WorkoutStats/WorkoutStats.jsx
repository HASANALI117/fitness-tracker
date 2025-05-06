import React from "react";
import { motion } from "framer-motion";
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
      {/* Additional Stats */}
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <WeeklyProgressChart />
        <WorkoutConsistencyChart />
      </div>
    </motion.div>
  );
}
