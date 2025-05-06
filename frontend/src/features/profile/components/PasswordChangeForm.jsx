import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const PasswordChangeForm = ({
  formData,
  handleChange,
  showPassword,
  setShowPassword,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="pt-4 mt-8 border-t border-gray-800"
    >
      <h3 className="flex items-center mb-4 text-lg font-bold">
        <Lock size={18} className="mr-2" /> Change Password
      </h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Current Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="current_password"
              value={formData.current_password}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              Confirm New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full p-3 text-white transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordChangeForm;
