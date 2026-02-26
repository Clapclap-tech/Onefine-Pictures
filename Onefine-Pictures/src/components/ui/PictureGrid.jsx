import React, { useState, useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const PictureGrid = ({ images, stagger }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const closeModal = () => setSelectedIndex(null);

  const showNext = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("next");

    setTimeout(() => {
      setSelectedIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setAnimating(false);
    }, 200);
  };

  const showPrev = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("prev");

    setTimeout(() => {
      setSelectedIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setAnimating(false);
    }, 200);
  };

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, animating]);

  // Preload next & previous images (keeps lazy for grid)
  useEffect(() => {
    if (selectedIndex === null) return;

    const nextIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;

    [images[nextIndex], images[prevIndex]].forEach((id) => {
      const preloadImg = new Image();
      preloadImg.src = cld
        .image(id)
        .resize(fill().width(1600).gravity("auto"))
        .quality(auto())
        .delivery(format("auto"))
        .toURL();
    });
  }, [selectedIndex]);

  return (
    <>
      {/* GRID (Lazy Still Works Here) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {images.map((publicId, i) => {
          const img = cld
            .image(publicId)
            .resize(fill().gravity("auto"))
            .quality(auto())
            .delivery(format("auto"));

          return (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative overflow-hidden cursor-pointer
                          border border-white/20
                          hover:border-red-700
                          transition-all duration-500 transform opacity-0 translate-y-4`}
              style={{
                animation: `fadeIn 0.5s ease-out forwards`,
                animationDelay: stagger ? `${i * 80}ms` : "0ms",
              }}
            >
              <AdvancedImage
                cldImg={img}
                className="w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]
                           object-cover hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition duration-500" />
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-6 text-white text-4xl hover:text-red-600 transition"
          >
            ‹
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] overflow-hidden"
          >
            <AdvancedImage
              key={selectedIndex}
              cldImg={cld
                .image(images[selectedIndex])
                .resize(fill().width(1600).gravity("auto")) // Optimized
                .quality(auto())
                .delivery(format("auto"))}
              className={`max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl
                ${
                  direction === "next"
                    ? "animate-slideLeft"
                    : direction === "prev"
                    ? "animate-slideRight"
                    : ""
                }
              `}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-6 text-white text-4xl hover:text-red-600 transition"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default PictureGrid;