import { ArrowRight } from "lucide-react";

const ExperienceCard = ({
    image,
    icon: Icon,
    title,
    description,
    emoji,
}) => {
    return (
        <div className="relative w-full aspect-square overflow-hidden group">
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
            <div
                className="
                    absolute inset-0
                    p-5
                    flex flex-col
                    justify-end
                "
            >
                {/* Icon */}
                <Icon
                    size={32}
                    strokeWidth={2}
                    className="text-white mb-4"
                />

                {/* Title */}
                <h2
                    className="
                        text-white
                        text-xl
                        font-outfit
                        font-semibold
                        tracking-wide
                    "
                >
                    {title}
                </h2>

                {/* Description */}
                <p
                    className="
                        text-white
                        text-sm
                        font-outfit
                        font-normal
                        tracking-wide
                        leading-tight
                        max-w-[230px]
                        mt-3
                    "
                >
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
                        w-10
                        h-10
                        rounded-full
                        bg-sky-500
                        flex
                        items-center
                        justify-center
                        text-xl
                    "
                >
                    {emoji}
                </div>
            )}

            {/* Arrow */}
            <button
                type="button"
                className="
                    absolute
                    right-5
                    bottom-5
                    w-9
                    h-9
                    rounded-full
                    border-2
                    border-white
                    flex
                    items-center
                    justify-center
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-[#d90000]
                "
            >
                <ArrowRight
                    size={21}
                    strokeWidth={1.8}
                />
            </button>
        </div>
    );
};

export default ExperienceCard;