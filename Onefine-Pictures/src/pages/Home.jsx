import React from 'react'
import Button from '../components/ui/Button';
import Hero from '../components/homeSections/HeroSection';
import FeaturedGallery from '../components/homeSections/FeaturedGallerySection';
import About from '../components/homeSections/AboutSection';
import Packages from '../components/homeSections/PackagesSection';
import Location from '../components/homeSections/LocationSection';
import ServicesSection from '../components/homeSections/ServicesSection';
import BookingCTA from '../components/homeSections/BookingCTA';
import StatementAboutSection from '../components/homeSections/StatementAboutSection';
import StatementServicesSection from '../components/homeSections/StatementServicesSection';
import FeedbackSection from '../components/homeSections/FeedbacksSection';
import ExperienceSection from '../components/homeSections/ExperienceSection';
import SchoolLogoSection from '../components/homeSections/SchoolLogosSection';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
        <div className="absolute left-0 right-0 top-[calc(90vh-120px)] z-10 flex justify-center pointer-events-none">
          <img src="/HeroSectionSeparator.svg" alt="Bottom Fade" className="h-auto w-full" />
        </div>
      <FeaturedGallery />
      <StatementServicesSection />
      <FeedbackSection />
      <ServicesSection />
      <BookingCTA />
      <SchoolLogoSection />
      <About />
      <Location />

    </div>
  )
}

export default Home;