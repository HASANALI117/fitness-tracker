import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeeklyNavigator({
  currentDate,
  navigateWeek,
  currentPlanId,
  workoutPlans,
  onPlanChange,
}) {
  // Format date for header
  const formatDateRange = (date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const startMonth = startOfWeek.toLocaleString("default", {
      month: "short",
    });
    const endMonth = endOfWeek.toLocaleString("default", { month: "short" });

    return `${startOfWeek.getDate()} ${startMonth} - ${endOfWeek.getDate()} ${endMonth}`;
  };

  return (
    <div className="flex flex-col items-start justify-between gap-4 mb-6 md:flex-row md:items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold">Weekly Schedule</h2>
        <div className="flex items-center px-4 py-1 rounded-lg bg-gray-900/80">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateWeek("prev")}
            className="p-1 transition-colors hover:text-lime-400"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <span className="mx-3 text-sm">{formatDateRange(currentDate)}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateWeek("next")}
            className="p-1 transition-colors hover:text-lime-400"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-sm">
        <select
          value={currentPlanId || ""}
          onChange={(e) => onPlanChange(e.target.value)}
          className="px-3 py-2 text-gray-200 border-0 rounded-lg cursor-pointer bg-gray-900/80 focus:outline-none"
        >
          {workoutPlans.map((plan) => (
            <option key={plan._id} value={plan._id}>
              {plan.goal} Plan - {new Date(plan.createdAt).toLocaleDateString()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
