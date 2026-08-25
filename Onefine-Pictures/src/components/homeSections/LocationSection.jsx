import React from "react";
import Section from '../Section';
import { Camera } from "lucide-react";

const Location = () => {
  return (
    <Section className="relative bg-white text-black font-outfit overflow-hidden py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text */}
        <div className="text-center md:text-left p-6 md:p-10">
          <h2 className="text-4xl font-bold mb-4 text-red-600 font-heading">
            Our Location
          </h2>
          <p className="leading-relaxed mb-4 font-body">
            We are based in Cebu, Philippines, and are available for events in and around the city.
          </p>
          <p className=" leading-relaxed font-body">
            Visit our studio or contact us to schedule a session. We’re happy to guide you and answer any questions!
          </p>

          <div className="mt-6 font-body">
            <p className="font-semibold text-white">📍 Address:</p>
            <p className="">123 Photography St., Cebu City, Philippines</p>
          </div>

          <div className="mt-4 font-body">
            <p className="font-semibold text-white">📞 Contact:</p>
            <p className=">+63 912 345 6789</p>
            <p className=">info@onefinepictures.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="relative">
          {/* Red depth shape behind map */}
          <div className="absolute -top-6 -left-6 w-ful h-full rounded-xl bg-red-600/10 -z-10 rotate-3"></div>

          <div className="rounded-xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps?q=8W36%2BPJV%2C+Cebu+City%2C+6000+Cebu&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Location;