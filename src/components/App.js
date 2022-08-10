import React, {useState, useEffect} from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import DogItem from "./DogItem";
import OrderItem from "./OrderItem";

function App() {
  const [dogs, setDogs] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((r) => r.json())
      .then((dogs) => setDogs(dogs));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((r) => r.json())
      .then((orders) => setOrders(orders));
  }, []);

  function onDeleteDog(dog_id) {
    const updatedDogs = dogs.filter((dog) => dog.id !== dog_id);
    setDogs(updatedDogs);
  }

  function onDeleteOrder(order_id) {
    const updatedOrders = orders.filter((order) => order.id !== order_id);
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

  return (
    <main>
      <Header />
      <Routes>
        <Route path="dogs" element={<Main dogs={dogs} setDogs={setDogs} />} /> 
        <Route path="dogs/:dog_id" element={<DogItem onDeleteDog={onDeleteDog} setOrders={setOrders} orders={orders} />}/> 
        <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>No matching dog found</p></main>}/>
        <Route path="orders/:order_id" element={<OrderItem onDeleteOrder={onDeleteOrder} onUpdateOrder={onUpdateOrder}/>}/> 
      </Routes>
      <Outlet />
    </main>
  );
}

export default App;