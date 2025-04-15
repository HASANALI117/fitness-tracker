import React from "react";

export default function RecommendedFood() {
  return (
    <div className="col-span-2 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Recommended food</h2>
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
      <div className="grid grid-cols-4 gap-3">
        <div>
          <div className="text-sm text-gray-500 mb-2">Day one</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Veggis and Hummus</div>
                <div className="text-xs text-gray-400">7 days</div>
                <div className="text-xs text-gray-400">only dinner time</div>
              </div>
              <img
                src="/api/placeholder/50/50"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Day two</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">A bowl of salad</div>
                <div className="text-xs text-gray-400">12 days</div>
                <div className="text-xs text-gray-400">only lunch time</div>
              </div>
              <img
                src="/api/placeholder/50/50"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Day three</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Green variety foods</div>
                <div className="text-xs text-gray-400">13 days</div>
                <div className="text-xs text-gray-400">for breakfast</div>
              </div>
              <img
                src="/api/placeholder/50/50"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Day four</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">A bowl of berries</div>
                <div className="text-xs text-gray-400">9 days</div>
                <div className="text-xs text-gray-400">for breakfast</div>
              </div>
              <img
                src="/api/placeholder/50/50"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
