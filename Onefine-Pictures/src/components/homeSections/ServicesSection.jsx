import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

import {
    GraduationCap,
    UsersRound,
    Heart,
    CalendarDays,
} from "lucide-react";

const experiences = [
    {
        image: "/images/graduation.jpg",
        icon: GraduationCap,
        title: "Graduation",
        description:
            "Celebrate academic milestones with timeless portraits.",
    },
    {
        image: "/images/family.jpg",
        icon: UsersRound,
        title: "Family",
        description:
            "Warm, authentic moments captured with the people you love.",
    },
    {
        image: "/images/couples.jpg",
        icon: Heart,
        title: "Couples",
        description:
            "Intimate storytelling for engagements and portraits",
    },
    {
        image: "/images/events.jpg",
        icon: CalendarDays,
        title: "Events",
        description:
            "Professional coverage for important occasions",
    },
];

const ServicesSection = () => {
  return (
    <section className="relative py-10 pb-10 mb-20 bg-white overflow-hidden ">

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold text-[#BD0B02] font-outfit tracking-wider">
            Our Services
          </h2>
          <p className="mt-8 text-black max-w-2xl mx-auto font-outfit text-lg tracking-wider">
            Thoughtfully crafted photography services for every <br /> milestone. We make each moment unforgettable.
          </p>
        </div>

        <section className="w-full px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.title}
                        {...experience}
                    />
                ))}
            </div>
        </section>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="relative font-body overflow-hidden px-8 py-3 rounded-xl border-1 border-black bg-white text-black font-semibold group shadow-lg hover:shadow-xl transition-transform active:scale-[0.97]">
            <span className="relative z-10">Explore All Services</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;