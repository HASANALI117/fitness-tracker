import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart,
  LineChart,
  Activity,
  Dumbbell,
  User2,
  Home,
  PieChart,
  Heart,
  CircleUser,
  Calendar,
  ArrowRight,
  Apple,
  Info,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-20 min-h-screen bg-black border-r border-gray-800 fixed left-0 flex flex-col items-center py-6 space-y-8">
      <div className="p-2">
        <NavLink to="/">
          <img src="logo-2.PNG" alt="Logo" className="w-10 h-10" />
        </NavLink>
      </div>
      <div className="flex flex-col space-y-8 items-center">
        <NavLink to="/dashboard">
          <div
            className={`p-3 rounded-full transition-colors ${
              isActive("/dashboard")
                ? "bg-lime-400 text-black"
                : "text-gray-500 hover:text-lime-400"
            }`}
          >
            <Home size={20} />
          </div>
        </NavLink>

        <NavLink to="/workout">
          <div
            className={`p-3 rounded-full transition-colors ${
              isActive("/workout")
                ? "bg-lime-400 text-black"
                : "text-gray-500 hover:text-lime-400"
            }`}
          >
            <Calendar size={20} />
          </div>
        </NavLink>

        <NavLink to="/diet">
          <div
            className={`p-3 rounded-full transition-colors ${
              isActive("/diet")
                ? "bg-lime-400 text-black"
                : "text-gray-500 hover:text-lime-400"
            }`}
          >
            <Apple size={20} />
          </div>
        </NavLink>

        <NavLink to="/profile">
          <div
            className={`p-3 rounded-full transition-colors ${
              isActive("/profile")
                ? "bg-lime-400 text-black"
                : "text-gray-500 hover:text-lime-400"
            }`}
          >
            <User2 size={20} />
          </div>
        </NavLink>

        <NavLink to="/about">
          <div
            className={`p-3 rounded-full transition-colors ${
              isActive("/about")
                ? "bg-lime-400 text-black"
                : "text-gray-500 hover:text-lime-400"
            }`}
          >
            <Info size={20} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
