import React from "react";

export default function HeartRate() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Heart rate</h2>
        <div className="flex items-center space-x-2 text-sm">
          <span>Weekly</span>
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
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between text-gray-400 text-sm">
          <div>90b</div>
          <div>70beats/m</div>
        </div>
        <div className="h-32 relative">
          <div className="absolute inset-0 flex items-center">
            <svg viewBox="0 0 200 50" className="w-full">
              <path
                d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute right-1/3 top-1/3 w-6 h-6 bg-yellow-300 rounded-full border-2 border-gray-800"></div>
        </div>
        <div className="flex justify-between text-gray-400 text-sm">
          <div>40b</div>
          <div>0b</div>
        </div>
        <div className="flex justify-between mt-2 text-gray-400 text-xs">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
        </div>
      </div>
    </div>
  );
}
