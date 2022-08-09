import React, {useEffect, useState} from "react";
import OrderList from "./OrderList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function DogItem({dogs, onDeleteDog}){
console.log(dogs)
  let {id} = useParams();
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${id}`, {
      method: "DELETE",
    });
      onDeleteDog(id);
  }
  const [dog,setDog] = useState("");
  function filterDog(){
    // dogs.map((dog)=>console.log(dog.id==id))
  }
  useEffect(()=> {
    let currentDog = dogs.filter(dog => dog.id == id)
    setDog(currentDog[0])
    console.log(currentDog)
  }, [])
  return (
    <li>
  {dog ?  <div><h2>Dog {id}</h2>
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Weight: {dog.weight}</p>
      <button onClick={handleDeleteClick}>Delete Dog</button> </div>: <p>dog not found</p>}
      {/* <h2>Dog {id}</h2>
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Weight: {dog.weight}</p>
      <button onClick={handleDeleteClick}>Delete Dog</button> */}

      <OrderList />
    </li>
  );
}
export default DogItem;