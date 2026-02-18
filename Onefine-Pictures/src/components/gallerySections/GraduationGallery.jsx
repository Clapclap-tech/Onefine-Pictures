import React from 'react'
import Section from '../Section'
import PictureGrid from '../ui/PictureGrid'

const GraduationGallery = () => {

  const graduationImages = [
    "graduation/grad1",
    "graduation/grad2",
    "graduation/grad3",
    "graduation/grad4",
    "graduation/grad5",
    "graduation/grad6",
    "graduation/grad7",
    "graduation/grad8",
    "graduation/grad9",
    "graduation/grad10",
    "graduation/grad11",
    "graduation/grad12",
    "graduation/grad13",
    "graduation/grad14",
    "graduation/grad15",
  ]

  return (
    <Section className="bg-white py-28">
      <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT — Text Content */}
        <div className="space-y-10 lg:sticky lg:top-32 h-fit">
          <span className="uppercase tracking-[0.35em] text-sm text-red-600 font-medium">
            Graduation Collection
          </span>

          <h2 className="text-5xl font-light text-gray-900 leading-tight">
            Creating Visual <br className="hidden sm:block" />
            Stories That Last
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
            We capture graduation moments with emotion, detail,
            and authenticity. Each photograph is carefully composed
            to preserve milestones that deserve to be remembered.
          </p>

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

        {/* RIGHT — Bigger Cloudinary Grid */}
        <div>
          <PictureGrid images={graduationImages} />
        </div>

      </div>
    </Section>
  )
}

export default GraduationGallery
