import React, { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const AutoSlidingImages = ({
    images = [],
    interval = 3000,

    imageWidth = 180,
    imageHeight = 240,

    activeWidth = 300,
    activeHeight = 400,

    gap = 30,
    duration = 1000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(true);

    if (!images.length) return null;

    // Duplicate the images so the carousel can loop
    const infiniteImages = [...images, ...images];

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    useEffect(() => {
        if (currentIndex >= images.length) {
            const timeout = setTimeout(() => {
                setTransition(false);
                setCurrentIndex(0);
            }, duration);

            return () => clearTimeout(timeout);
        }

        if (!transition) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true);
                });
            });
        }
    }, [currentIndex, images.length, duration, transition]);

    const step = imageWidth + gap;

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="absolute left-0 top-1/2 flex items-center"
                style={{
                    gap: `${gap}px`,

                    transform: `
                        translateY(-50%)
                        translateX(-${currentIndex * step}px)
                    `,

                    transition: transition
                        ? `transform ${duration}ms ease-in-out`
                        : "none",
                }}
            >
                {infiniteImages.map((publicId, index) => {
                    const image = cld
                        .image(publicId)
                        .resize(
                            fill()
                                .width(640)
                                .height(800)
                                .gravity("auto")
                        )
                        .quality(auto())
                        .delivery(format("auto"));

                    const realIndex = index % images.length;
                    const isActive = realIndex === currentIndex % images.length;

                    return (
                        <div
                            key={`${publicId}-${index}`}
                            className="
                                relative
                                shrink-0
                                overflow-hidden
                                rounded-xl
                                transition-all
                                ease-in-out
                            "
                            style={{
                                width: isActive
                                    ? `${activeWidth}px`
                                    : `${imageWidth}px`,

                                height: isActive
                                    ? `${activeHeight}px`
                                    : `${imageHeight}px`,

                                transitionDuration: `${duration}ms`,

                                zIndex: isActive ? 10 : 1,
                            }}
                        >
                            <AdvancedImage
                                cldImg={image}
                                alt={`Photography ${realIndex + 1}`}
                                className="block w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AutoSlidingImages;