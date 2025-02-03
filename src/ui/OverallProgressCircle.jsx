import React from 'react';

function OverallProgressCircle({ progress }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          />
          <circle
            className="text-blue-500 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={251.2} // 2 * π * r
            strokeDashoffset={251.2 - (251.2 * progress) / 100}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-2xl font-bold text-blue-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default OverallProgressCircle;