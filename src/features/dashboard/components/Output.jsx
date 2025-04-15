import React from "react";

export default function Output() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Output</h2>
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
      <div className="space-y-3">
        <div className="bg-gray-900/80 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm">Calory loss</div>
                <div className="text-xl font-bold">123 gm</div>
              </div>
            </div>
            <div className="bg-amber-400 text-black px-2 py-1 rounded text-xs font-bold">
              WOW
            </div>
          </div>
        </div>

        <div className="bg-gray-900/80 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm">Weight loss</div>
                <div className="text-xl font-bold">1.23 kg</div>
              </div>
            </div>
            <div className="bg-red-400 text-black px-2 py-1 rounded text-xs font-bold">
              Great
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
