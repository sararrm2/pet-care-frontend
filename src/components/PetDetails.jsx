import {useState, useEffect } from "react";

function PetDetails({ pet, onSelectedPet }) {
  return (
        <div className="card">
       <h1>Detalhes</h1>
      <div className="card-body">
        <h2 className="card-title">
       
          <strong>Name:</strong> {pet.name}
        </h2>
        <p className="card-text">
          <strong>Date of Birth:</strong> {pet.dateOfBirth}
        </p>
        <p className="card-text">
          <strong>Breed:</strong> {pet.breed}
        </p>
      </div>
    </div>
  );
}

export default PetDetails;
