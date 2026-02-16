import React from "react";
import { Camera, Users, Heart, Calendar } from "lucide-react";

const services = [
  {
    title: "Graduation",
    desc: "Celebrate academic milestones with timeless portraits.",
    icon: Camera,
    bg: "bg-red-50",
  },
  {
    title: "Family",
    desc: "Warm, authentic moments captured with the people you love.",
    icon: Users,
    bg: "bg-green-50",
  },
  {
    title: "Couples",
    desc: "Intimate storytelling for engagements and portraits.",
    icon: Heart,
    bg: "bg-pink-50",
  },
  {
    title: "Events",
    desc: "Professional coverage for important occasions.",
    icon: Calendar,
    bg: "bg-yellow-50",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      
      {/* 🔴 Background Depth Shape */}
      <div className="absolute -left-40 -top-40 w-[500px] h-[500px] 
                      bg-red-600 opacity-10 rotate-45 
                      rounded-3xl blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thoughtfully crafted photography services for every milestone. We make each moment unforgettable.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="
                  relative
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-2xl
                  hover:-translate-y-3 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]
                  transition-transform duration-500
                  overflow-hidden
                  cursor-pointer
                "
              >
                {/* Colored Accent Circle */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 ${service.bg} rounded-full rotate-12 pointer-events-none`}
                />
                
                <div className="relative flex flex-col items-start">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white mb-6 shadow-lg">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional CTA Button at the bottom */}
        <div className="mt-16 flex justify-center relative z-10">
          <button className="relative overflow-hidden px-8 py-3 rounded-full bg-red-600 text-white font-semibold group shadow-lg hover:shadow-xl transition-transform active:scale-[0.97]">
            <span className="relative z-10">Explore All Services</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
