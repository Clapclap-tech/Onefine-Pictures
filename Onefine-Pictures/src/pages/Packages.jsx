import React from 'react'
import PackagesHeader from '../components/packages/PackagesHeader'
import GraduationPackage from '../components/packages/GraduationPackage'
import FamilyPackages from '../components/packages/FamilyPackages'

const Packages = () => {
  return (
    <div>
      <PackagesHeader />
      
      <GraduationPackage />
      <FamilyPackages />

    </div>
  )
}

export default Packages