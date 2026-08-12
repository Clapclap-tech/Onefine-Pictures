import { ArrowRight } from "lucide-react";

const ExperienceCard = ({
    image,
    icon: Icon,
    title,
    description,
    emoji,
}) => {
    return (
        <div className="relative aspect-square w-full overflow-hidden group">
            
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                "
            />

            {/* Red Gradient */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#d90000]
                    via-[#d90000]/50
                    to-transparent
                "
            />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">

                {/* Icon */}
                <Icon
                    size={48}
                    strokeWidth={2}
                    className="text-white mb-7"
                />

                {/* Title */}
                <h2 className="text-white text-3xl font-outfit font-semibold tracking-wide">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-white text-xl font-outfit font-normal tracking-wide leading-tight max-w-[400px] mt-5">
                    {description}
                </p>
            </div>

            {/* Emoji */}
            {emoji && (
                <div
                    className="
                        absolute
                        left-1/2
                        top-[58%]
                        -translate-x-1/2
                        -translate-y-1/2
                        w-16 h-16
                        rounded-full
                        bg-sky-500
                        flex items-center justify-center
                        text-3xl
                    "
                >
                    {emoji}
                </div>
            )}

            {/* Arrow */}
            <button
                className="
                    absolute
                    right-8
                    bottom-8
                    w-12 h-12
                    rounded-full
                    border-2 border-white
                    flex items-center justify-center
                    text-white
                    transition-all duration-300
                    group-hover:bg-white
                    group-hover:text-[#d90000]
                "
            >
                <ArrowRight size={28} strokeWidth={1.8} />
            </button>
        </div>
    );
};

export default ExperienceCard;