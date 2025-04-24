import React from "react";

export default function NutritionBreakdown({ totals }) {
  const { completedCalories, totalProtein, totalCarbs, totalFat } = totals;

  const calculatePercentage = (nutrient, calories, multiplier) => {
    if (!calories) return 0;
    return Math.round(((nutrient * multiplier) / calories) * 100);
  };

  const proteinPercentage = calculatePercentage(
    totalProtein,
    completedCalories,
    4
  );
  const carbsPercentage = calculatePercentage(totalCarbs, completedCalories, 4);
  const fatPercentage = calculatePercentage(totalFat, completedCalories, 9);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Nutrition Breakdown</h2>
      <div className="bg-gray-900/80 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="w-1/3">
            <div className="bg-gray-800 rounded-full h-4 mb-2">
              <div
                className="bg-lime-400 h-4 rounded-full"
                style={{ width: `${proteinPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Protein</span>
              <span>{proteinPercentage}%</span>
            </div>
          </div>

          <div className="w-1/3 mx-4">
            <div className="bg-gray-800 rounded-full h-4 mb-2">
              <div
                className="bg-blue-400 h-4 rounded-full"
                style={{ width: `${carbsPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Carbs</span>
              <span>{carbsPercentage}%</span>
            </div>
          </div>

          <div className="w-1/3">
            <div className="bg-gray-800 rounded-full h-4 mb-2">
              <div
                className="bg-yellow-400 h-4 rounded-full"
                style={{ width: `${fatPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Fat</span>
              <span>{fatPercentage}%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-gray-800/60 rounded-lg p-4">
            <div className="text-sm text-gray-400">Water Intake</div>
            <div className="text-2xl font-bold">1.8 L</div>
            <div className="text-xs text-gray-500">Goal: 2.5 L</div>
            <div className="mt-2 bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-blue-400 h-1.5 rounded-full"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>

          <div className="bg-gray-800/60 rounded-lg p-4">
            <div className="text-sm text-gray-400">Fiber</div>
            <div className="text-2xl font-bold">18 g</div>
            <div className="text-xs text-gray-500">Goal: 25 g</div>
            <div className="mt-2 bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-green-400 h-1.5 rounded-full"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>

          <div className="bg-gray-800/60 rounded-lg p-4">
            <div className="text-sm text-gray-400">Sugar</div>
            <div className="text-2xl font-bold">24 g</div>
            <div className="text-xs text-gray-500">Limit: 36 g</div>
            <div className="mt-2 bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-red-400 h-1.5 rounded-full"
                style={{ width: "66%" }}
              ></div>
            </div>
          </div>

          <div className="bg-gray-800/60 rounded-lg p-4">
            <div className="text-sm text-gray-400">Sodium</div>
            <div className="text-2xl font-bold">1.2 g</div>
            <div className="text-xs text-gray-500">Limit: 2.3 g</div>
            <div className="mt-2 bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-yellow-400 h-1.5 rounded-full"
                style={{ width: "52%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
