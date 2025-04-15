import React from "react";
import { Activity, Dumbbell } from "lucide-react";

export default function RecommendedActivity() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Recommend activity</h2>
        <div className="flex items-center space-x-2 text-sm">
          <span>Monthly</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="bg-gray-900/80 rounded-lg p-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="bg-lime-300 p-2 rounded text-black">
            <Dumbbell size={20} />
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium">Fitness for beggineres</div>
            <div className="text-xs text-gray-400">17 Feb, 2022 at 5:30 PM</div>
          </div>
          <div>
            <img
              src="/api/placeholder/28/28"
              alt="User"
              className="w-7 h-7 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-teal-400 p-2 rounded text-black">
            <Activity size={20} />
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium">Beginner to advance gym</div>
            <div className="text-xs text-gray-400">17 Feb, 2022 at 4:30 PM</div>
          </div>
          <div>
            <img
              src="/api/placeholder/28/28"
              alt="User"
              className="w-7 h-7 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-gray-600 p-2 rounded">
            <Activity size={20} />
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium">Ultimate body workout</div>
            <div className="text-xs text-gray-400">17 Feb, 2022 at 3:30 PM</div>
          </div>
          <div>
            <img
              src="/api/placeholder/28/28"
              alt="User"
              className="w-7 h-7 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
