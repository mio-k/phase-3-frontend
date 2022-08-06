import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import "./index.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DogList from "./components/DogList";
import DogItem from "./components/DogItem";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="dogs" element={<Main />} /> 
          <Route path=":dog.id" element={<DogItem />}/> 
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>No matching dog found</p>
            </main>
          }
        />

    </Routes>
  </BrowserRouter>
);