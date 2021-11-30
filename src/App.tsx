import React from "react";

import { BrowserRouter } from "react-router-dom";

import MainRoute from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="App">
        <MainRoute />
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
