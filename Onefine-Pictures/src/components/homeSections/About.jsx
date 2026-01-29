import React from 'react'
import Section from '../Section';
import Button from '../ui/Button';

const About = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            ABOUT
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
          </p>
          <p className="text-gray-600 leading-relaxed">
                      </p>

          <div className="mt-6">
            <Button className="bg-red-600 text-white px-6 py-3">
              Learn More
            </Button>
          </div>
        </div>

        <div>
          <img
            src="/src/assets/about.jpg"
            alt="About Me"
            className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </Section>
  )
}

export default About;
