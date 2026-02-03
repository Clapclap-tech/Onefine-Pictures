import React, { useEffect, useRef } from "react";

const AutoScrollGallery = ({ images, speed = 30 }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let start;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      container.scrollLeft = (elapsed / speed) % (container.scrollWidth / 2);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-scroll hide-scrollbar w-full"
    >
      <div className="flex gap-6 w-max">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="w-[320px] h-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollGallery;
