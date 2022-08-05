import React from "react";
import OrderList from "./OrderList";

function DogItem({dog, onDeleteClick, onUpdateDog}){

    function handleDeleteClick() {
      fetch(`http://localhost:9292/dogs/${dog.id}`, {
        method: "DELETE",
      });
      onDeleteClick(dog.id);
    }
  
    return (
      <li>
        <p>Name: {dog.name}</p>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age}</p>
        <p>Weight: {dog.weight}</p>
        <button onClick={onDeleteClick}>Delete Dog</button>
        <OrderList />
      </li>
    );
}
export default DogItem;