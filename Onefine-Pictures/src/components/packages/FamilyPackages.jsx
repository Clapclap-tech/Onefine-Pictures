import React from 'react'
import { familyPackages } from "../../data/familyPackages";
import Button from '../ui/Button';

const FamilyPackages = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-12">
        Family Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {familyPackages.map(pkg => (
          <div
            key={pkg.id}
            className="rounded-2xl shadow-lg border bg-white overflow-hidden hover:scale-105 transition"
          >
            {/* Header */}
            <div className={`p-6 text-white bg-gradient-to-br ${pkg.color}`}>
              <h3 className="text-xl font-semibold text-shadow-lg">{pkg.title}</h3>
              <p className="text-3xl font-bold mt-2 text-shadow-lg">{pkg.price}</p>
            </div>

            {/* Content */}
            <div className="p-6 text-sm space-y-3">
              <p><strong>{pkg.frame}</strong></p>
              <p>{pkg.shots} shots</p>
              <p>Free softcopies</p>

              <div>
                <p className="font-semibold mt-4">Free Hardcopies:</p>
                <ul className="list-disc ml-5">
                  {pkg.hardcopies.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 text-center">
              <span className="inline-block px-4 py-2 text-xs font-semibold rounded-full bg-gray-100">
                Choose {pkg.bestShots} best shots
              </span>
            </div>
          </div>
        ))}
      </div>

        <div className="flex justify-center gap-4 mt-6">
            <Button
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full w-40"
            >
                View Gallery
            </Button>
                
            <Button
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full w-40"
            >
            Book Now
            </Button>
        </div>
    </section>
  )
}

export default FamilyPackages