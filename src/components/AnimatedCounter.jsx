import { useState, useEffect } from "react";

// Counter component for animating numbers
const AnimatedCounter = ({ end, duration = 1000, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
