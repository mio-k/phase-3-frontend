import React from "react";
import DogList from "./DogList";
import NewDog from "./NewDog";

function Main({dogs, setDogs, onDeleteDog}){

  function onAddDog(newDog) {
    setDogs([...dogs, newDog]);
  }

  return(
    <div>
      <DogList dogs={dogs} onDeleteDog={onDeleteDog} />
      <NewDog onAddDog={onAddDog}/>
    </div>
  )
}
export default Main;
