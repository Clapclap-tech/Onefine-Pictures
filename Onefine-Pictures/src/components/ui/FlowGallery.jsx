import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const FlowGallery = ({ images }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleLeft = () => {
    setCenterIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleRight = () => {
    setCenterIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="relative w-full z-10 mt-20 flex items-center justify-center py-100">
      {/* Left Button */}
      <button
        onClick={handleLeft}
        className="absolute left-0 z-20"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      {/* Carousel */}
      <div className="flex justify-center items-center gap-6 w-full overflow-hidden ">
        {images.map((publicId, i) => {
          const offset = i - centerIndex;
          const isCenter = offset === 0;

          const cardWidth = 320;
          const translateX = offset * (cardWidth + 30);
          const scale = isCenter ? 1.2 : 0.9;
          const rotateY = offset * 5;
          const zIndex = isCenter ? 10 : 1;

          // Cloudinary image
          const img = cld
            .image(publicId)
            .resize(fill().width(640).height(800).gravity("auto"))
            .quality(auto())
            .delivery(format("auto"));

          return (
            <div
              key={i}
              className={`absolute transition-all duration-500 rounded-2xl overflow-hidden
                ${isCenter
                  ? "shadow-[0_50px_500px_rgba(0,0,0,1)]"
                  : "shadow-md"}
              `}

              style={{
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                width: 480,
                height: 600,
              }}
            >
              <AdvancedImage
                cldImg={img}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isCenter ? "filter-none" : "filter blur-[2px] "
                }`}           
              />
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                isCenter ? "bg-black/20" : "bg-black/50"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={handleRight}
        className="absolute right-0 z-10"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default FlowGallery;