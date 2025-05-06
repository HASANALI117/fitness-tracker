import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ChevronDown,
  Calendar,
  Clock,
  Flame,
  TrendingUp,
} from "lucide-react";

const FitnessStats = ({ fitnessStats, statsExpanded, setStatsExpanded }) => {
  return (
    <motion.div className="overflow-hidden border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm rounded-xl">
      <div
        className="flex items-center justify-between p-6 cursor-pointer"
        onClick={() => setStatsExpanded(!statsExpanded)}
      >
        <h3 className="flex items-center text-xl font-bold">
          <Award className="mr-2" /> Fitness Statistics
        </h3>
        <motion.div
          animate={{ rotate: statsExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>

      <AnimatePresence>
        {statsExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="p-4 text-center bg-gray-800/50 rounded-xl">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" /> Workouts Completed
                  </div>
                  <div className="text-2xl font-bold text-lime-400">
                    {fitnessStats.workoutsCompleted}
                  </div>
                </div>
                <div className="p-4 text-center bg-gray-800/50 rounded-xl">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" /> Total Hours
                  </div>
                  <div className="text-2xl font-bold text-lime-400">
                    {fitnessStats.totalHours}
                  </div>
                </div>
                <div className="p-4 text-center bg-gray-800/50 rounded-xl">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Flame className="w-4 h-4 mr-1" /> Avg. Calories Burned
                  </div>
                  <div className="text-2xl font-bold text-lime-400">
                    {fitnessStats.avgCaloriesBurned}
                  </div>
                </div>
                <div className="p-4 text-center bg-gray-800/50 rounded-xl">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <TrendingUp className="w-4 h-4 mr-1" /> Progress
                  </div>
                  <div className="text-2xl font-bold text-lime-400">
                    {fitnessStats.progress}%
                  </div>
                </div>
              </div>

              {/* Progress Chart */}
              <div className="p-4 mt-6 bg-gray-800/50 rounded-xl">
                <h4 className="mb-3 text-lg font-medium">Monthly Progress</h4>
                <div className="flex items-end justify-between h-48 px-2">
                  {[65, 40, 70, 30, 80, 60, 75, 45, 90, 55, 85, 68].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 1,
                          delay: index * 0.05,
                          type: "spring",
                        }}
                        className="w-full max-w-[20px] bg-lime-400/80 rounded-t-sm relative group mx-1"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 bg-gray-900 rounded pointer-events-none -top-8 left-1/2"
                        >
                          {height}%
                        </motion.div>
                      </motion.div>
                    )
                  )}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FitnessStats;
