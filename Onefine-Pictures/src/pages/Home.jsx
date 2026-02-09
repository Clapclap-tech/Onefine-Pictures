import React from 'react'
import Button from '../components/ui/Button';
import Hero from '../components/homeSections/HeroSection';
import FeaturedGallery from '../components/homeSections/FeaturedGallerySection';
import About from '../components/homeSections/AboutSection';
import Packages from '../components/homeSections/PackagesSection';
import Location from '../components/homeSections/LocationSection';
import ServicesSection from '../components/homeSections/ServicesSection';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedGallery />
      <ServicesSection />
      <About />
      <Location />

    </div>
  )
}

export default Home;