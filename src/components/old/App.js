import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";
import NewOrder from "./NewOrder";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((r) => r.json())
      .then((orders) => setOrders(orders));
  }, []);

  function handleAddOrder(newOrder) {
    setOrders([...orders, newOrder]);
  }

  function handleDeleteOrder(id) {
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

  return (
    <main>
      <OrderList
        orders={orders}
        onOrderDelete={handleDeleteOrder}
        onUpdateOrder={handleUpdateOrder}
      />
      <NewOrder onAddOrder={handleAddOrder} />
    </main>
  );
}

export default App;