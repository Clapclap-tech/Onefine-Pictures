import React from 'react';
import PackagesHeader from '../components/packages/PackagesHeader';
import GraduationPackage from '../components/packages/GraduationPackage';
import FamilyPackages from '../components/packages/FamilyPackages';
import Button from '../components/ui/Button'; // your Button component

const Packages = () => {
  return (
    <div>
      <PackagesHeader />

      {/* Buttons above GraduationPackage */}
      <div className="flex gap-4 mb-6 mt-6 justify-center">
        <Button className="rounded-full bg-red-600 text-white group">
          Graduation Packages
        </Button>
        <Button className="rounded-full bg-red-600 text-white group">
          Group Packages
        </Button>
        <Button className="rounded-full bg-red-600 text-white group">
          Family Packages
        </Button>
      </div>

      <GraduationPackage />
    </div>
  );
};

export default Packages;
