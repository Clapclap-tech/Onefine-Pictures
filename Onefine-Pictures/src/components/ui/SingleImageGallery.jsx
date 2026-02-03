import React, { useState } from "react";

const SingleImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative ml-20 w-125 max-w-xl aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-black">

      {/* Image */}
      <img
        key={index}
        src={images[index]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow transition"
      >
        ›
      </button>

      {/* Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleImageGallery;
