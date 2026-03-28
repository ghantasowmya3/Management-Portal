import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  const [employee, setEmployee] = useState(null);

  // Task count state
  const [taskCounts, setTaskCounts] = useState({
    pending: 1,
    inprogress: 1,
    completed: 1,
    total: 3
  });

  return (
    <Router>
      <Navbar employee={employee} />
      <Routes>
        <Route
          path="/"
          element={
            employee ? (
              <Dashboard employee={employee} taskCounts={taskCounts} />
            ) : (
              <Register setEmployee={setEmployee} />
            )
          }
        />
        <Route
          path="/workflow"
          element={
            employee ? (
              <Workflow employee={employee} setTaskCounts={setTaskCounts} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;