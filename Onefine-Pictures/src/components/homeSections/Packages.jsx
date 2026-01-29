import React from "react";
import Button from '../ui/Button'
import Section from '../Section'

const packages = [
  {
    title: "Family",
    price: "",
    desc: "Capture the sacred and special moments of your family."
  },
  {
    title: "Graduation",
    price: "",
    desc: "Professional portraits that reflect your personality and style."
  },
  {
    title: "Event Coverage",
    price: "",
    desc: "Full coverage for weddings, birthdays, or other special occasions."
  },
];

const Packages = () => {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Packages</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-red-600 font-bold mb-4">{pkg.price}</p>
              <p className="text-gray-600 mb-6">{pkg.desc}</p>
              <Button className="bg-red-600 text-white px-6 py-3">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Packages;
