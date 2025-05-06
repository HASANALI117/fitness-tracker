import React from "react";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import Achievements from "./Achievements";

const ProfileCard = ({ user, isEditing, fitnessStats }) => {
  // Calculate BMI if height and weight are available
  const calculateBMI = () => {
    if (!user.height || !user.weight) return null;

    // Convert height from cm to meters
    const heightInMeters = user.height / 100;
    const bmi = (user.weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Return BMI value and category
    let category = "";
    let color = "";
    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-400";
    } else if (bmi < 25) {
      category = "Normal";
      color = "text-green-400";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-400";
    } else {
      category = "Obese";
      color = "text-red-400";
    }

    return { value: bmi, category, color };
  };

  const bmi = calculateBMI();

  return (
    <div className="flex flex-col items-center p-6 border border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur-sm rounded-xl">
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-48 h-48 overflow-hidden border-4 rounded-full shadow-lg border-lime-500 shadow-lime-500/20"
        >
          <img
            src="https://picsum.photos/500"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>
        {isEditing && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute p-3 text-black rounded-full shadow-lg cursor-pointer bottom-2 right-2 bg-lime-400"
          >
            <Camera size={20} />
          </motion.div>
        )}
      </div>
      <h2 className="mt-4 text-2xl font-bold">
        {user.first_name} {user.last_name}
      </h2>

      {/* BMI Display */}
      {bmi && (
        <div className="px-4 py-2 mt-3 rounded-full bg-gray-800/50">
          <span className="text-sm">
            BMI: <span className="font-bold text-lime-400">{bmi.value}</span>
            <span className={`text-xs ml-2 ${bmi.color}`}>
              ({bmi.category})
            </span>
          </span>
        </div>
      )}

      <div className="grid w-full grid-cols-2 gap-4 mt-6">
        <div className="p-4 text-center bg-gray-800/50 rounded-xl">
          <div className="text-sm text-gray-400">Height</div>
          <div className="text-lg font-medium">
            {user.height} <span className="text-xs text-gray-400">cm</span>
          </div>
        </div>
        <div className="p-4 text-center bg-gray-800/50 rounded-xl">
          <div className="text-sm text-gray-400">Weight</div>
          <div className="text-lg font-medium">
            {user.weight} <span className="text-xs text-gray-400">kg</span>
          </div>
        </div>
      </div>

      {/* Streak */}
      <div className="w-full p-4 mt-6 bg-gray-800/50 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">Current Streak</div>
          <div className="font-bold text-lime-400">
            {fitnessStats.streakDays} days
          </div>
        </div>
        <div className="flex mt-2 space-x-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < fitnessStats.streakDays ? "bg-lime-400" : "bg-gray-700"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full mt-6">
        <h3 className="mb-3 text-lg font-bold">Recent Achievements</h3>
        <Achievements achievements={fitnessStats.achievements} />
      </div>
    </div>
  );
};

export default ProfileCard;
