import React, {useEffect, useState} from "react";
import OrderList from "./OrderList";
import { useParams } from "react-router-dom";
import NewOrder from "./NewOrder";

function DogItem({onDeleteDog, setOrders, orders}){
  let {dog_id} = useParams();
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${dog_id}`, {
      method: "DELETE",
    });
      onDeleteDog(dog_id);
  }

  const [dog, setDog] = useState("");
  useEffect(()=> {
    fetch(`http://localhost:9292/dogs/${dog_id}`)
    .then(r => r.json())
    .then(individualDog => {
      setDog(individualDog)
      setOrders(individualDog.orders)
    })
  }, [])

  function onAddOrder(newOrder) {
    setOrders([...orders, newOrder]);
  }
  // function onOrderDelete(dog_id) {
  //   const updatedOrders = orders.filter((order) => order.id !== dog_id);
  //     setOrders(updatedOrders);
  // }
    
  // function onUpdateOrder(updatedOrderObj) {
  //   const updatedOrders = orders.map((order) => {
  //     if (order.id === updatedOrderObj.id) {
  //       return updatedOrderObj;
  //     } else {
  //       return order;
  //     }
  //   });
  //     setOrders(updatedOrders);
  // }
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
        <OrderList orders={orders} />
        <NewOrder onAddOrder={onAddOrder}/>
    </div>
  );
}
export default DogItem;