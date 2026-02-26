import React from "react";
import { Camera, Users, Heart, Calendar } from "lucide-react";

const services = [
  { title: "Graduation", desc: "Celebrate academic milestones with timeless portraits.", icon: Camera, color: "bg-red-600" },
  { title: "Family", desc: "Warm, authentic moments captured with the people you love.", icon: Users, color: "bg-green-600" },
  { title: "Couples", desc: "Intimate storytelling for engagements and portraits.", icon: Heart, color: "bg-pink-600" },
  { title: "Events", desc: "Professional coverage for important occasions.", icon: Calendar, color: "bg-yellow-600" },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden ">

      {/* Large Camera Watermark */}
      <Camera className="absolute text-white/5 text-[20rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />

      {/* Subtle depth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Our Services
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-body">
            Thoughtfully crafted photography services for every milestone. We make each moment unforgettable.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 font-body">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="relative bg-gray-900 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                           hover:shadow-[0_25px_60px_rgba(255,255,255,0.05)] 
                           hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Icon Circle */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-6 ${service.color} text-white shadow-lg`}>
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="relative font-body overflow-hidden px-8 py-3 rounded-full bg-red-600 text-white font-semibold group shadow-lg hover:shadow-xl transition-transform active:scale-[0.97]">
            <span className="relative z-10">Explore All Services</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;