import React from "react";
import AutoSlidingImages from "../ui/AutoSlidingImage";

const BookingCTA = () => {
    const images = [
        "59",
        "59",
        "59",
        "59",
    ];

    return (
        <section className="relative bg-white py-20 lg:py-24 overflow-hidden">

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    px-6
                    lg:px-10
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                "
            >

                {/* LEFT CONTENT */}
                <div
                    className="
                        w-full
                        lg:w-[42%]
                        shrink-0
                        text-center
                        lg:text-left
                        mb-14
                        lg:mb-0
                        lg:pr-10
                    "
                >
                    <h2
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            font-light
                            leading-[1.05]
                            text-black
                            font-outfit
                            tracking-tight
                        "
                    >
                        Ready to
                        <br />
                        Book A Session?
                    </h2>

                    <p
                        className="
                            mt-6
                            text-sm
                            md:text-base
                            text-black
                            max-w-md
                            font-body
                            leading-relaxed
                            mx-auto
                            lg:mx-0
                            font-outfit
                        "
                    >
                        Secure your preferred date and let us take care of the
                        rest. Simple, personal, and thoughtfully handled.
                    </p>

                    <div className="mt-8">
                        <button
                            type="button"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                px-7
                                py-3
                                bg-red-600
                                hover:bg-red-700
                                text-white
                                text-xs
                                font-semibold
                                tracking-[0.2em]
                                rounded-md
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                active:scale-95
                                font-body
                            "
                        >
                            BOOK A SESSION
                        </button>
                    </div>
                </div>

                {/* IMAGE SLIDER */}
                <div
                    className="
                        relative
                        w-full
                        lg:w-[58%]
                        h-[280px]
                        sm:h-[320px]
                        lg:h-[350px]
                    "
                >
                    <AutoSlidingImages
                        images={images}
                        interval={5000}
                        imageWidth={180}
                        gap={16}
                    />
                </div>

            </div>
        </section>
    );
};

export default BookingCTA;