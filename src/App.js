import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import Dashboard from "./containers/dashboard";

function App() {
  return (
    <div className="bg-netcarbon-dark">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
