import React from "react";
import { X, Loader2 } from "lucide-react";

const WorkoutForm = ({
  formData,
  handleInputChange,
  generateWorkoutPlan,
  isGenerating,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Generate Personalized Workout Plan
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={generateWorkoutPlan} className="space-y-6">
          {/* Body Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="16"
                max="90"
                required
                className="w-full bg-gray-800 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                min="120"
                max="220"
                required
                className="w-full bg-gray-800 rounded p-2 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 mb-1">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                min="30"
                max="200"
                required
                className="w-full bg-gray-800 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Fitness Goal</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full bg-gray-800 rounded p-2 text-white"
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
              <label className="block text-gray-400 mb-1">Fitness Level</label>
              <select
                name="fitness_level"
                value={formData.fitness_level}
                onChange={handleInputChange}
                className="w-full bg-gray-800 rounded p-2 text-white"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">
                Plan Duration (weeks)
              </label>
              <select
                name="plan_duration_weeks"
                value={formData.plan_duration_weeks}
                onChange={handleInputChange}
                className="w-full bg-gray-800 rounded p-2 text-white"
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
              <label className="block text-gray-400 mb-1">Days Per Week</label>
              <select
                name="days_per_week"
                value={formData.schedule.days_per_week}
                onChange={handleInputChange}
                className="w-full bg-gray-800 rounded p-2 text-white"
              >
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">
                Session Duration (mins)
              </label>
              <select
                name="session_duration"
                value={formData.schedule.session_duration}
                onChange={handleInputChange}
                className="w-full bg-gray-800 rounded p-2 text-white"
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
            <label className="block text-gray-400 mb-2">
              Exercise Preferences
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                "HIIT",
                "Cardio",
                "Strength",
                "Yoga",
                "Pilates",
                "Calisthenics",
              ].map((preference) => (
                <label key={preference} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="preferences"
                    value={preference.toLowerCase()}
                    checked={formData.preferences.includes(
                      preference.toLowerCase()
                    )}
                    onChange={handleInputChange}
                    className="rounded bg-gray-800"
                  />
                  <span>{preference}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Health Conditions */}
          <div>
            <label className="block text-gray-400 mb-2">
              Health Conditions
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Lower back pain",
                "Knee issues",
                "Shoulder injury",
                "Wrist limitations",
              ].map((condition) => (
                <label key={condition} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="health_conditions"
                    value={condition.toLowerCase()}
                    checked={formData.health_conditions.includes(
                      condition.toLowerCase()
                    )}
                    onChange={handleInputChange}
                    className="rounded bg-gray-800"
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Equipment Access */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="use_equipment"
                checked={formData.use_equipment}
                onChange={handleInputChange}
                className="rounded bg-gray-800"
              />
              <span>I have access to gym equipment</span>
            </label>
          </div>

          {/* Submit Button */}
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
                "Generate Workout Plan"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
