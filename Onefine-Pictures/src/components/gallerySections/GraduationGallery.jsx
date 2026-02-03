import React from 'react'
import Section from '../Section'
import SingleImageGallery from '../ui/SingleImageGallery'
import PictureGridHorizontal from '../ui/PictureGridHorizontal'
import AutoScrollGallery from '../ui/AutoScrollGallery'

const GraduationGallery = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Text Content */}
        <div className="space-y-8">
          {/* Eyebrow */}
          <span className="uppercase tracking-widest text-sm text-red-600 font-medium">
            Graduation Collection
          </span>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Creating Visual <br className="hidden sm:block" />
            Stories That Last
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-lg">
            We capture graduation moments with a focus on emotion, detail,
            and authenticity. Each photograph is carefully composed to
            preserve milestones that deserve to be remembered.
          </p>

          {/* Details */}
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              Natural lighting and clean compositions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              Story-driven graduation portraits
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              Timeless edits designed to age beautifully
            </li>
          </ul>
        </div>

        {/* RIGHT — Gallery */}
        <div className="relative">
          <AutoScrollGallery className='overflow-hidden hide-scrollbar'
            images={[
              "/src/assets/gallery/g1.jpg",
              "/src/assets/gallery/g2.jpg",
              "/src/assets/gallery/g3.jpg",
              "/src/assets/gallery/g4.jpg",
              "/src/assets/gallery/g1.jpg",
              "/src/assets/gallery/g2.jpg",
              "/src/assets/gallery/g3.jpg",
            ]}
          />
        </div>

      </div>
    </Section>
  )
}

export default GraduationGallery
