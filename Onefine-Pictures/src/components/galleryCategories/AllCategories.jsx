import React from "react";
import PictureGrid from "../ui/PictureGrid";

const AllCategories = () => {

  const graduationImages = [
    "16x20-aiah",
    "16x20-ctu",
    "16x20-joshua",
    "59",
    "41",
    "43",
  ];

  return <PictureGrid images={graduationImages} />;
};

export default AllCategories;
