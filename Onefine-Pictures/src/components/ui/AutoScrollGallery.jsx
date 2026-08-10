import React, { useEffect, useRef } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const AutoScrollGallery = ({ images, speed = 30 }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;

    const animate = () => {
      container.scrollLeft += 0.5;

      // Reset when we reach the first set of images
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex w-full overflow-hidden"
    >
      {[...images, ...images].map((publicId, i) => {
        const img = cld
          .image(publicId)
          .resize(
            fill()
              .width(640)
              .height(800)
              .gravity("auto")
          )
          .quality(auto())
          .delivery(format("auto"));

        return (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] h-[400px] mr-6 overflow-hidden rounded-2xl"
          >
            <AdvancedImage
              cldImg={img}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default AutoScrollGallery;
