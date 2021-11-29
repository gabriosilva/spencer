import React from "react";

import { BrowserRouter } from "react-router-dom";

import MainRoute from "./routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
