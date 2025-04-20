import React from "react";
import { ArrowRight } from "lucide-react";

export default function Trainer() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Trainer</h2>
        <div className="text-gray-400 text-sm">
          View all <ArrowRight className="h-4 w-4 inline" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="bg-gray-900/80 rounded-lg p-3 relative overflow-hidden w-40">
          <div className="font-medium">John Arnold</div>
          <div className="text-xs text-gray-400">Yoga expert</div>
          <img
            src="/api/placeholder/100/120"
            alt="Trainer"
            className="mt-6 w-full object-cover h-32"
          />
        </div>
        <div className="bg-gray-900/80 rounded-lg p-3 relative overflow-hidden w-40">
          <div className="font-medium">Adam Smith</div>
          <div className="text-xs text-gray-400">Fitness expert</div>
          <img
            src="/api/placeholder/100/120"
            alt="Trainer"
            className="mt-6 w-full object-cover h-32"
          />
        </div>
      </div>
    </div>
  );
}
