import React from "react";
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
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold">Meal Schedule</h2>
        <div className="bg-gray-800/80 rounded-lg px-4 py-1 flex items-center">
          <button
            onClick={() => navigateDay("prev")}
            className="p-1 hover:text-lime-400"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="mx-3 text-sm">{formatDate(currentDate)}</span>
          <button
            onClick={() => navigateDay("next")}
            className="p-1 hover:text-lime-400"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <select
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
          className="bg-gray-800/80 text-gray-200 rounded-lg px-3 py-1 border-0 focus:outline-none cursor-pointer"
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="custom">Custom Plan</option>
        </select>
      </div>
    </div>
  );
}
