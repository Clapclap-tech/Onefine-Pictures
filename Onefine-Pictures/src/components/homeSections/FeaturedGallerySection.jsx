import React, { useState } from 'react'
import Section from '../Section';
import GraduationShots from '../galleryCategories/GraduationShots';
import AllCategories from '../galleryCategories/AllCategories';
import FamilyShots from '../galleryCategories/FamilyShots';
import CoupleShots from '../galleryCategories/CoupleShots';
import BarkadaShots from '../galleryCategories/BarkadaShots';
import GroupShots from '../galleryCategories/GroupShots';
import ParentsShots from '../galleryCategories/ParentsShots';
import Button from '../ui/Button';

const categories = [
  "All",
  "Graduation",
  "Family",
  "Barkada",
  "Group",
];

const FeaturedGallerySection = () => {

  const [activeCategory,setActiveCategory] = useState("All");

  return (
    <Section className='flex justify-center shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]'>

      <div className='max-w-6xl mx-auto'>

      {/*HEADER*/}
        <div className='mb-12 text-center'>
          <h2 className='text-4xl font-semibold tracking-tight text-gray-900'>
            Our Gallery
          </h2>
          <p className='mt-4 text-gray-500 max-w-xl mx-auto'>
            Explore our collection of beautiful moments captured through our lens
          </p>
        </div>

        {/*CATEGORIES*/}
        <div className='flex justify-center gap-8 mb-10 text-sm uppercase'>
          {categories.map((categories) => (
            <a key={categories} 
            href='#'
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(categories);
            }}
            className={`relative pb-1 transition-all duration-300
              ${
                activeCategory === categories
                ? "text-red-600"
                : "text-gray-400 hover:text-gray-600"
              }
              `}
            >
              {categories}

              {activeCategory  === categories && (
                <span className='absolute left-0 -bottom-1 w-full h-[2px] bg-red-600' />
              )}
            </a>
          ))}
        </div>

        <div className='transition-all duration-500'>
          {activeCategory === "All" &&  <AllCategories />}
          {activeCategory === "Graduation" &&  <GraduationShots />}
          {activeCategory === "Family" &&  <FamilyShots />}
          {activeCategory === "Couples" &&  <CoupleShots />}
          {activeCategory === "Barkada" &&  <BarkadaShots />}
          {activeCategory === "Group" &&  <GroupShots />}
          {activeCategory === "Parents" &&  <ParentsShots />}
        </div>
          
        <div className='mt-12 flex justify-center'>
              <Button className="relative overflow-hidden px-8 py-3 rounded-full bg-red-600 text-white group">
                <span className="relative z-10">
                  View More
                </span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>          
        </div>

      </div>
    </Section>
  )
}

export default FeaturedGallerySection