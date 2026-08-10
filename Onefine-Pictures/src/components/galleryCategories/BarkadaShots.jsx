import React from 'react'
import FlowGallery from '../ui/FlowGallery'
import AutoScrollGallery from '../ui/AutoScrollGallery'
import PictureGrid from '../ui/PictureGrid'

const BarkadaShots = () => {
  return (
    <AutoScrollGallery className='aspect=' images={[
        "43",
        "46",
    ]} />
  )
}

export default BarkadaShots