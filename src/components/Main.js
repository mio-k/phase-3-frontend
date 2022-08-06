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

  function onDeleteDog(id) {
    const updatedDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updatedDogs);
  }

  return(
    <div>
      <DogList dogs={dogs} onDeleteDog={onDeleteDog} />
      <NewDog handleAddDog={handleAddDog}/>
    </div>
  )
}
export default Main;
