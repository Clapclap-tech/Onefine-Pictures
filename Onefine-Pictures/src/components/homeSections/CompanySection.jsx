import React from "react";

const CompanySection = () => {
    return (
        <section className="w-full mb-8 pb-20">
            <div className="relative mx-auto">
                <h2 className="text-5xl md:text-6xl font-semibold text-[#BD0B02] font-outfit tracking-wider text-center mb-10">
                    The Company
                </h2>

                <img
                    src="CompanySection.png"
                    alt="Company Picture"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default CompanySection;