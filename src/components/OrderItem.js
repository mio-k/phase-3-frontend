import React, { useState } from "react";
import EditOrder from "./EditOrder";


function OrderItem({ order, onOrderDelete, onUpdateOrder }) {

  const [isEditing, setIsEditing] = useState(false);
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/orders/${order.id}`, {
      method: "DELETE",
    });
      onOrderDelete(order.id);
  }
  
  function handleUpdateOrder(updatedOrder) {
    setIsEditing(false);
    onUpdateOrder(updatedOrder);
  }
  
  return (
    <li>
      <p>Item: {order.item}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Pickup Date: {order.pickup_date}</p>
        {isEditing ? (
          <EditOrder order={order} onUpdateOrder={handleUpdateOrder} />
        ) : ("Order Accepted")
        }
        {
          <div>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              Edit Order
            </button>
            <button onClick={handleDeleteClick}>
              Delete Order
            </button>
          </div>
        }
    </li>
  );
}
  
export default OrderItem;