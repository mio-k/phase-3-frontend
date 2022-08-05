import React, { useState } from "react";

function NewOrder({onAddOrder}) {
  const [formData, setFormData] = useState({
    item: "",
    dog: "",
    quantity: 0,
    pickup_date: ""
  })

  function handleChange(e){
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((formData) => onAddOrder(formData))
      setFormData({
        dog: "",
        item: "",
        quantity: "",
        pickup_date: ""
      })
  }

  return (
    <form className="new-order" onSubmit={handleSubmit}>
      <h3>Add New Order</h3>
        Dog's Name: <input type="text" name="dog" value={formData.dog} onChange={handleChange}/><br/>
        Item: <input type="text" name="item" value={formData.item} onChange={handleChange}/><br/>
        Quantity: <input type="number" name="quantity" value={formData.quantity} onChange={handleChange}/><br/>
        Pickup Date: <input type="text" name="pickup_date" value={formData.pickup_date} onChange={handleChange}/><br/>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default NewOrder;
