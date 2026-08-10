import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="flex min-h-screen top-0 bg-black flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/HeroNew.png')",
        }}
      />

      {/* Subtle radial highlight behind subject */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 -mt-50 font-outfit font-thin">

        <h1 className="text-white font-normal leading-tight font-outfit
                       text-4xl md:text-6xl lg:text-7xl tracking-wider">
          Capturing the{" "}
          <span className="text-red-600">Soul</span>
          <br />
          of the Moment.
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-outfit font-medium ">
          <p>High-end visual storytelling for those</p> 
          <p>who value the art of timeless memories.</p>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-body">
          <button className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-8 py-3 rounded-md text-sm tracking-widest font-normal">
            BOOK A SESSION
          </button>

          <button className="border border-white hover:border-white transition duration-300 text-white px-8 py-3 rounded-md text-sm tracking-widest font-normal">
            VIEW GALLERY
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;