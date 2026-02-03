import React from "react";
import Button from "../ui/Button";
import Section from "../Section";

const packages = [
  {
    title: "Family",
    price: "Starting at ₱—",
    desc: "Capture the sacred and special moments of your family."
  },
  {
    title: "Graduation",
    price: "Starting at ₱—",
    desc: "Professional portraits that reflect your personality and style."
  },
  {
    title: "Event Coverage",
    price: "Starting at ₱—",
    desc: "Full coverage for weddings, birthdays, and special occasions."
  },
];

const Packages = () => {
  return (
    <Section className="relative bg-white overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-red-600 text-sm mb-4">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Our Services
          </h2>
          <div className="w-20 h-[2px] bg-black mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="group relative bg-white border border-black/10 rounded-2xl p-8
              transition-all duration-300 hover:-translate-y-2 hover:border-black"
            >

              {/* Red accent line */}
              <div className="absolute top-0 left-0 h-1 w-12 bg-red-600 rounded-tl-2xl rounded-br-2xl" />

              <h3 className="text-2xl font-semibold text-black mb-2">
                {pkg.title}
              </h3>

              <p className="text-red-600 font-medium mb-4">
                {pkg.price}
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {pkg.desc}
              </p>

              <Button className="relative overflow-hidden px-8 py-3 rounded-full bg-red-600 text-white group">
                <span className="relative z-10">
                  View Gallery
                </span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Packages;
