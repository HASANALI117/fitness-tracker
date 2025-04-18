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
          <div className="text-sm text-gray-500 mb-2">Day 1</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Veggis and Hummus</div>
                <div className="text-xs text-gray-400">7 days</div>
                <div className="text-xs text-gray-400">only dinner time</div>
              </div>
              <img
                src="https://png.pngtree.com/png-vector/20240518/ourmid/pngtree-classic-hummus-with-toppings-png-image_12493575.png"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Day 2</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">A bowl of salad</div>
                <div className="text-xs text-gray-400">12 days</div>
                <div className="text-xs text-gray-400">only lunch time</div>
              </div>
              <img
                src="https://png.pngtree.com/png-vector/20240712/ourmid/pngtree-food-bowl-vegetable-salad-png-image_13052209.png"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Day 3</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Green variety foods</div>
                <div className="text-xs text-gray-400">13 days</div>
                <div className="text-xs text-gray-400">for breakfast</div>
              </div>
              <img
                src="https://png.pngtree.com/png-clipart/20240907/original/pngtree-d-photo-of-variety-vegetable-pile-nature-food-on-transparent-background-png-image_15961411.png"
                alt="Food"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Day 4</div>
          <div className="bg-gray-900/80 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">A bowl of berries</div>
                <div className="text-xs text-gray-400">9 days</div>
                <div className="text-xs text-gray-400">for breakfast</div>
              </div>
              <img
                src="https://png.pngtree.com/png-clipart/20241010/original/pngtree-fresh-mixed-berries-in-white-bowl-illustration-png-image_16263974.png"
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
