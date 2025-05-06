import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DateNavigation({
  currentDate,
  navigateDay,
  activeSection,
  setActiveSection,
}) {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col items-start justify-between mt-8 mb-6 md:flex-row md:items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold">Meal Schedule</h2>
        <div className="flex items-center px-4 py-1 rounded-lg bg-gray-800/80">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateDay("prev")}
            className="p-1 transition-colors hover:text-lime-400"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <span className="mx-3 text-sm">{formatDate(currentDate)}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateDay("next")}
            className="p-1 transition-colors hover:text-lime-400"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
      <div className="flex items-center mt-4 space-x-2 text-sm md:mt-0">
        <select
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
          className="px-3 py-2 text-gray-200 border-0 rounded-lg cursor-pointer bg-gray-800/80 focus:outline-none"
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="custom">Custom Plan</option>
        </select>
      </div>
    </div>
  );
}
