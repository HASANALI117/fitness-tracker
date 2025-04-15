import React from "react";

export default function Overview() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Overview</h2>
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
      <div className="bg-gray-900/80 rounded-lg p-4">
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="84, 100"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold">84%</div>
              <div className="text-sm text-gray-400">1,290 ml</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="text-sm">Calories burn</span>
              </div>
              <div className="flex items-center">
                <div className="text-sm font-medium">33.5%</div>
                <div className="text-xs text-green-400 ml-2">+1.25%</div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Protein</span>
              </div>
              <div className="flex items-center">
                <div className="text-sm font-medium">23.02%</div>
                <div className="text-xs text-green-400 ml-2">+3.43%</div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-sm">Carbs</span>
              </div>
              <div className="flex items-center">
                <div className="text-sm font-medium">11.24%</div>
                <div className="text-xs text-green-400 ml-2">+2.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
