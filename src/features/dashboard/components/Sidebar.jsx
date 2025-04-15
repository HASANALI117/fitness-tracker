import React from "react";
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
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 min-h-screen bg-black border-r border-gray-800 fixed left-0 flex flex-col items-center py-6 space-y-8">
      <div className="p-2">
        <a href="/">
          <img src="logo.PNG" alt="Logo" className="w-10 h-10" />
        </a>
      </div>
      <div className="flex flex-col space-y-8 items-center">
        <div className="p-3 bg-lime-400 rounded-full text-black">
          <Home size={20} />
        </div>
        <div className="p-3 text-gray-500 hover:text-lime-400">
          <Activity size={20} />
        </div>
        <div className="p-3 text-gray-500 hover:text-lime-400">
          <PieChart size={20} />
        </div>
        <div className="p-3 text-gray-500 hover:text-lime-400">
          <Calendar size={20} />
        </div>
        <div className="p-3 text-gray-500 hover:text-lime-400">
          <User2 size={20} />
        </div>
      </div>
    </div>
  );
}
