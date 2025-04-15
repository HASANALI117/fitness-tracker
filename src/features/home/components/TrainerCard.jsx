import React from "react";

export default function TrainerCard({ image, name }) {
  return (
    <div className="text-center">
      <div className="rounded-full h-48 w-48 bg-gray-800 mx-auto mb-4 flex items-center justify-center">
        <img src={image} alt={name} />
      </div>
      <h3 className="font-bold mb-1">{name}</h3>
    </div>
  );
}
