import React, { useState } from "react";
import { Save, User, Mail, Activity } from "lucide-react";
import { motion } from "framer-motion";
import PasswordChangeForm from "./PasswordChangeForm";

const ProfileForm = ({
  formData,
  handleChange,
  handleSubmit,
  isEditing,
  setIsEditing,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-400">
            <User size={16} className="mr-2" /> First Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          ) : (
            <div className="p-3 font-medium rounded-lg bg-gray-800/50">
              {formData.first_name}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-400">
            <User size={16} className="mr-2" /> Last Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          ) : (
            <div className="p-3 font-medium rounded-lg bg-gray-800/50">
              {formData.last_name}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-400">
            <Mail size={16} className="mr-2" /> Email
          </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
              className="w-full p-3 text-gray-400 border border-gray-700 rounded-lg cursor-not-allowed bg-gray-800/50 focus:outline-none"
            />
          ) : (
            <div className="p-3 font-medium rounded-lg bg-gray-800/50">
              {formData.email}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-400">
            <Activity size={16} className="mr-2" /> Age
          </label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          ) : (
            <div className="p-3 font-medium rounded-lg bg-gray-800/50">
              {formData.age}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-400">
            <Activity size={16} className="mr-2" /> Height (cm)
          </label>
          {isEditing ? (
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          ) : (
            <div className="p-3 font-medium rounded-lg bg-gray-800/50">
              {formData.height}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-400">
            <Activity size={16} className="mr-2" /> Weight (kg)
          </label>
          {isEditing ? (
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          ) : (
            <div className="p-3 font-medium rounded-lg bg-gray-800/50">
              {formData.weight}
            </div>
          )}
        </div>
      </div>

      {isEditing && (
        <PasswordChangeForm
          formData={formData}
          handleChange={handleChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}

      {isEditing && (
        <div className="flex justify-end pt-4 space-x-4 border-t border-gray-800">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-gray-400 transition-colors border border-gray-600 rounded-lg hover:bg-gray-800"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center px-4 py-2 font-medium text-black rounded-lg bg-lime-400"
          >
            <Save size={18} className="mr-2" /> Save Changes
          </motion.button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
