import React from "react";
import DogItem from "./DogItem";

function DogList({dogs, onDeleteDog}){

  return(
    <div className="list">
      <h2>Customers</h2>
      <ul>
        {dogs.map((dog) => 
          <DogItem key={dog.id} dog={dog} onDeleteDog={onDeleteDog} />
        )}
      </ul>
    </div>
  )
}
export default DogList;