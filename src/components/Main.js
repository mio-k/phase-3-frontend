import React, { useEffect, useState } from "react";
import DogList from "./DogList";
import NewDog from "./NewDog";

function Main(){

const [dogs, setDogs] = useState([]);

useEffect(() => {
  fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((dogs) => setDogs(dogs));
}, []);

function handleAddDog(newDog) {
  setDogs([...dogs, newDog]);
}

function handleDeleteDog(id) {
  const updatedDogs = dogs.filter((dog) => dog.id !== id);
  setDogs(updatedDogs);
}

function handleUpdateDog(updatedDogObj) {
  const updatedDogs = dogs.map((dog) => {
    if (dog.id === updatedDogObj.id) {
      return updatedDogObj;
    } else {
      return dog;
    }
  });
  setDogs(updatedDogs);
}
return(
  <div>
    <DogList dogs={dogs} handleDeleteDog={handleDeleteDog} handleUpdateDog={handleUpdateDog} />
    <NewDog handleAddDog={handleAddDog}/>
    </div>
)
}
export default Main;
