import React, { useState } from "react";
import Section from "../Section";
import AllCategories from "../galleryCategories/AllCategories";
import GraduationShots from "../galleryCategories/GraduationShots";
import FamilyShots from "../galleryCategories/FamilyShots";
import CoupleShots from "../galleryCategories/CoupleShots";
import BarkadaShots from "../galleryCategories/BarkadaShots";
import GroupShots from "../galleryCategories/GroupShots";
import ParentsShots from "../galleryCategories/ParentsShots";
import Button from "../ui/Button";

const categories = ["All", "Graduation", "Family", "Barkada", "Group"];

const FeaturedGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Section className="bg-black py-60">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Our Gallery
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto font-body">
            Explore our collection of beautiful moments captured through our lens
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-8 mb-12 text-sm font-medium font-body">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-1 transition-colors duration-300 ${
                activeCategory === category
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div>
          {activeCategory === "All" && <AllCategories />}
          {activeCategory === "Graduation" && <GraduationShots />}
          {activeCategory === "Family" && <FamilyShots />}
          {activeCategory === "Couples" && <CoupleShots />}
          {activeCategory === "Barkada" && <BarkadaShots />}
          {activeCategory === "Group" && <GroupShots />}
          {activeCategory === "Parents" && <ParentsShots />}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <Button className="bg-black hover:bg-red-700 border-2 border-white rounded-xl text-white px-8 py-3 w-70 h-15">
            VIEW THE FULL GALLERY
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedGallerySection;