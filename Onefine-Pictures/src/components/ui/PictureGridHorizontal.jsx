import React from 'react'

const PictureGridHorizontal = ({images, className=''}) => {
  return (
    <div className={`flex gap-6 overflow-x-auto pb-4 scroll-smooth ${className}`}>
      {images.map((img, i) => (
        <div
          key={i}
          className="
            flex-shrink-0
            w-80  /* same width as roughly md:grid-cols-3 */
            h-full  /* same height */
            rounded-2xl
            shadow-sm
            hover:shadow-xl
            overflow-hidden
            transition
          "
        >
          <img
            src={img}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
          />
        </div>
      ))}
    </div>
  )
}

export default PictureGridHorizontal