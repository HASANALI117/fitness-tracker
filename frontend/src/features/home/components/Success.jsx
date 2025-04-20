import React from "react";
import SuccessCard from "./SuccessCard";

export default function Success() {
  const successCards = [
    {
      name: "James T",
      description:
        "I love the variety of workouts on FitnessZone. whether it's HIIT, Yoga, or Strength training, there's always something new to try. The progress tracking tools keep me motivated",
    },
    {
      name: "Sarah M",
      description:
        "After struggling with consistency for years, the personalized plans and supportive community here helped me lose 30 pounds in 6 months. The trainers really understand how to push you just the right amount.",
    },
    {
      name: "Ahmed K",
      description:
        "As someone who travels frequently for work, the mobile workouts have been a game-changer. I've built more muscle in 3 months here than I did in a year at my previous gym. Highly recommended!",
    },
  ];

  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <h2 className="text-5xl font-bold mb-2">
        Your Success
        <br />
        Stories,
        <span className="text-lime-400"> Our Inspiration</span>
      </h2>
      <p className="text-gray-400 mb-24 mt-6 text-sm">
        See How Our Members Have Transformed Their Lives
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {successCards.map((card, index) => (
          <SuccessCard
            key={index}
            name={card.name}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
