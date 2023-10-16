import {useState, useEffect } from "react";
import { getAllPets } from "../services/main/pets";
import PetCard from "./PetCard";


function PetList(){
    
    const [petlist, setPetList] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
          try {
            const pets = await getAllPets();
            setPetList(pets); 
            }
            catch(error){
                console.error(error);
            }
        }
        fetchData();

    },[]);

    return(
       <>
          <div>
            <h1> Lista de Animais</h1>
            <ul>
                {petList.map((pet) => (
                  <li key={pet.id}>
                    <PetCard pet={pet} />
                  </li>
                ))}
            </ul>
            </div>
            </>
            );
            }
            
        export default PetList;
