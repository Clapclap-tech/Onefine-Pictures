import React from 'react'
import Button from '../components/ui/Button';
import Hero from '../components/homeSections/Hero';
import FeaturedGallery from '../components/homeSections/FeaturedGallery';
import About from '../components/homeSections/About';
import Packages from '../components/homeSections/Packages';
import Location from '../components/homeSections/Location';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedGallery />
      <About />
      <Packages />
      <Location />
    </div>
  )
}

export default Home;