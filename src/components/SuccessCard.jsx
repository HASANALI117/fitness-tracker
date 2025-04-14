import React from "react";

export default function SuccessCard({ name, description }) {
  return (
    <div className="bg-gray-900 rounded-3xl p-6">
      <p className="text-gray-400 mb-4">"{description}"</p>
      <h3 className="font-bold">- {name}.</h3>
    </div>
  );
}
