import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center py-20"
    >
      <div className="flex flex-col items-center">
        <Loader2 size={40} className="mb-4 animate-spin text-lime-400" />
        <p className="text-gray-400">Loading nutrition data...</p>
      </div>
    </motion.div>
  );
}
