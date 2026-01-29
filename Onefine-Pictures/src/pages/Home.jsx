import React from 'react'
import Button from '../components/ui/Button';
import Hero from '../components/homeSections/Hero';
import FeaturedGallery from '../components/homeSections/FeaturedGallery';
import About from '../components/homeSections/About';
import Packages from '../components/homeSections/Packages';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedGallery />
      <About />
      <Packages />
    </div>
  )
}

export default Home;