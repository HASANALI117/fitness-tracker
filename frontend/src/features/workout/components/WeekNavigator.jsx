import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WeekNavigator = ({ currentDate, formatDateRange, navigateWeek }) => {
  return (
    <div className="flex items-center space-x-4">
      <h2 className="text-xl font-bold">Weekly Schedule</h2>
      <div className="bg-gray-800/80 rounded-lg px-4 py-1 flex items-center">
        <button
          onClick={() => navigateWeek("prev")}
          className="p-1 hover:text-lime-400 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="mx-3 text-sm">{formatDateRange(currentDate)}</span>
        <button
          onClick={() => navigateWeek("next")}
          className="p-1 hover:text-lime-400 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default WeekNavigator;
