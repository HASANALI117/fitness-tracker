import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function EmptyState({ onGeneratePlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 text-center shadow-lg bg-gray-900/80 rounded-xl"
    >
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800/80">
        <Sparkles size={32} className="text-lime-400" />
      </div>
      <h3 className="mb-4 text-xl">No Meal Data Available</h3>
      <p className="mb-8 text-gray-400">
        Generate a nutrition plan to get started with your meal tracking!
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onGeneratePlan}
        className="px-8 py-3 font-medium text-black transition-all rounded-lg shadow-lg bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600"
      >
        Generate Nutrition Plan
      </motion.button>
    </motion.div>
  );
}
