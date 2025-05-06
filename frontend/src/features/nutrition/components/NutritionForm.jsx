import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { generateNutritionAdvice } from "../../../services/api/nutritionService";

export default function NutritionForm({ onClose, onSuccess }) {
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
      await generateNutritionAdvice(formData);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-gray-900/80 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            Generate Personalized Nutrition Plan
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <X size={24} />
          </motion.button>
        </div>

        <form onSubmit={generateNutritionPlan} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-400">Nutrition Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
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
              <label className="block mb-1 text-gray-400">
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
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-400">
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
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Activity Level</label>
            <select
              name="daily_activity_level"
              value={formData.daily_activity_level}
              onChange={handleInputChange}
              className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="moderate">Moderately Active</option>
              <option value="active">Very Active</option>
              <option value="extreme">Extremely Active</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-400">
              Dietary Restrictions
            </label>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
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
                  className="flex items-center space-x-2 cursor-pointer hover:text-lime-400"
                >
                  <input
                    type="checkbox"
                    name="dietary_restrictions"
                    value={restriction.toLowerCase()}
                    checked={formData.dietary_restrictions.includes(
                      restriction.toLowerCase()
                    )}
                    onChange={handleInputChange}
                    className="bg-gray-800 rounded text-lime-500 focus:ring-lime-500 focus:ring-offset-0"
                  />
                  <span>{restriction}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isGenerating}
              className="flex items-center justify-center w-full px-4 py-3 font-medium text-black transition-all rounded-lg shadow-lg bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Generating Plan...
                </>
              ) : (
                "Generate Nutrition Plan"
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
