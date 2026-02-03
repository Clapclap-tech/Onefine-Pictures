import React from 'react'
import FlowGallery from '../ui/FlowGallery'
import AutoScrollGallery from '../ui/AutoScrollGallery'

const ParentsShots = () => {
  return (
    <AutoScrollGallery images={[
        "/src/assets/gallery/g1.jpg",
        "/src/assets/gallery/g1.jpg",
        "/src/assets/gallery/g1.jpg",
    ]} />
  )
}

export default ParentsShots