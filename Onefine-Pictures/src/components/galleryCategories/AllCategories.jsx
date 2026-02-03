import React from 'react'
import FlowGallery from '../ui/FlowGallery'
import AutoScrollGallery from '../ui/AutoScrollGallery'

const AllCategories = () => {
  return (
    <AutoScrollGallery images={[
        "/src/assets/gallery/g1.jpg",
        "/src/assets/gallery/g2.jpg",
        "/src/assets/gallery/g3.jpg",
        "/src/assets/gallery/g4.jpg",
        "/src/assets/gallery/g1.jpg",
        "/src/assets/gallery/g2.jpg",
        "/src/assets/gallery/g3.jpg",
    ]} />
  )
}

export default AllCategories    