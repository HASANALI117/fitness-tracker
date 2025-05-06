import React from "react";
import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";

export default function Achievements({ achievements, variants }) {
  return (
    <motion.div
      variants={variants}
      className="p-6 border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm rounded-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-lg font-bold">
          <Award className="mr-2" size={18} /> Recent Achievements
        </h2>
        <button className="flex items-center text-sm text-lime-400">
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ x: 5 }}
            className="flex items-center p-3 rounded-lg bg-gray-800/50"
          >
            <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl bg-gray-700 rounded-lg">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium">{achievement.name}</div>
              <div className="text-xs text-gray-400">{achievement.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
