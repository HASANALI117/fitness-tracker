import React, { useState } from "react";
import axios from "axios";
import { X, Loader2 } from "lucide-react";

export default function NutritionPlanModal({ onClose, onSuccess }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    goal: "weight_loss",
    dietary_restrictions: [],
    current_weight: "",
    target_weight: "",
    daily_activity_level: "moderate",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "dietary_restrictions") {
      // Handle multi-select inputs
      const currentValues = formData[name];
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: currentValues.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]:
          type === "checkbox"
            ? checked
            : type === "number"
            ? parseFloat(value)
            : value,
      });
    }
  };

  const generateNutritionPlan = async (e) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/nutrition/generatePlan",
        formData
      );

      console.log(response.data);

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to generate nutrition plan:", error);
      alert("Failed to generate nutrition plan. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Generate Personalized Nutrition Plan
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={generateNutritionPlan} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-1">Nutrition Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded p-2 text-white"
            >
              <option value="weight_loss">Weight Loss</option>
              <option value="weight_gain">Weight Gain</option>
              <option value="maintain_weight">Maintain Weight</option>
              <option value="muscle_building">Muscle Building</option>
              <option value="better_health">Better Health</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 mb-1">
                Current Weight (kg)
              </label>
              <input
                type="number"
                name="current_weight"
                value={formData.current_weight}
                onChange={handleInputChange}
                min="30"
                max="200"
                step="0.1"
                required
                className="w-full bg-gray-800 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">
                Target Weight (kg)
              </label>
              <input
                type="number"
                name="target_weight"
                value={formData.target_weight}
                onChange={handleInputChange}
                min="30"
                max="200"
                step="0.1"
                required
                className="w-full bg-gray-800 rounded p-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Activity Level</label>
            <select
              name="daily_activity_level"
              value={formData.daily_activity_level}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded p-2 text-white"
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="moderate">Moderately Active</option>
              <option value="active">Very Active</option>
              <option value="extreme">Extremely Active</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">
              Dietary Restrictions
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Vegetarian",
                "Vegan",
                "Gluten-free",
                "Dairy-free",
                "Nut-free",
                "Low-carb",
                "Keto",
                "Paleo",
              ].map((restriction) => (
                <label
                  key={restriction}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    name="dietary_restrictions"
                    value={restriction.toLowerCase()}
                    checked={formData.dietary_restrictions.includes(
                      restriction.toLowerCase()
                    )}
                    onChange={handleInputChange}
                    className="rounded bg-gray-800"
                  />
                  <span>{restriction}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-lime-500 hover:bg-lime-600 text-black font-medium py-3 px-4 rounded transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Generating Plan...
                </>
              ) : (
                "Generate Nutrition Plan"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
