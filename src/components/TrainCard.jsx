import React from "react";

export default function TrainCard({ image, title }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <img src={image} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
      </div>
    </div>
  );
}
