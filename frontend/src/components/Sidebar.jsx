import { NavLink, useLocation } from "react-router-dom";
import { User2, Home, Calendar, Apple, Info, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/workout", icon: Calendar, label: "Workouts" },
    { path: "/diet", icon: Apple, label: "Nutrition" },
    { path: "/profile", icon: User2, label: "Profile" },
    { path: "/about", icon: Info, label: "About" },
  ];

  return (
    <div className="fixed left-0 z-50 flex flex-col items-center w-20 min-h-screen py-6 bg-black border-r border-gray-800 backdrop-blur-sm">
      <div className="p-2 mb-8">
        <NavLink to="/">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            src="logo-2.PNG"
            alt="Logo"
            className="w-10 h-10"
          />
        </NavLink>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item) => (
          <div key={item.path}>
            <NavLink to={item.path} className="relative group">
              {({ isActive }) => (
                <>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-lime-400 text-black shadow-lg shadow-lime-400/20"
                        : "text-gray-500 hover:text-lime-400"
                    }`}
                  >
                    <item.icon size={20} />
                  </motion.div>

                  {/* Tooltip */}
                  <div className="absolute invisible px-2 py-1 ml-4 text-xs text-white transition-all duration-300 bg-gray-800 rounded opacity-0 left-full group-hover:opacity-100 group-hover:visible whitespace-nowrap">
                    {item.label}
                  </div>
                </>
              )}
            </NavLink>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <NavLink to="/settings" className="relative group">
          {({ isActive }) => (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-lime-400 text-black shadow-lg shadow-lime-400/20"
                    : "text-gray-500 hover:text-lime-400"
                }`}
              >
                <Settings size={20} />
              </motion.div>

              {/* Tooltip */}
              <div className="absolute invisible px-2 py-1 ml-4 text-xs text-white transition-all duration-300 bg-gray-800 rounded opacity-0 left-full group-hover:opacity-100 group-hover:visible whitespace-nowrap">
                Settings
              </div>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}
