import React from "react";
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
// adding up to line 16 on 8/5
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById("root"));