import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const PictureGrid = ({ images, stagger }) => {
  return (
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
            className={`relative overflow-hidden rounded-3xl
                        shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                        hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
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
  );
};

export default PictureGrid;
