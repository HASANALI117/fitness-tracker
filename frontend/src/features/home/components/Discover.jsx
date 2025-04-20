import DiscoverCard from "./DiscoverCard";
import { HeartPulse, BicepsFlexed, DropletOff, Flame } from "lucide-react";

export default function Discover() {
  const dicoverCards = [
    {
      icon: <HeartPulse />,
      title: "Cardio Training",
      description:
        "Boost endurance and heart health with high-energy cardio sessionsdesigned to keep you moving.",
    },
    {
      icon: <BicepsFlexed />,
      title: "Strength Build",
      description:
        "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    },
    {
      icon: <DropletOff />,
      title: "Fat Loss",
      description:
        "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    },
    {
      icon: <Flame />,
      title: "HIIT Workouts",
      description:
        "Maximize calorie burn and improve fitness with short, intense high-intensity interval training sessions.",
    },
  ];

  return (
    <div className="container mt-24 mx-auto py-12 px-6 text-center">
      <h2 className="text-5xl font-bold mb-2">
        Discover <br />
        <span className="text-lime-400">What Sets Us Apart</span>
      </h2>
      <p className="text-gray-400 mb-24 mt-6 text-sm">
        We Deliver A Fitness Experience That's Truly One-Of-A-Kind. Explore How
        <br />
        We Help You Achieve Your Goals Faster And Smarter.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        {dicoverCards.map((card, index) => (
          <DiscoverCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
