import Section from "../Section";

const GalleryCategory = ({ title, subtitle, images }) => {
  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-gray-500 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default GalleryCategory;
