import Section from "../Section";
import PackageCard from "./PackageCard";

const PackageSection = ({ title, subtitle, packages }) => {
  return (
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

      </div>
  );
};

export default PackageSection;
