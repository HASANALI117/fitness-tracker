import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Dumbbell, Clock } from "lucide-react";

export default function UpcomingWorkouts({ workouts, variants }) {
  return (
    <motion.div
      variants={variants}
      className="p-6 border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm rounded-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-lg font-bold">
          <Calendar className="mr-2" size={18} /> Upcoming Workouts
        </h2>
        <button className="flex items-center text-sm text-lime-400">
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {workouts.map((workout, index) => (
          <motion.div
            key={workout.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-center p-3 rounded-lg bg-gray-800/50"
          >
            <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-lime-400/20">
              <Dumbbell size={18} className="text-lime-400" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{workout.name}</div>
              <div className="flex items-center text-xs text-gray-400">
                <Clock size={12} className="mr-1" /> {workout.time} •{" "}
                {workout.duration} min
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
