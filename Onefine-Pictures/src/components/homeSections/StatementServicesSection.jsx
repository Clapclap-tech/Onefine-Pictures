import React from "react";

const StatementServicesSection = () => {
  return (
    <section className="relative bg-red-600 text-white overflow-hidden py-16 px-6 font-heading">

      {/* 🎨 Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-red-700 via-red-600 to-red-500"></div>

      {/* 🤍 Side Rectangle Depth Shape */}
      <div className="absolute right-[-80px] bottom-0 
                      w-[500px] h-[50px]
                      bg-white/30 
                      rotate-6"></div>

      <div className="absolute left-[-80px] top-0 
                      w-[500px] h-[50px] 
                      bg-white/25 
                      rotate-6"></div>

      {/* 🌑 Bottom Shadow Depth */}
      <div className="absolute inset-0 bg-gradient-to-t 
                      from-black/20 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-light leading-relaxed tracking-wide">
          From the moment you arrive at our studio until you leave,
          we ensure an experience that captures the very best in you.
        </h2>
      </div>

    </section>
  );
};

export default StatementServicesSection;
