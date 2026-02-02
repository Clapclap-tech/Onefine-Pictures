import GalleryCategory from "../components/gallerySections/GalleryCategory";

const Gallery = () => {
  return (
    <>
      <GalleryCategory
        title="Graduation"
        subtitle="Celebrating achievements and milestones"
        images={[
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
        ]}
      />

      <GalleryCategory
        title="Family"
        subtitle="Timeless moments with the people you love"
        images={[
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
        ]}
      />

      <GalleryCategory
        title="Couples"
        subtitle="Intimate stories of love and connection"
        images={[
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
        ]}
      />

      <GalleryCategory
        title="Barkada"
        subtitle="Fun, laughter, and unforgettable memories"
        images={[
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
          "/src/assets/gallery/g1.jpg",
        ]}
      />
    </>
  );
};

export default Gallery;
