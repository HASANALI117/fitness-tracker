import React from "react";
import { Camera } from "lucide-react";

const ProfileCard = ({ user, isEditing }) => {
  // Calculate BMI if height and weight are available
  const calculateBMI = () => {
    if (!user.height || !user.weight) return null;

    // Convert height from cm to meters
    const heightInMeters = user.height / 100;
    const bmi = (user.weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Return BMI value and category
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    return { value: bmi, category };
  };

  const bmi = calculateBMI();

  return (
    <div className="bg-gray-900/80 rounded-lg p-6 flex flex-col items-center">
      <div className="relative">
        <img
          src="https://picsum.photos/500"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-3 border-lime-500"
        />
        {isEditing && (
          <div className="absolute bottom-0 right-0 bg-lime-400 p-2 rounded-full text-black cursor-pointer">
            <Camera size={20} />
          </div>
        )}
      </div>
      <h2 className="text-2xl font-bold mt-4">
        {user.first_name} {user.last_name}
      </h2>

      {/* BMI Display */}
      {bmi && (
        <div className="mt-3 bg-gray-800/50 px-4 py-2 rounded-full">
          <span className="text-sm">
            BMI: <span className="font-bold text-lime-400">{bmi.value}</span>
            <span className="text-xs ml-2 text-gray-400">({bmi.category})</span>
          </span>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 w-full">
        <div className="bg-black/40 p-3 rounded-lg text-center">
          <div className="text-sm text-gray-400">Height</div>
          <div className="font-medium">{user.height} cm</div>
        </div>
        <div className="bg-black/40 p-3 rounded-lg text-center">
          <div className="text-sm text-gray-400">Weight</div>
          <div className="font-medium">{user.weight} kg</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
