import React from "react";
import DogList from "./DogList";
import NewDog from "./NewDog";

function Main({dogs, setDogs}){

  function onAddDog(newDog) {
    setDogs([...dogs, newDog]);
  }

  return(
    <div>
      <DogList dogs={dogs} />
      <NewDog onAddDog={onAddDog}/>
    </div>
  )
}
export default Main;
