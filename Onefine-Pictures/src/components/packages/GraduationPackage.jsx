import Section from "../Section";
import PackageCard from "./PackageCard";
import { packagesData } from "../../data/packagesData";

const GraduationPackage = () => {
  const graduation = packagesData.graduation || {
    title: "Graduation Packages",
    subtitle: "",
    packages: [],
  };

  // Just pick the first package
  const pkg = graduation.packages[0];

  return (
    <Section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - image, title, description */}
          <div className="flex flex-col justify-center">
            {/* Optional left-side hero image */}
            <div className="mb-6">
              <img
                src="/src/assets/gallery/Grad/16x20-aiah.jpg"
                alt="Graduation"
                className="w-120 rounded-2xl shadow-lg object-cover h-full md:h-full"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {graduation.title}
            </h1>

            {graduation.subtitle && (
              <p className="text-gray-600 text-lg mb-6">{graduation.subtitle}</p>
            )}

            <p className="text-gray-700 leading-relaxed">
              Select the perfect package to celebrate your graduation. Each package includes prints, wallet photos, and more, tailored for your memorable day.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {pkg && (
              <PackageCard
                pkg={pkg}
                className="p-10 md:p-12"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GraduationPackage;
