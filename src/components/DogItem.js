import React, {useEffect, useState} from "react";
import OrderList from "./OrderList";
import { useParams, useNavigate } from "react-router-dom";
import NewOrder from "./NewOrder";

function DogItem({onDeleteDog}){
  let {dog_id} = useParams();
  let navigate = useNavigate();

  let [orders, setOrders] = useState([])
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${dog_id}`, {
      method: "DELETE",
    })
    .then(() => navigate("/dogs"))
      onDeleteDog(dog_id);
  }

  const [dog, setDog] = useState("");
  useEffect(()=> {
    fetch(`http://localhost:9292/dogs/${dog_id}`)
    .then(r => r.json())
    .then(individualDog => {
      setDog(individualDog)
      console.log(individualDog.orders)
      setOrders(individualDog.orders)
    })
  }, [])

  function onAddOrder(newOrder) {
    setOrders([...orders, newOrder]);
  }
  return (
    <div>
      {dog ?  (
      <div>
          <h2>Dog {dog_id}</h2>
          <p>Name: {dog.name}</p>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          <p>Weight: {dog.weight}</p>
          <button onClick={handleDeleteClick}>Delete Dog</button>
      </div>
      ): <p>dog not found</p>}
        <OrderList orders={orders} dogName={dog.name}/>
        <NewOrder onAddOrder={onAddOrder} dogName={dog.name}/>
    </div>
  );
}
export default DogItem;