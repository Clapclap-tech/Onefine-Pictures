import React from 'react'
import Button from '../components/ui/Button';
import Hero from '../components/homeSections/HeroSection';
import FeaturedGallery from '../components/homeSections/FeaturedGallerySection';
import About from '../components/homeSections/AboutSection';
import Packages from '../components/homeSections/PackagesSection';
import Location from '../components/homeSections/LocationSection';

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