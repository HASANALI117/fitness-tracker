import React from "react";

export default function TrainCard({ image, title }) {
  return (
    <div className="bg-gray-900/80 rounded-lg overflow-hidden">
      <div className="h-52 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
      </div>
    </div>
  );
}
