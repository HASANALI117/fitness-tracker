import React from "react";

export default function Activity() {
  // Monthly activity data
  const activityData = [
    { month: "Jan", percentage: 30 },
    { month: "Feb", percentage: 70 },
    { month: "Mar", percentage: 50 },
    { month: "Apr", percentage: 60 },
    { month: "May", percentage: 12 },
    { month: "Jun", percentage: 11 },
    { month: "Jul", percentage: 10 },
    { month: "Aug", percentage: 0 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Activity</h2>
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
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between h-48 items-end">
          {activityData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-8 bg-gray-700 rounded-md"
                style={{
                  height: `${data.percentage}%`,
                  backgroundColor:
                    index === 3
                      ? "rgba(255, 255, 255, 0.6)"
                      : "rgba(255, 255, 255, 0.2)",
                }}
              ></div>
              <div className="mt-2 text-xs text-gray-400">{data.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
