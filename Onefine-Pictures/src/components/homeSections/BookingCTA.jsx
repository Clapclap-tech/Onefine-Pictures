import React from "react";

const BookingCTA = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* LEFT TEXT */}
        <div className="lg:w-1/2 text-gray-900">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Ready to <br /> book a session?
          </h2>

          <p className="mt-6 text-gray-600 max-w-md">
            Secure your preferred date and let us take care of the rest. Simple, personal, and thoughtfully handled.
          </p>

          {/* Floating buttons */}
          <div className="mt-10 flex gap-4">
            <button className="py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform active:scale-[0.97]">
              Book Now
            </button>

            <button className="py-3 px-6 border border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition transform active:scale-[0.97]">
              Track Session
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE STRIP */}
        <div className="lg:w-1/2 relative h-96 w-full">
          <div className="absolute -top-8 -right-8 w-full h-full bg-red-100/10 rounded-2xl shadow-2xl rotate-3 pointer-events-none"></div>
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            {/* Replace with Cloudinary image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold text-lg">
              Panoramic Image
            </div>

            {/* overlay caption */}
            <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-red-600 text-xs tracking-wide rounded shadow">
              Since 2024
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;
