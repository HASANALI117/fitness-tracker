import React from "react";

export default function FitnessGoal() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Fitness goal</h2>
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
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-lime-200 rounded-lg p-2 text-black">
          <div className="font-medium">Side planks</div>
          <div className="text-sm">12 sets/day</div>
          <div className="bg-lime-300 rounded px-2 py-1 text-xs inline-block mt-1">
            Bravo
          </div>
          <div className="mt-2">
            <img
              src="/api/placeholder/100/80"
              alt="Side plank"
              className="w-full h-20 object-cover rounded"
            />
          </div>
        </div>
        <div className="bg-teal-400 rounded-lg p-2 text-black">
          <div className="font-medium">Rope lifting</div>
          <div className="text-sm">10 sets/day</div>
          <div className="bg-teal-300 rounded px-2 py-1 text-xs inline-block mt-1">
            Well
          </div>
          <div className="mt-2">
            <img
              src="/api/placeholder/100/80"
              alt="Rope lifting"
              className="w-full h-20 object-cover rounded"
            />
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg p-2 text-black">
          <div className="font-medium">ABS & Stretch</div>
          <div className="text-sm">10 minutes</div>
          <div className="bg-red-300 rounded px-2 py-1 text-xs inline-block mt-1">
            Great
          </div>
          <div className="mt-2">
            <img
              src="/api/placeholder/100/80"
              alt="ABS"
              className="w-full h-20 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
