import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const FlowGallery = ({ images }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleLeft = () => {
    setCenterIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleRight = () => {
    setCenterIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="relative w-full mt-60 flex items-center justify-center py-12">
      {/* Left Button */}
      <button
        onClick={handleLeft}
        className="absolute left-0 z-20 bg-white/70 rounded-full p-3 shadow hover:bg-white transition"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
      </button>

      {/* Carousel */}
      <div className="flex justify-center items-center gap-6 w-full overflow-hidden">
        {images.map((img, i) => {
          const offset = i - centerIndex; // distance from center
          const isCenter = offset === 0;

          const cardWidth = 320;
          const translateX = offset * (cardWidth + 30);
          const scale = isCenter ? 1.2 : 0.9;
          const rotateY = offset * 5;
          const zIndex = isCenter ? 10 : 1;

          return (
            <div
              key={i}
              className={`absolute transition-all duration-500 rounded-2xl overflow-hidden shadow-lg`}
              style={{
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                width: 320,       
                height: 400, 
              }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className={`w-full h-full object-cover transition-all duration-500
                  ${isCenter ? "filter-none" : "filter blur-[2px]"}`}
              />
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={handleRight}
        className="absolute right-0 z-20 bg-white/70 rounded-full p-3 shadow hover:bg-white transition"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default FlowGallery;
