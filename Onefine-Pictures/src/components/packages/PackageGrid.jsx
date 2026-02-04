import PackageCard from "./PackageCard";

const PackageGrid = ({ packages }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
};

export default PackageGrid;
