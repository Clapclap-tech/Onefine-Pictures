import React from 'react'

const PictureGrid = ({images}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
        <div
            key={i}
            className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
        >
            <img
            src={img}
            className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-700"
            />
        </div>
        ))}
    </div>
  )
}

export default PictureGrid