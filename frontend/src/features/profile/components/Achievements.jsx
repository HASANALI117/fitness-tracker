import React from "react";
import { motion } from "framer-motion";

const Achievements = ({ achievements }) => {
  return (
    <div className="space-y-3">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          whileHover={{ x: 5 }}
          className="flex items-center p-3 bg-gray-800/50 rounded-xl"
        >
          <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl bg-gray-700 rounded-lg">
            {achievement.icon}
          </div>
          <div>
            <div className="font-medium">{achievement.name}</div>
            <div className="text-xs text-gray-400">
              {new Date(achievement.date).toLocaleDateString()}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievements;
