import React from "react";
import Section from '../Section'

const Location = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Location
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are based in Cebu, Philippines, and are available for events in and around the city.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Visit our studio or contact us to schedule a session. We’re happy to guide you and answer any questions!
          </p>

          <div className="mt-6">
            <p className="font-semibold text-gray-800">📍 Address:</p>
            <p className="text-gray-600">123 Photography St., Cebu City, Philippines</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-800">📞 Contact:</p>
            <p className="text-gray-600">+63 912 345 6789</p>
            <p className="text-gray-600">info@onefinepictures.com</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps?q=8W36%2BPJV%2C+Cebu+City%2C+6000+Cebu&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
};

export default Location;
