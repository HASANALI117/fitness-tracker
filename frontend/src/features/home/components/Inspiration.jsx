import { Dumbbell, Apple, Crown } from "lucide-react";
import InspirationCard from "./InspirationCard";

export default function Inspiration() {
  const inspirationCards = [
    { title: "Nutrition Guidance", icon: <Apple /> },
    { title: "Expert Trainers", icon: <Dumbbell /> },
    { title: "Progress Tracking", icon: <Dumbbell /> },
    { title: "Premium Membership", icon: <Crown /> },
    { title: "Community Support", icon: <Dumbbell /> },
    { title: "Next-Level Fitness Space", icon: <Dumbbell /> },
  ];

  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <h2 className="text-5xl font-bold mb-2">
        Inspired to <br />
        <span className="text-lime-400">Inspire Your Best Self</span>
      </h2>
      <p className="text-gray-400 mb-24 mt-6 text-sm">
        We're Your Partner In Achieving A Healthier, Stronger, And More
        Confident You.
      </p>

      <div className="rounded-3xl p-8 bg-gray-900/80 relative overflow-hidden">
        {/* Image positioned behind text, on the right side, flipped horizontally */}
        <img
          src="IMG_8803.png"
          alt=""
          className="absolute top-0 right-0 h-full w-auto z-0 transform -scale-x-100"
        />

        {/* Cards with higher z-index to appear above the image */}
        <div className="relative z-10 col-span-2 grid md:grid-cols-2 gap-4">
          {inspirationCards.map((card, index) => (
            <InspirationCard icon={card.icon} title={card.title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
