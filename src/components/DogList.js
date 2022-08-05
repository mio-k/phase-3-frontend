import React from "react";
import Dog from "./Dog";

function DogList({dogs, onDeleteDog, onUpdateDog}){

    return(
        <div className="list">
      <h2>Customers</h2>
      <ul>
        {dogs.map((dog) => 
          <Dog
            key={dog.id}
            order={dog}
            onDeleteDog={onDeleteDog}
            onUpdateDog={onUpdateDog}
          />
        )}
      </ul>
    </div>
    )
}
export default DogList;