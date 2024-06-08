import React from "react";
import AnimalGallery from "./AnimalGallery";

const DogGallery = () => {
  return (
    <div>
      <AnimalGallery apiUrl="https://freetestapi.com/api/v1/dogs" animalType="Dog" />
    </div>
  );
};

export default DogGallery;
