import React from "react";
import AnimalGallery from "./AnimalGallery";

const CatGallery = () => {
  return (
    <div>
      <AnimalGallery
        apiUrl="https://freetestapi.com/api/v1/cats"
        animalType="Cat"
      />
      ;
    </div>
  );
};
export default CatGallery;
