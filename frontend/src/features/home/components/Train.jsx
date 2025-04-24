import React from "react";
import TrainCard from "./TrainCard";

export default function Train() {
  const trainCards = [
    {
      title: "Cardio Training",
      img: "IMG_8774.jpg",
    },
    {
      title: "Strength Build",
      img: "IMG_8777.jpg",
    },
    {
      title: "Fat Loss",
      img: "IMG_8768.jpg",
    },
  ];

  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <h2 className="text-5xl font-bold mb-2">
        Train Smarter
        <br />
        <span className="text-lime-400">Unleash Your Potential</span>
      </h2>
      <p className="text-gray-400 mb-24 mt-6 text-sm">
        Adaptive Training Plans to Fit Your Needs
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
        {trainCards.map((card, index) => (
          <TrainCard key={index} image={card.img} title={card.title} />
        ))}
      </div>
    </div>
  );
}
