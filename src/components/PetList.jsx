import {useState, useEffect } from "react";
import { getAllPets } from "../services/main/pets";
import PetDetails from "./PetDetails";
import '../styles/PetList.css'


function PetList() {
    const [petList, setPetList] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const pets = await getAllPets();
          setPetList(pets);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
  
    const handleClick = (pet) => {
     
      console.log("Edit pet:", pet);
    };
  
    return (
        <div>
        <h1>Lista de Animais</h1>
        <ul>
          {petList.map((pet) => (
            <li key={pet.id}>
              <h5 className="card-title">
                <strong>Name:</strong> {pet.name}
              </h5>
              <button onClick={handleClick} className="btn btn-primary">Ver Detalhes</button>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PetList;


  


