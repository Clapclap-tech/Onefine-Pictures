import React from "react";
import { Camera, Users, Heart, Calendar } from "lucide-react";

const services = [
  {
    title: "Graduation",
    desc: "Celebrate academic milestones with timeless portraits.",
    icon: Camera,
  },
  {
    title: "Family",
    desc: "Warm, authentic moments captured with the people you love.",
    icon: Users,
  },
  {
    title: "Couples",
    desc: "Intimate storytelling for engagements and portraits.",
    icon: Heart,
  },
  {
    title: "Events",
    desc: "Professional coverage for important occasions.",
    icon: Calendar,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Thoughtfully crafted photography services for every milestone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <button
                key={i}
                className="
                  group
                  text-left
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
                  active:translate-y-0
                  active:scale-[0.98]
                "
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600 mb-6">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
