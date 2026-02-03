import React from "react";
import Section from "../Section";
import Button from "../ui/Button";

const GalleryHeader = () => {
  return (
    <Section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-700">

      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-400 rounded-full opacity-30 blur-3xl animate-blob"></div>
      <div className="absolute top-1/4 right-16 w-48 h-48 bg-red-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-red-600/30 rounded-full blur-2xl animate-blob animation-delay-4000"></div>

      {/* Header Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Page Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Gallery
        </h1>

        {/* Brief Introduction */}
        <p className="mt-6 text-white/80 text-lg md:text-xl drop-shadow-md">
          Explore our photography portfolio capturing unforgettable moments,  
          from intimate portraits to grand events.
        </p>
      </div>

      {/* Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl pointer-events-none"></div>

    </Section>
  );
};

export default GalleryHeader;
