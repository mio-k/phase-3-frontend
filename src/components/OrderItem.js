import React, { useState, useEffect } from "react";
import EditOrder from "./EditOrder";
import { useParams } from "react-router-dom";
import DogItem from "./DogItem";


function OrderItem({ onDeleteOrder, onUpdateOrder }) {
  let {order_id} = useParams();

  const [isEditing, setIsEditing] = useState(false);
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/orders/${order_id}`, {
      method: "DELETE",
    });
      onDeleteOrder(order_id);
  }
  const [order, setOrder] = useState({});
  useEffect(()=> {
    fetch(`http://localhost:9292/orders/${order_id}`)
    .then(r => r.json())
    .then(individualOrder =>{
      setOrder(individualOrder)
    })
  }, [])

  
  function onUpdateOrder(updatedOrder) {
    onUpdateOrder(updatedOrder);
  }
  
  return (
    <div>
    {order ?  (
      <div><h2>Order {order_id}</h2>
      <p>Item: {order.item}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Pickup Date: {order.pickup_date}</p>
      {isEditing ? (
          <EditOrder order={order} onUpdateOrder={onUpdateOrder} />
        ) : ("")
      }
      <button onClick={handleDeleteClick}>Delete Order</button>
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
           Edit Order
      </button> </div>
      ): <p>No Order for ${DogItem.name}</p>}
  </div>
  );
}
  
export default OrderItem;