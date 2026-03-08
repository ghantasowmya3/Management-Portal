import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/workflow" element={<Workflow/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
