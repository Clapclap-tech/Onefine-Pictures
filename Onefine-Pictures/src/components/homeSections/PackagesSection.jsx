import Section from "../Section";
import { packagesData } from "../../data/packagesData";
import PackageCard from "../packages/PackageCard";

const PackagesSection = () => {
  return (
    <Section className="bg-white shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-red-600 text-sm mb-4">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Our Services
          </h2>
          <div className="w-20 h-[2px] bg-black mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packagesData.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default PackagesSection;
