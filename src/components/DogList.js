import React from "react";
import DogItem from "./DogItem";

function DogList({dogs, onDeleteDog, onUpdateDog}){

    return(
        <div className="list">
      <h2>Customers</h2>
      <ul>
        {dogs.map((dog) => 
          <DogItem
            key={dog.id}
            dog={dog}
            onDeleteDog={onDeleteDog}
            onUpdateDog={onUpdateDog}
          />
        )}
      </ul>
    </div>
    )
}
export default DogList;