import React from 'react'
import FlowGallery from '../ui/FlowGallery'
import AutoScrollGallery from '../ui/AutoScrollGallery'
import PictureGrid from '../ui/PictureGrid'

const AllCategories = () => {
  return (
    <PictureGrid images={[
        "/src/assets/gallery/Grad/16x20-aiah.jpg",
        "/src/assets/gallery/Grad/16x20-ctu.jpg",
        "/src/assets/gallery/Grad/16x20-joshua.jpg",
        "/src/assets/gallery/Family/56.jpg",
        "/src/assets/gallery/Group/41.jpg",
        "/src/assets/gallery/Barkada/43.jpg",
    ]} />
  )
}

export default AllCategories    