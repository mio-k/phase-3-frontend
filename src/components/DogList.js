import React from "react";
import { Link, Outlet } from "react-router-dom";
import DogItem from "./DogItem";

function DogList({dogs, onDeleteDog, onAddDog}){

  return(
    <div className="list">
      <h2>Member Dogs</h2>
      <nav>
        {/* {dogs.map((dog) => 
          <DogItem key={dog.id} dog={dog} onDeleteDog={onDeleteDog} onAddDog={onAddDog}/>
        )} */}
        {dogs.map((dog) => (
          <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/dogs/${dog.id}`}
          key={dog.id}
          >
          {dog.name}
        </Link>
        ))} 
      </nav>
      <Outlet />
    </div>
  )
}
export default DogList;