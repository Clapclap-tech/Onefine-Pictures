import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen -top-4 bg-black flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Subtle radial highlight behind subject */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="text-white font-bold leading-tight font-heading
                       text-4xl md:text-6xl lg:text-7xl tracking-tight">
          Capturing the{" "}
          <span className="text-red-600">Soul</span>
          <br />
          of the Moment.
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-body">
          High-end visual storytelling for those who value the art of timeless memories.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-body">
          <button className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-8 py-3 rounded-md text-sm tracking-widest">
            BOOK A SESSION
          </button>

          <button className="border border-white/30 hover:border-white transition duration-300 text-white px-8 py-3 rounded-md text-sm tracking-widest">
            VIEW GALLERY
          </button>
        </div>

      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
};

export default Hero;