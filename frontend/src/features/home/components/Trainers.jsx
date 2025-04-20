import React from "react";
import TrainerCard from "./TrainerCard";

export default function Trainers() {
  const trainerCards = [
    {
      name: "Cardio Training",
      img: "Blake Hunter",
    },
    {
      name: "Strength Build",
      img: "Liam Crossfit",
    },
    {
      name: "Fat Loss",
      img: "Logan Torque",
    },
  ];
  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <h2 className="text-5xl font-bold mb-2">
        Your Fitness
        <br />
        <span className="text-lime-400">Goals, Their Expertise</span>
      </h2>
      <p className="text-gray-400 mb-24 mt-6 text-sm">
        Our Team Of Certified Trainers Brings Unparalleled Expertise To Help You
        Achieve Your Fitness Goals
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {trainerCards.map((card, index) => (
          <TrainerCard key={index} image={card.img} name={card.name} />
        ))}
      </div>
    </div>
  );
}
