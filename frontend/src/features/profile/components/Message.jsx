import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Message = ({ message, type }) => {
  if (!message) return null;

  const bgColor =
    type === "success"
      ? "bg-green-900/50 border-green-500"
      : "bg-red-900/50 border-red-500";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`p-3 mx-6 mt-4 text-white border rounded-lg ${bgColor}`}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};

export default Message;
