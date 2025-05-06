import { useState } from "react";
import { motion } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export default function WorkoutForm({ onClose, onSubmit }) {
  const [isGenerating, setIsGenerating] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    goal: "weight_loss",
    fitness_level: "beginner",
    preferences: [],
    health_conditions: [],
    schedule: {
      days_per_week: 3,
      session_duration: 45,
    },
    plan_duration_weeks: 1,
    use_equipment: false,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "days_per_week" || name === "session_duration") {
      setFormData({
        ...formData,
        schedule: {
          ...formData.schedule,
          [name]: type === "number" ? Number.parseInt(value) : value,
        },
      });
    } else if (name === "preferences" || name === "health_conditions") {
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
            ? Number.parseInt(value)
            : value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const success = await onSubmit(formData);
      if (success) {
        onClose();
      }
    } catch (error) {
      console.error("Error in form submission:", error);
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
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            Generate Personalized Workout Plan
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Body Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-400">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="16"
                max="90"
                required
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-400">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                min="120"
                max="220"
                required
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-400">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                min="30"
                max="200"
                required
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-400">Fitness Goal</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              >
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="endurance">Endurance</option>
                <option value="strength">Strength</option>
                <option value="flexibility">Flexibility</option>
                <option value="general_fitness">General Fitness</option>
              </select>
            </div>
          </div>

          {/* Fitness & Plan Settings */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-400">Fitness Level</label>
              <select
                name="fitness_level"
                value={formData.fitness_level}
                onChange={handleInputChange}
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-400">
                Plan Duration (weeks)
              </label>
              <select
                name="plan_duration_weeks"
                value={formData.plan_duration_weeks}
                onChange={handleInputChange}
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              >
                <option value="1">1 week</option>
                <option value="2">2 weeks</option>
                <option value="3">3 weeks</option>
                <option value="4">4 weeks</option>
              </select>
            </div>
          </div>

          {/* Schedule */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-400">Days Per Week</label>
              <select
                name="days_per_week"
                value={formData.schedule.days_per_week}
                onChange={handleInputChange}
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              >
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-400">
                Session Duration (mins)
              </label>
              <select
                name="session_duration"
                value={formData.schedule.session_duration}
                onChange={handleInputChange}
                className="w-full p-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-800/80 focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
              >
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <label className="block mb-2 text-gray-400">
              Exercise Preferences
            </label>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[
                "HIIT",
                "Cardio",
                "Strength",
                "Yoga",
                "Pilates",
                "Calisthenics",
              ].map((preference) => (
                <label
                  key={preference}
                  className="flex items-center space-x-2 cursor-pointer hover:text-lime-400"
                >
                  <input
                    type="checkbox"
                    name="preferences"
                    value={preference.toLowerCase()}
                    checked={formData.preferences.includes(
                      preference.toLowerCase()
                    )}
                    onChange={handleInputChange}
                    className="bg-gray-800 rounded text-lime-500 focus:ring-lime-500 focus:ring-offset-0"
                  />
                  <span>{preference}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Health Conditions */}
          <div>
            <label className="block mb-2 text-gray-400">
              Health Conditions
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Lower back pain",
                "Knee issues",
                "Shoulder injury",
                "Wrist limitations",
              ].map((condition) => (
                <label
                  key={condition}
                  className="flex items-center space-x-2 cursor-pointer hover:text-lime-400"
                >
                  <input
                    type="checkbox"
                    name="health_conditions"
                    value={condition.toLowerCase()}
                    checked={formData.health_conditions.includes(
                      condition.toLowerCase()
                    )}
                    onChange={handleInputChange}
                    className="bg-gray-800 rounded text-lime-500 focus:ring-lime-500 focus:ring-offset-0"
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Equipment Access */}
          <div>
            <label className="flex items-center space-x-2 cursor-pointer hover:text-lime-400">
              <input
                type="checkbox"
                name="use_equipment"
                checked={formData.use_equipment}
                onChange={handleInputChange}
                className="bg-gray-800 rounded text-lime-500 focus:ring-lime-500 focus:ring-offset-0"
              />
              <span>I have access to gym equipment</span>
            </label>
          </div>

          {/* Submit Button */}
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
                "Generate Workout Plan"
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
