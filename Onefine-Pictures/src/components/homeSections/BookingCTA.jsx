import React from "react";

const BookingCTA = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_auto_2fr] gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
            Ready to <br /> book a session?
          </h2>

          <p className="mt-6 text-gray-500 max-w-sm">
            Secure your preferred date and let us take care of the rest.
            Simple, personal, and thoughtfully handled.
          </p>

          <div className="mt-10 flex flex-col gap-3 w-44">
            <button className="py-3 bg-black text-white text-sm font-medium rounded-sm hover:bg-gray-800 transition active:scale-[0.97]">
              Book Now
            </button>

            <button className="py-3 border border-black text-black text-sm font-medium rounded-sm hover:bg-black hover:text-white transition active:scale-[0.97]">
              Track Session
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px h-72 bg-gray-200" />

        {/* RIGHT IMAGE STRIP */}
        <div className="relative h-[380px] overflow-hidden rounded-sm bg-gray-200">
          {/* Replace with Cloudinary */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Panoramic Image
          </div>

          {/* overlay caption */}
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-xs tracking-wide shadow">
            Since 2024
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;
