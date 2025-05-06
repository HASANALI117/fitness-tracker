import React from "react";
import { motion } from "framer-motion";

export default function WeeklyProgressChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
    >
      <h3 className="mb-4 text-lg font-bold">Weekly Progress</h3>
      <div className="flex items-end justify-between h-48">
        {days.map((day, i) => (
          <div key={day} className="flex flex-col items-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${Math.random() * 100}%` }}
              transition={{ duration: 1, delay: 0.1 * i }}
              className="w-6 bg-gradient-to-t from-lime-500 to-lime-300 rounded-t-md"
            ></motion.div>
            <span className="mt-2 text-xs text-gray-400">{day}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
