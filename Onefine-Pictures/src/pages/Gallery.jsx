import React, { useState, lazy, Suspense } from "react"

const categories = [
  {
    key: "All Works",
    component: lazy(() =>
      import("../components/galleryCategories/GraduationShots")
    ),
  },
  {
    key: "Family",
    component: lazy(() =>
      import("../components/galleryCategories/FamilyShots")
    ),
  },
  {
    key: "Couples",
    component: lazy(() =>
      import("../components/galleryCategories/CoupleShots")
    ),
  },
  {
    key: "Barkada",
    component: lazy(() =>
      import("../components/galleryCategories/BarkadaShots")
    ),
  },
  {
    key: "Group",
    component: lazy(() =>
      import("../components/galleryCategories/GroupShots")
    ),
  },
  {
    key: "Parents",
    component: lazy(() =>
      import("../components/galleryCategories/ParentsShots")
    ),
  },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section className="relative -top-4 bg-black min-h-screen text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-light tracking-wide font-heading">
            THE <span className="text-red-600 font-semibold">GALLERY</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed font-body">
            Capturing the essence of life's most precious moments through a luxury lens.
            Explore our curated portfolio across diverse specialties.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 font-body font-bold">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm transition-all duration-300 border
                ${
                  activeCategory.key === category.key
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-gray-700 text-gray-400 hover:border-white hover:text-white"
                }
              `}
            >
              {category.key}
            </button>
          ))}
        </div>

        {/* CATEGORY CONTENT */}
        <Suspense
          fallback={
            <div className="text-center py-20 text-gray-500">
              Loading...
            </div>
          }
        >
          <activeCategory.component />
        </Suspense>

      </div>
    </section>
  )
}

export default Gallery