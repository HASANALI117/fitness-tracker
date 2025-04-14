import React from "react";

export default function InspirationCard({ icon, title }) {
  return (
    <div className="flex p-4">
      <div className="text-lime-400 mx-2 border rounded-full p-2">{icon}</div>
      <h3 className="font-semibold mx-2 p-2">{title}</h3>
    </div>
  );
}
