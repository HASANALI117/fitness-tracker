import React from "react";
import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  iconClass,
  subtext,
  progressValue,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl"
    >
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="mt-1 text-3xl font-bold">{value}</h3>
        </div>
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${iconClass}`}
        >
          {icon}
        </div>
      </div>

      {progressValue !== undefined && (
        <div className="h-3 mt-4 overflow-hidden rounded-full bg-gray-800/50">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressValue}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500"
          ></motion.div>
        </div>
      )}

      {subtext && <p className="mt-4 text-sm text-gray-400">{subtext}</p>}
    </motion.div>
  );
}
