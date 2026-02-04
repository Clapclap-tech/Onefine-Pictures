import React from 'react'
import Button from '../ui/Button'
import Section from '../Section'

const Hero = () => {
  return (
    <Section fullScreen className="flex justify-center -mt-20">

      <div className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/hero.jpg')",
      }}
      ></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Capture Your <span className="text-red-500">Moments</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-500">
          Timeless photography for life’s most meaningful moments. Emotional & Story-Driven
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-red-600 px-6 py-3 text-lg text-white">
            Book Now
          </Button>
          <Button className="bg-white text-red-600 *:backdrop-blur px-6 py-3 text-lg ">
            View Gallery
          </Button>
        </div>
      </div>

    </Section>
  )
}

export default Hero