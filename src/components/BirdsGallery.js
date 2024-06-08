import React from "react";
import AnimalGallery from "./AnimalGallery";

const BirdGallery = () => {
  return (
    <div>
      <AnimalGallery
        apiUrl="https://freetestapi.com/api/v1/birds"
        animalType="Cat"
      />
      ;
    </div>
  );
};
export default BirdGallery;
