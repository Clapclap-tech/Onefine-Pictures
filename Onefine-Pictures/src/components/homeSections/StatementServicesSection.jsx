import React from "react";

const StatementServicesSection = () => {
  return (
    <section className="relative bg-[#C80006] text-white overflow-hidden py-16 px-6 font--outfit">

      {/* 🎨 Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-red-700 via-red-600 to-red-500"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-light leading-relaxed tracking-wide">
          The 
          <span className="font-bold"> STUDIO </span>
           with a 
           <span className="font-bold"> HEART </span>
           , <br /> For the 
           <span className="font-bold"> Graduates </span>
            & for the  
            <span className="font-bold"> Family</span>.
        </h2>
      </div>

    </section>
  );
};

export default StatementServicesSection;
