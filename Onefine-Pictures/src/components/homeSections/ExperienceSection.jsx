import {
    GraduationCap,
    UsersRound,
    Heart,
    CalendarDays,
} from "lucide-react";

import ExperienceCard from "../ui/ExperienceCard";

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

const ExperienceSection = () => {
    return (
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
    );
};

export default ExperienceSection;