import Button from "../ui/Button";
import InclusionList from "./InclusionList";

const PackageCard = ({
  pkg,
  title,
  price,
  desc,
  inclusions,
  image, // new prop for the picture
  ctaText = "View Gallery",
  onCtaClick,
  showInclusions = true,
  className = "",
}) => {
  const data = pkg ?? { title, price, desc, inclusions, image };

  return (
    <div
      className={`relative bg-white border border-black/10 rounded-2xl
        overflow-hidden p-6 md:p-8 lg:p-10 xl:p-12 transition-shadow duration-300 hover:shadow-lg
        ${className}`}
    >
      {data.image && (
        <div className="w-full mb-4">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105
                      md:h-[20rem] lg:h-[28rem] xl:h-[32rem]"
          />
        </div>
      )}


      {/* Accent line */}
      <div className="absolute top-0 left-0 h-1 w-12 bg-red-600 rounded-tl-2xl rounded-br-2xl" />

      {/* Card content */}
      <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
        {data.title}
      </h3>

      {data.price && (
        <p className="text-red-600 font-medium mb-2">{data.price}</p>
      )}

      {data.desc && (
        <p className="text-gray-600 leading-relaxed mb-4">{data.desc}</p>
      )}

      {showInclusions && data.inclusions?.length > 0 && (
        <div className="mb-4">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-2">
            Inclusions
          </p>
          <InclusionList items={data.inclusions} />
        </div>
      )}

      <div className="flex justify-center gap-4">
        <Button
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full w-40"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
        
        <Button
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full w-40"
          onClick={onCtaClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
