import { useState, useEffect } from 'react';
import { createOrUpdatePet, getPetById } from '../services/main/pets';
import '../styles/PetForm.css'

function PetForm({ petId, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
  });

  useEffect(() => {
    if (petId) {
        loadPetData(petId);
    }
  }, [petId]);

  async function loadPetData(id) {
    try {
      const pet = await getPetById(id);
      setFormData({
        name: pet.name,
        dateOfBirth: pet.dateOfBirth,
        breed: pet.breed,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (petId) {
        
        await createOrUpdatePet({ id: petId, ...formData });
      } else {
        
        await createOrUpdatePet(formData);
      }

      
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div>
      <h2>{petId ? 'Edit Pet' : 'Add Pet'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">{petId ? 'Update' : 'Add'}</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default PetForm;
