import React from "react";
import { motion } from "framer-motion";

export default function WorkoutConsistencyChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="p-6 shadow-lg bg-gray-900/80 rounded-xl"
    >
      <h3 className="mb-4 text-lg font-bold">Workout Consistency</h3>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.01 * i }}
            className={`aspect-square rounded-md ${
              Math.random() > 0.6
                ? "bg-gradient-to-br from-lime-500 to-green-500"
                : "bg-gray-800"
            }`}
          ></motion.div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-400">Last 4 weeks</p>
    </motion.div>
  );
}
