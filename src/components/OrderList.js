import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function OrderList({onAddOrder, onOrderDelete, onUpdateOrder}){

    const [orders, setOrders] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/orders")
        .then((r) => r.json())
        .then((orders) => setOrders(orders));
    }, []);
    
    function onAddOrder(newOrder) {
      setOrders([...orders, newOrder]);
    }
    
    function onOrderDelete(id) {
      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
    }
    
    function onUpdateOrder(updatedOrderObj) {
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
            onOrderDelete={onOrderDelete}
            onUpdateOrder={onUpdateOrder}
          />
        )}
      </ul>
    </div>
    )
}
export default OrderList;