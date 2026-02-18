import React from 'react';
import Button from '../ui/Button';
import Section from '../Section';

const Hero = () => {
  return (
    <Section fullScreen className="relative flex justify-center -mt-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6">
        <h1 className="text-5xl sm:text-6xl md:text-6xl leading-snug md:leading-tight text-shadow-2xstext-5xl font-extrabold text-shadow-lg">
          Capture Your <span className="text-red-500">Moments</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed text-shadow-lg">
          Timeless photography for life’s most meaningful moments. Emotional & Story-Driven
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-red-600 px-6 py-3 text-lg text-white w-full sm:w-auto">
            Book Now
          </Button>
          <Button className="bg-white text-red-600 px-6 py-3 text-lg w-full sm:w-auto">
            View Gallery
          </Button>
        </div>
      </div>

    </Section>
  );
};

export default Hero;
