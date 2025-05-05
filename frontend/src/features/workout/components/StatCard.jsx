import React from "react";

const StatCard = ({ title, value, icon, subtext, progressBar }) => {
  return (
    <div className="bg-gray-900/80 p-6 rounded-lg">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {progressBar !== undefined && (
        <div className="mt-4 bg-gray-800/50 rounded-full h-2">
          <div
            className="bg-lime-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
      )}

      {subtext && <p className="text-sm text-gray-400 mt-4">{subtext}</p>}
    </div>
  );
};

export default StatCard;
