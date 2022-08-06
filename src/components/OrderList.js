import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function OrderList({onOrderDelete, onUpdateOrder}){

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((r) => r.json())
      .then((orders) => setOrders(orders));
  }, []);
    
    // function onAddOrder(newOrder) {
    //   setOrders([...orders, newOrder]);
    // }
    
  function handleOrderDelete(id) {
    const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
  }
    
  function handleUpdateOrder(updatedOrderObj) {
    const updatedOrders = orders.map((order) => {
      if (order.id === updatedOrderObj.id) {
        return updatedOrderObj;
      } else {
        return order;
      }
    });
      setOrders(updatedOrders);
  }

  return(
    <div className="list">
      <h2>Current Orders</h2>
      <ul>
        {orders.map((order) => 
          <OrderItem
            key={order.id}
            order={order}
            onOrderDelete={handleOrderDelete}
            onUpdateOrder={handleUpdateOrder}
          />
        )}
      </ul>
    </div>
  )
}
export default OrderList;