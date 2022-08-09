import React, {useState, useEffect} from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import DogItem from "./DogItem";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((r) => r.json())
      .then((dogs) => setDogs(dogs));
  }, []);

  function onDeleteDog(id) {
    const updatedDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updatedDogs);
  }

  return (
    <main>
      <Header />
      <div>
        <Link to="/dogs">View Member Dogs</Link> | {" "}
      </div>
      <Routes>
        <Route path="dogs" element={<Main dogs={dogs} setDogs={setDogs} />} > </Route>
        <Route path="dogs/:id" element={<DogItem dogs={dogs} onDeleteDog={onDeleteDog}/>}/> 
        <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>No matching dog found</p></main>}/>
      </Routes>
      <Outlet />
    </main>
  );
}

export default App;