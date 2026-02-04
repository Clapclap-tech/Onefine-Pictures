import React from 'react'
import FlowGallery from '../ui/FlowGallery'
import AutoScrollGallery from '../ui/AutoScrollGallery'
import PictureGrid from '../ui/PictureGrid'

const GraduationShots = () => {
  return (
    <PictureGrid images={[
        "/src/assets/gallery/Grad/16x20-aiah.jpg",
        "/src/assets/gallery/Grad/16x20-ctu.jpg",
        "/src/assets/gallery/Grad/16x20-jamie.jpg",
        "/src/assets/gallery/Grad/16x20-joshua.jpg",
        "/src/assets/gallery/Grad/26.jpg",
        "/src/assets/gallery/Grad/32-2.jpg",
    ]} />
  )
}

export default GraduationShots