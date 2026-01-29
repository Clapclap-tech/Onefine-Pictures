import React from 'react'
import Section from '../Section'
import Button from '../ui/Button'


const images = [
  "/src/assets/gallery/g1.jpg",
  "/src/assets/gallery/g2.jpg",
  "/src/assets/gallery/g3.jpg",
  "/src/assets/gallery/g4.jpg",
];

const FeaturedGallery = () => {
  return (
    <Section className="bg-red-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-12">
          GALLERY
        </h2>

      <div className="columns-2 md:columns-4 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="mb-4 rounded-lg w-full object-cover"
          />
        ))}
      </div>

        <Button className="bg-white text-black px-6 py-3">
          View Full Gallery
        </Button>
      </div>
    </Section>
  )
}

export default FeaturedGallery;