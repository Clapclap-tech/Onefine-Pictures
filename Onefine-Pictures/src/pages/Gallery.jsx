import React, { useState } from "react"

// Define your categories with component paths
const categories = [
  {
    key: "Graduation",
    title: "Graduation Collection",
    subtitle:
      "Capturing memorable graduation moments with emotion, detail, and authenticity.",
    component: () => import("../components/galleryCategories/GraduationShots"),
  },
  {
    key: "Family",
    title: "Family Moments",
    subtitle: "Cherished family memories captured in heartwarming portraits.",
    component: () => import("../components/galleryCategories/FamilyShots"),
  },
  {
    key: "Couples",
    title: "Couples & Engagement",
    subtitle: "Romantic and timeless portraits that tell your love story.",
    component: () => import("../components/galleryCategories/CoupleShots"),
  },
  {
    key: "Barkada",
    title: "Barkada Adventures",
    subtitle: "Fun, energetic shots of friends making memories together.",
    component: () => import("../components/galleryCategories/BarkadaShots"),
  },
  {
    key: "Group",
    title: "Group Portraits",
    subtitle: "Well-composed group photos that capture everyone perfectly.",
    component: () => import("../components/galleryCategories/GroupShots"),
  },
  {
    key: "Parents",
    title: "Parents & Guardians",
    subtitle: "Tender moments with parents and loved ones preserved beautifully.",
    component: () => import("../components/galleryCategories/ParentsShots"),
  },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key)
  const [ActiveComponent, setActiveComponent] = useState(null)

  // Dynamically load component when category changes
  React.useEffect(() => {
    const category = categories.find((c) => c.key === activeCategory)
    if (!category) return

    category.component().then((mod) => {
      setActiveComponent(() => mod.default)
    })
  }, [activeCategory])

  const currentCategory = categories.find((c) => c.key === activeCategory)

  return (
    <div className="bg-gray-50 min-h-screen py-28">
      <div className="max-w-[1600px] mx-auto px-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-red-600 text-sm mb-4">
            {currentCategory.title}
          </p>

          <h1 className="text-5xl font-light text-gray-900">
            {currentCategory.title}
          </h1>

          <div className="w-24 h-[2px] bg-black mx-auto mt-8" />

          <p className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed">
            {currentCategory.subtitle}
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-10 mb-16 text-sm uppercase tracking-wider">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`relative pb-2 transition-all duration-300
                ${
                  activeCategory === category.key
                    ? "text-red-600"
                    : "text-gray-400 hover:text-gray-700"
                }
              `}
            >
              {category.key}
              {activeCategory === category.key && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600" />
              )}
            </button>
          ))}
        </div>

        {/* GALLERY CONTENT */}
        <div key={activeCategory} className="transition-all duration-500">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </div>
  )
}

export default Gallery
