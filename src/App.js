import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import AllToll from "./components/AllToll/AllToll";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/toll" element={<AllToll />} />
      </Routes>
    </div>
  );
}

export default App;
