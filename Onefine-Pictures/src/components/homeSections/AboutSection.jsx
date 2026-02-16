import React from "react";
import Section from "../Section";
import Button from "../ui/Button";

const About = () => {
  return (
    <Section className="relative bg-white overflow-hidden">
      
      {/* 🔴 Background Depth Shape */}
      <div className="absolute -left-40 -top-40 w-[500px] h-[500px] 
                      bg-red-600 opacity-10 rotate-45 
                      rounded-3xl blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative group">
          {/* Black frame */}
          <div className="absolute inset-0 border border-black rounded-2xl translate-x-4 translate-y-4 opacity-30 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
          
          <img
            src="/src/assets/about.jpg"
            alt="About the Studio"
            className="relative rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-red-600 rounded-bl-2xl transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 pointer-events-none"/>
        </div>

        {/* Text */}
        <div>
          <p className="uppercase tracking-[0.35em] text-red-600 text-sm mb-4">
            About The Studio
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Creating Visual Stories
          </h2>

          <div className="w-20 h-[2px] bg-black mb-6" />

          <p className="text-gray-700 leading-relaxed mb-4">
            We are a creative studio dedicated to capturing moments with clarity,
            emotion, and intention. Our work focuses on clean composition,
            authentic storytelling, and timeless visuals.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether in-studio or on location, we approach every project with a
            balance of creativity and technical precision—turning ideas into
            powerful imagery.
          </p>

          <div className="mt-10">
            <Button className="relative overflow-hidden px-8 py-3 rounded-full bg-red-600 text-white group">
              <span className="relative z-10">
                Learn More
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default About;
