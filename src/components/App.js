import React from "react";
// adding below 8/5
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={ <Main /> } />
      </Routes>
    </main>
  );
}

export default App;