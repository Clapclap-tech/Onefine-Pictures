import React from "react";
import { Camera } from "lucide-react";

const BookingCTA = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">


      {/* Gray divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[1px] bg-gray-700" />

      {/* Camera watermark */}
      <Camera className="absolute text-white/5 text-[20rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* LEFT TEXT */}
        <div className="lg:w-1/2 text-white">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight font-heading">
            Ready to <br /> book a session?
          </h2>

          <p className="mt-6 text-gray-300 max-w-md font-body">
            Secure your preferred date and let us take care of the rest. Simple, personal, and thoughtfully handled.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform active:scale-[0.97] font-body">
              Book Now
            </button>

            <button className="py-3 px-6 border border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition transform active:scale-[0.97] font-body">
              Track Session
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE STRIP */}
        <div className="lg:w-1/2 relative h-96 w-full">
          {/* Depth rectangle behind */}
          <div className="absolute -top-8 -right-8 w-full h-full bg-white/5 rounded-2xl shadow-2xl rotate-3 pointer-events-none"></div>

          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Placeholder for Cloudinary image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold text-lg">
              Panoramic Image
            </div>

            {/* overlay caption */}
            <div className="absolute bottom-6 left-6 bg-red-600 text-white px-4 py-2 text-xs tracking-wide rounded shadow">
              Since 2024
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;