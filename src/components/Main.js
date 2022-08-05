import React, { useEffect, useState } from "react";

function Main(){

const [dogs, setDogs] = useState([]);

useEffect(() => {
  fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((dogs) => setDogs(dogs));
}, []);

function handleAddDog(newDog) {
  setOrders([...dogs, newDog]);
}

function handleDeleteDog(id) {
  const updatedDogs = dogs.filter((dog) => dog.id !== id);
  setDogs(updatedDogs);
}

function handleUpdateDog(updatedDogObj) {
  const updatedDogs = dogs.map((dog) => {
    if (dog.id === updatedDogObj.id) {
      return updatedDogObj;
    } else {
      return dog;
    }
  });
  setOrders(updatedDogs);
}
return[
    "blah"
]
}
export default Main;
