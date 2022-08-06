import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function App() {

  return (
    <main>
      <Header />
      <nav>
        <Link to="/dogs">View Member Dogs</Link> | {" "}
        {/* <Route path="/" element={ <Main /> } /> */}
      </nav>
      <Outlet />
    </main>
  );
}

export default App;