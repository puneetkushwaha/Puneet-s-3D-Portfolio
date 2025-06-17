import React, { useState } from "react";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball"; // ✅ Assuming your file is Ball.jsx

const Tech = () => {
  const [tooltipTexts, setTooltipTexts] = useState({});

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 mb-2 relative"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(index, technology.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <BallCanvas icon={technology.icon} />
          </div>

          {tooltipTexts[index] && (
            <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-200 opacity-100">
              {tooltipTexts[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tech;
