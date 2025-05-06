import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Flame, Apple, Calendar, TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon,
  progress,
  progressText,
  trend,
  daysCompleted,
  totalDays,
  variants,
}) {
  // Helper to render the right icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "dumbbell":
        return <Dumbbell size={20} className="text-lime-400" />;
      case "flame":
        return <Flame size={20} className="text-lime-400" />;
      case "apple":
        return <Apple size={20} className="text-lime-400" />;
      case "calendar":
        return <Calendar size={20} className="text-lime-400" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-6 border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm rounded-xl"
    >
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-lime-400/20">
          {renderIcon(icon)}
        </div>
      </div>

      {progress !== undefined && (
        <>
          <div className="mt-4 w-full bg-gray-800 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-lime-400 h-1.5 rounded-full"
            ></motion.div>
          </div>
          <p className="mt-2 text-sm text-gray-400">{progressText}</p>
        </>
      )}

      {trend && (
        <div className="flex items-center mt-4">
          <TrendingUp size={16} className="mr-1 text-lime-400" />
          <p className="text-sm text-lime-400">{trend}</p>
        </div>
      )}

      {daysCompleted !== undefined && totalDays !== undefined && (
        <>
          <div className="flex mt-4 space-x-1">
            {[...Array(totalDays)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`flex-1 h-2 rounded-full ${
                  i < daysCompleted ? "bg-lime-400" : "bg-gray-700"
                }`}
              ></motion.div>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-400">This week</p>
        </>
      )}
    </motion.div>
  );
}
