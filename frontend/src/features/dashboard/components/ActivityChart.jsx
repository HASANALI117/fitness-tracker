import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function ActivityChart({
  data,
  timeframe,
  setTimeframe,
  variants,
}) {
  return (
    <motion.div
      variants={variants}
      className="p-6 border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center text-lg font-bold">
          <Activity className="mr-2" size={18} /> Activity Overview
        </h2>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="bg-gray-800 border-0 rounded-lg text-sm text-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-lime-400"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="flex items-end justify-between h-64 px-2">
        {data.map((item, index) => {
          // Find the max calories value to normalize the heights
          const maxCalories = Math.max(...data.map((d) => d.calories));

          return (
            <div key={item.day} className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(item.calories / maxCalories) * 100}%`,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  type: "spring",
                }}
                className={`w-12 ${
                  item.active ? "bg-lime-400" : "bg-gray-700"
                } rounded-t-md relative group`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 bg-gray-800 rounded-lg pointer-events-none -top-10 left-1/2 whitespace-nowrap"
                >
                  {item.calories} calories
                </motion.div>
              </motion.div>
              <div className="mt-2 text-xs text-gray-400">{item.day}</div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end mt-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 mr-2 rounded-sm bg-lime-400"></div>
          <span className="text-xs text-gray-400">Active Days</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 mr-2 bg-gray-700 rounded-sm"></div>
          <span className="text-xs text-gray-400">Rest Days</span>
        </div>
      </div>
    </motion.div>
  );
}
