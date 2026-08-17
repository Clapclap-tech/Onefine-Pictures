import React, { useEffect, useRef } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const AutoScrollGallery = ({ images, speed = 40 }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || !images?.length) return;

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      positionRef.current -= (speed * deltaTime) / 1000;

      const firstSetWidth = track.scrollWidth / 2;

      if (Math.abs(positionRef.current) >= firstSetWidth) {
        positionRef.current += firstSetWidth;
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images, speed]);

  if (!images?.length) return null;

  return (
    <div
      className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
      "
    >
      {/* Moving gallery */}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
      >
        {[...images, ...images].map((publicId, index) => {
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
              key={`${publicId}-${index}`}
              className="
                flex-shrink-0
                w-[220px]
                h-[300px]

                sm:w-[260px]
                sm:h-[340px]

                md:w-[300px]
                md:h-[380px]

                lg:w-[320px]
                lg:h-[400px]

                mr-1
                sm:mr-2
                md:mr-3

                overflow-hidden
              "
            >
              <AdvancedImage
                cldImg={img}
                className="
                  block
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AutoScrollGallery;