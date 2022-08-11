import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditOrder({order, onUpdateOrder }) {

  const [revisedData, setRevisedData] = useState({
    item: order.item,
    quantity: order.quantity,
    pickup_date: order.pickup_date
  })
  let {order_id} = useParams();

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/orders/${order_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: revisedData.item,
        quantity: revisedData.quantity,
        pickup_date: revisedData.pickup_date
      }),
    })
      .then((r) => r.json())
      .then((revisedData) => onUpdateOrder(revisedData));
  }

  return (
    <form className="edit-order" onSubmit={handleFormSubmit}>
      Item: <input type="text" name="item" value={revisedData.item} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, item: e.target.value}))} />
      Pickup Date: <input type="text" name="pickup_date" value={revisedData.pickup_date} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, pickup_date: e.target.value}))} />
      Quantity: <input type="text" name="quantity" value={revisedData.quantity} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, quantity: e.target.value}))} />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditOrder;
