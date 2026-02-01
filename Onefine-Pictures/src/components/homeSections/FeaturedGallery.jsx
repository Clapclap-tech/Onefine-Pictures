import React from "react";
import Section from "../Section";
import Button from "../ui/Button";

const images = [
  "/src/assets/gallery/g1.jpg",
  "/src/assets/gallery/g2.jpg",
  "/src/assets/gallery/g3.jpg",
  "/src/assets/gallery/g4.jpg",
];

const FeaturedGallery = () => {
  return (
    <Section className="relative bg-white overflow-hidden">
      
      {/* Top inner shadow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />

      {/* Bottom inner shadow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-red-600 text-sm mb-4">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Featured Works
          </h2>

          <div className="w-20 h-[2px] bg-black mx-auto" />
        </div>

        {/* Gallery */}
        <div className="columns-2 md:columns-4 gap-6 mb-16">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative mb-6 overflow-hidden rounded-2xl group"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Inner Shadow */}

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-[2px] w-10 bg-red-600 mb-2" />
                  <span className="text-white text-sm tracking-wide">
                    Studio Shot {i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
          <div className="text-center">
            <Button className="relative overflow-hidden px-8 py-3 rounded-full bg-red-600 text-white group">
              <span className="relative z-10">
                View Gallery
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </div>
        </div>
    </Section>
  );
};

export default FeaturedGallery;
