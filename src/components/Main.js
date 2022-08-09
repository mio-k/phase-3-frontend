import React, { useEffect, useState } from "react";
import DogList from "./DogList";
import NewDog from "./NewDog";

function Main({dogs, setDogs, onDeleteDog}){

  // const [dogs, setDogs] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9292/dogs")
  //     .then((r) => r.json())
  //     .then((dogs) => setDogs(dogs));
  // }, []);

  function handleAddDog(newDog) {
    setDogs([...dogs, newDog]);
  }


  return(
    <div>
      <DogList dogs={dogs} onDeleteDog={onDeleteDog} />
      <NewDog handleAddDog={handleAddDog}/>
    </div>
  )
}
export default Main;
