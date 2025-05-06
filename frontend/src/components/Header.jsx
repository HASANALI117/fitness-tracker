import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/ProtectedRoutes";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";
import axios from "axios";

export default function Header({ title, subtitle, actionButton }) {
  const { user, loading } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/signout",
        {},
        { withCredentials: true }
      );
      navigate("/signin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Generate greeting only if no custom subtitle is provided
  const getDefaultSubtitle = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting = "Good Morning";
    if (hours >= 12 && hours < 17) {
      greeting = "Good Afternoon";
    } else if (hours >= 17) {
      greeting = "Good Evening";
    }
    return greeting;
  };

  if (loading) {
    return (
      <header className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="animate-pulse">
          <div className="w-48 h-6 mb-2 bg-gray-700 rounded"></div>
          <div className="w-32 h-4 bg-gray-700 rounded"></div>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 flex items-center justify-between p-6 bg-black border-b border-gray-800 backdrop-blur-sm"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          {title || "Welcome Back"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.1 } }}
          className="text-gray-400"
        >
          {subtitle || getDefaultSubtitle()}
        </motion.p>
      </div>

      <div className="flex items-center space-x-4">
        {actionButton && actionButton}

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="relative">
              <img
                src="https://picsum.photos/500"
                alt="Profile"
                className="object-cover w-10 h-10 border-2 rounded-full border-lime-500"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  repeatDelay: 5,
                }}
                className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"
              ></motion.div>
            </div>
            <div className="hidden md:block">
              <h2 className="text-base font-medium">
                {user.first_name + " " + user.last_name}
              </h2>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </motion.div>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.2 }}
                className="absolute right-0 z-50 w-48 mt-2 overflow-hidden bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
              >
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-sm font-medium text-white">
                      {user.first_name + " " + user.last_name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                  <a
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-2 text-sm text-left text-red-400 transition-colors hover:bg-gray-700 hover:text-red-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
