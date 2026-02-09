import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const PictureGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((publicId, i) => {
        const img = cld
          .image(publicId)
          .resize(fill().width(500).height(600))
          .quality(auto())
          .delivery(format("auto"));

        return (
          <div
            key={i}
            className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <AdvancedImage
              cldImg={img}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PictureGrid;
