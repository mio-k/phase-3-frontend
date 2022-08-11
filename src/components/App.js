import React, {useState, useEffect} from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import DogItem from "./DogItem";
import OrderItem from "./OrderItem";
import AllOrders from "./AllOrders";

function App() {
  const [dogs, setDogs] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((r) => r.json())
      .then((allDogs) => setDogs(allDogs));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((r) => r.json())
      .then((orders) => setOrders(orders));
  }, []);

  function onDeleteDog(dog_id) {
    console.log(dogs, dog_id)
    const updatedDogs = dogs.filter((dog) => dog.id.toString() !== dog_id);
    console.log(updatedDogs)
    setDogs(updatedDogs);
  }

  function onDeleteOrder(order_id) {
    const updatedOrders = orders.filter((order) => order.id !== order_id);
      setOrders(updatedOrders);
  }
  
  function handleUpdateOrder(updatedOrderObj) {
    console.log(updatedOrderObj)
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
      <p>Welcome to the Dog Pod Food Orders site!</p>
      <Routes>
        <Route path="dogs" element={<Main dogs={dogs} setDogs={setDogs} />} /> 
        <Route path="dogs/:dog_id" element={<DogItem onDeleteDog={onDeleteDog} />}/> 
        <Route path="orders/:order_id" element={<OrderItem onDeleteOrder={onDeleteOrder} handleUpdateOrder={handleUpdateOrder}/>}/> 
        <Route path="orders" element={<AllOrders orders={orders}/>} />
      </Routes>
      <Outlet />
    </main>
  );
}

export default App;