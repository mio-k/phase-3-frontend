import React from "react";
import OrderList from "./OrderList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function DogItem({dog, onDeleteClick}){

  let params = useParams();
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${dog.id}`, {
      method: "DELETE",
    });
      onDeleteClick(dog.id);
  }
  
  return (
    <li>
      <h2>Dog {params.dog.id}</h2>
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Weight: {dog.weight}</p>
      <button onClick={handleDeleteClick}>Delete Dog</button>

      <OrderList />
    </li>
  );
}
export default DogItem;