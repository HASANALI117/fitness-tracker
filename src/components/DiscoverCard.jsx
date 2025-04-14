import React from "react";

export default function DiscoverCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900/80 p-6 rounded-3xl h-full">
      <div className="flex items-center mb-4">
        <div className="text-lime-400 rounded-full bg-black/60 p-2.5">
          {icon}
        </div>
        <h3 className="font-semibold ml-3 text-xl">{title}</h3>
      </div>

      <p className="text-sm text-gray-400 mb-12">{description}</p>

      <button className="bg-lime-400/90 text-black text-sm font-medium py-2 px-4 rounded-full hover:bg-lime-500 transition-colors">
        See Plan
      </button>
    </div>
  );
}
